这个小项目用于从youtube channel的地址，获取channel_id.

为什么需要channel_id？我一般用channel_id来生成某个频道的完整播放列表，方法是把channel_id开头的UC，改成UU，比如，UCeY0bbntWzzVIaj2z3QigXg --> UUeY0bbntWzzVIaj2z3QigXg，然后用下面的地址看完整播放列表：

https://www.youtube.com/playlist?list=UUeY0bbntWzzVIaj2z3QigXg

如果你想快速浏览某个频道的所有视频，这个播放列表非常好用。

但是youtube的channel_id，在频道主页中并不公开显示，从网页的源代码里才能查询到。这个小脚本就是用来解决这个问题的。

用法：把server.ts 里的内容复制到 https://dash.deno.com 一个新建的playground里，你可以设置playground的名字，就像这样：get-youtube-channel-id-yourname，最后生成的代理服务器地址：

https://get-youtube-channel-id-yourname.deno.dev

我生成的地址是：

https://get-youtube-channel-id.deno.dev

你要是懒得自己弄，也可以直接用我这个，不过建议自己建一个，是个很好的练习。

部署完成后，用这样的地址获得channel_id:

https://get-youtube-channel-id-yourname.deno.dev?channel_url=https://www.youtube.com/@NBCNews

得到的返回数据是：

{"data":{"channel_id":"UCeY0bbntWzzVIaj2z3QigXg"}}

用curl也能直接得到结果。

deno.dev是全球部署，运行不需要翻墙。所以它最适合用来做国外服务的代理桥梁，比如gemini api, groq api，都可以通过这种方法中转。在youtube搜一下就可以找到这类项目。

项目代码是用 https://chat.mistral.ai 写的，我对deno一知半解，全靠mistral强大的编程能力，几分钟就很轻松完成并上线调试了。