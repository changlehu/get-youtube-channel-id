# get-youtube-channel-id
Get youtube channel id from youtube channel url. No google youtube API is needed.

Usage: 

Copy content of server.ts to a new playground in [dash.deno.com](https://dash.deno.com). In deno.com, you can change the name of playground, such as: get-youtube-channel-id-yourname. This name has been used by the author: get-youtube-channel-id, so you should use other name.

Now, you got a new proxy server just like: https://get-youtube-channel-id-yourname.deno.dev

You can get youtube channel id with such url:

https://get-youtube-channel-id-yourname.deno.dev?channel_url=https://www.youtube.com/@NBCNews

It response:

{"data":{"channel_id":"UCeY0bbntWzzVIaj2z3QigXg"}}

OK. You can use my proxy server if you don't want to deploy yours. But I think deploying your own project is a good exercise. 

This is it:

https://get-youtube-channel-id.deno.dev

Why getting youtube channel_id is so useful. For me, I can make a youtube complete playlist with it.

https://www.youtube.com/playlist?list=UUeY0bbntWzzVIaj2z3QigXg

To make playlist player, you should change UC to UU.

Maybe there are other ways using it. You can tell me if you know.