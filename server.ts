import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

async function getChannelId(url: string): Promise<string | null> {
  const response = await fetch(url);
  const text = await response.text();
  const document = new DOMParser().parseFromString(text, "text/html");

  for (const script of document.querySelectorAll("script")) {
    if (script.textContent?.includes('var ytInitialData')) {
      const match = script.textContent.match(/"externalId":"([^"]+)"/);
      if (match) {
        return match[1];
      }
    }
  }
  return null;
}

serve((req) => {
  const url = new URL(req.url, `http://${req.headers.get("host")}`);
  const channelUrl = url.searchParams.get("channel_url");

  if (channelUrl) {
    return getChannelId(channelUrl).then((channelId) => {
      if (channelId) {
        return new Response(
          JSON.stringify({ data: { channel_id: channelId } }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        return new Response(
          JSON.stringify({ error: "Channel ID not found" }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    });
  } else {
    return new Response(
      JSON.stringify({ error: "Missing channel_url parameter" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});