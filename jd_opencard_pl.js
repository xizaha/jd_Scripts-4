/*
品类联合
export jd_opencard_categoryUnion_draw="1" 不自动抽奖
cron "1 1 1 1 1" jd_opencard_pl.js
*/
const $ = new Env('品类联合 ');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxe8421 = ["", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x65\x6E\x76", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x6A\x64\x5F\x6F\x70\x65\x6E\x63\x61\x72\x64\x5F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x5F\x64\x72\x61\x77", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x66\x39\x61\x62\x30\x35\x34\x38\x63\x31\x30\x61\x34\x37\x62\x36\x38\x38\x39\x39\x37\x35\x61\x66\x38\x61\x62\x65\x37\x61\x36\x30", "\x73\x68\x61\x72\x65\x55\x75\x69\x64", "\x39\x64\x34\x37\x62\x35\x39\x64\x65\x66\x39\x36\x34\x30\x62\x66\x38\x63\x64\x31\x65\x66\x63\x33\x30\x62\x30\x32\x35\x36\x31\x38", "\x76\x65\x6E\x64\x65\x72\x49\x64\x73", "\x35\x39\x39\x31\x31\x39", "\u5165\u53E3\x3A\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x66\x72\x69\x65\x6E\x64\x69\x64\x3D", "\x6C\x65\x6E\x67\x74\x68", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\x77\x61\x69\x74", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x68\x61\x73\x45\x6E\x64", "\x65\x6E\x64\x54\x69\x6D\x65", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\u6D3B\u52A8\u7ED3\u675F", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\u83B7\u53D6\x5B\x50\x69\x6E\x5D\u5931\u8D25\uFF01", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x4C\x69\x73\x74", "\x61\x6C\x6C\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74", "\x61\x63\x74\x6F\x72\x55\x75\x69\x64", "\u83B7\u53D6\u4E0D\u5230\x5B\x61\x63\x74\x6F\x72\x55\x75\x69\x64\x5D\u9000\u51FA\u6267\u884C\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C", "\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\u5F00\u5361\u4EFB\u52A1", "\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x6F\x70\x65\x6E\x53\x74\x61\x74\x75\x73", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\x76\x65\x6E\x64\x65\x72\x49\x64", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x69\x6E\x64\x65\x78\x4F\x66", "\u52A0\u5165\u5E97\u94FA\u4F1A\u5458\u5931\u8D25", "\u7B2C\x31\u6B21\u91CD\u8BD5", "\x72\x61\x6E\x64\x6F\x6D", "\u7B2C\x32\u6B21\u91CD\u8BD5", "\u7B2C\x33\u6B21\u91CD\u8BD5", "\u5DF2\u5168\u90E8\u5F00\u5361", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70\x53\x74\x61\x74\x75\x73", "\u5DF2\u5173\u6CE8\x3A", "\x76\x69\x73\x69\x74\x53\x6B\x75\x56\x61\x6C\x75\x65", "\u5173\u6CE8", "\x73\x63\x6F\x72\x65\x3A", "\x73\x63\x6F\x72\x65", "\u62BD\u5956\u6B21\u6570\x3A", "\u4E0D\u6267\u884C\u62BD\u5956", "\u6267\u884C\u62BD\u5956", "\u7B2C", "\u6B21\u62BD\u5956", "\x6C\x75\x63\x6B\x79\x44\x72\x61\x77", "\u62BD\u5956\u592A\u591A\u6B21\uFF0C\u591A\u4F59\u7684\u6B21\u6570\u8BF7\u518D\u6267\u884C\u811A\u672C", "\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6F\x72\x64\x48\x61\x73\x43\x6F\x75\x70\x6F\x6E", "\u5F53\u524D\u52A9\u529B\x3A", "\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A", "\u4F11\u606F\u51E0\u79D2\uFF0C\u522B\u88AB\u9ED1\x69\x70\u4E86\x0A\u53EF\u6301\u7EED\u53D1\u5C55", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x75\x73\x65\x72\x49\x64\x3D\x35\x39\x39\x31\x31\x39\x26\x74\x6F\x6B\x65\x6E\x3D", "\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50", "\x2F\x64\x72\x61\x77\x43\x65\x6E\x74\x65\x72\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x73\x68\x6F\x70\x49\x64", "\x26\x63\x6F\x64\x65\x3D\x39\x39\x26\x70\x69\x6E\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x70\x61\x67\x65\x55\x72\x6C\x3D", "\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x70\x69\x6E\x3D", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x70\x69\x6E\x3D", "\x26\x70\x69\x6E\x49\x6D\x67\x3D", "\x61\x74\x74\x72\x54\x6F\x75\x58\x69\x61\x6E\x67", "\x26\x6E\x69\x63\x6B\x3D", "\x6E\x69\x63\x6B\x6E\x61\x6D\x65", "\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x74\x61\x73\x6B\x61\x63\x74\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x26\x62\x75\x79\x65\x72\x4E\x69\x63\x6B\x3D", "\x26\x75\x73\x65\x72\x49\x64\x3D", "\x26\x61\x63\x74\x6F\x72\x55\x75\x69\x64\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x3D\x39\x39\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\u52A0\u8D2D", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x67\x65\x74\x49\x6E\x66\x6F", "\u9886\u53D6\u5956\u52B1", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x6C\x75\x63\x6B\x79\x44\x72\x61\x77", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x74\x61\x73\x6B\x61\x63\x74\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6F\x72\x64\x48\x61\x73\x43\x6F\x75\x70\x6F\x6E", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x67\x65\x74\x41\x73\x73\x69\x73\x74\x49\x6E\x66\x6F", "\x26\x73\x6F\x72\x74\x53\x74\x61\x74\x75\x73\x3D\x31", "\x67\x65\x74\x53\x68\x61\x72\x65\x52\x65\x63\x6F\x72\x64", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x6D\x65\x73\x73\x61\x67\x65", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x20", "\x72\x65\x73\x75\x6C\x74", "\x64\x61\x74\x61", "\x73\x65\x63\x72\x65\x74\x50\x69\x6E", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\x20", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x67\x31\x30\x2E\x33\x36\x30\x62\x75\x79\x69\x6D\x67\x2E\x63\x6F\x6D\x2F\x69\x6D\x67\x7A\x6F\x6E\x65\x2F\x6A\x66\x73\x2F\x74\x31\x2F\x37\x30\x32\x30\x2F\x32\x37\x2F\x31\x33\x35\x31\x31\x2F\x36\x31\x34\x32\x2F\x35\x63\x35\x31\x33\x38\x64\x38\x45\x34\x64\x66\x32\x65\x37\x36\x34\x2F\x35\x61\x31\x32\x31\x36\x61\x33\x61\x35\x30\x34\x33\x63\x35\x64\x2E\x70\x6E\x67", "\x79\x75\x6E\x4D\x69\x64\x49\x6D\x61\x67\x65\x55\x72\x6C", "\x74\x61\x73\x6B\x44\x61\x74\x61", "\x75\x6E\x69\x6F\x6E\x53\x68\x6F\x70\x49\x6E\x66\x6F\x73", "\x75\x6E\x69\x6F\x6E\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x43\x61\x72\x64\x53\x74\x61\x74\x75\x73", "\x6F\x70\x65\x6E\x49\x6E\x66\x6F", "\u62BD\u5956", "\u5173\u6CE8\x3A", "\x20\x2D\x20", "\x64\x72\x61\x77\x52\x65\x73\x75\x6C\x74", "\x64\x72\x61\x77\x4F\x6B", "\x76\x61\x6C\x75\x65", "\u4EAC\u8C46", "\u7A7A\u6C14\x3F\x3F", "\x61\x64\x64\x50\x6F\x69\x6E\x74", "\u6E38\u620F\u673A\u4F1A", "\u83B7\u5F97\x3A", "\x69\x6E\x66\x6F\x4E\x61\x6D\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\u5171\u83B7\u5F97", "\u9886\u53D6\u673A\u4F1A\x28", "\x68\x61\x73\x44\x72\x61\x77\x54\x69\x6D\x65\x73", "\x2F\x31\x30\x29\x20\u53EF\u9886\u53D6\u5956\u52B1", "\x74\x6F\x74\x61\x6C\x43\x6F\x75\x6E\x74", "\u6B21", "\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20\u4F60\u9080\u8BF7\u4E86\x3A", "\x73\x68\x61\x72\x65\x52\x65\x63\x6F\x72\x64", "\u4E2A", "\x64\x72\x61\x77\x3A", "\x2D\x3E\x20", "\u706B\u7206", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x52\x65\x66\x65\x72\x65\x72", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x4F\x72\x69\x67\x69\x6E", "\x43\x6F\x6F\x6B\x69\x65", "\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D", "\x3B", "\x20\x63\x6F\x6F\x6B\x69\x65\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\u6D3B\u52A8\u5DF2\u7ED3\u675F", "\x67\x65\x74", "\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65", "\x68\x65\x61\x64\x65\x72\x73", "\x3D", "\x73\x70\x6C\x69\x74", "\x73\x75\x62\x73\x74\x72", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x34\x2E\x36\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x66\x6C\x6F\x6F\x72", "\x63\x68\x61\x72\x41\x74", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x73\x68\x6F\x70\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30", "\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x36\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x2A\x2F\x2A", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x68\x6F\x70\x6D\x65\x6D\x62\x65\x72\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x74\x6F\x4F\x62\x6A", "\x73\x75\x63\x63\x65\x73\x73", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x76\x65\x6E\x64\x65\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32", "\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6E\x6E\x65\x6C\x25\x32\x32\x25\x33\x41\x34\x30\x31\x25\x37\x44\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38", "\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x3B\x20\x43\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\u4F1A\u5458\u5361\u540D\u79F0\uFF1A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x75\x73\x65\x72\x49\x6E\x66\x6F", "\x69\x6E\x63\x6C\x75\x64\x65\x73", "\x6F\x70\x65\x6E\x43\x61\x72\x64\x42\x65\x61\x6E", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x73\x6C\x69\x63\x65", "\x6E\x6F\x77", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B", "\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B", "\x46\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x44\x61\x79", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x63\x6F\x6E\x63\x61\x74", "\x29", "\x28", "\x53\x2B", "\x30\x30\x30", "\x30\x30", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x54\x6F\x6B\x65\x6E\x3F\x74\x79\x70\x65\x3D\x6C\x7A\x64\x7A", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x63\x6F\x64\x65", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let cookiesArr = [], cookie = __Oxe8421[0x0];
if ($[__Oxe8421[0x1]]()) {
    Object[__Oxe8421[0x4]](jdCookieNode)[__Oxe8421[0x3]]((_0x6125x3) => {
        cookiesArr[__Oxe8421[0x2]](jdCookieNode[_0x6125x3])
    });
    if (process[__Oxe8421[0x6]][__Oxe8421[0x5]] && process[__Oxe8421[0x6]][__Oxe8421[0x5]] === __Oxe8421[0x7]) {
        console[__Oxe8421[0x8]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxe8421[0xb]](__Oxe8421[0xa]), $[__Oxe8421[0xb]](__Oxe8421[0xc]), ...jsonParse($[__Oxe8421[0xb]](__Oxe8421[0xf]) || __Oxe8421[0x10])[__Oxe8421[0xe]]((_0x6125x3) => {
        return _0x6125x3[__Oxe8421[0xd]]
    })][__Oxe8421[0x9]]((_0x6125x3) => {
        return !!_0x6125x3
    })
}
;
if (parseInt(process[__Oxe8421[0x6]][__Oxe8421[0x11]]) == 1) {
    jd_opencard_categoryUnion_draw = 1
} else {
    jd_opencard_categoryUnion_draw = 0
}
;allMessage = __Oxe8421[0x0];
message = __Oxe8421[0x0];
$[__Oxe8421[0x12]] = false;
$[__Oxe8421[0x13]] = false;
$[__Oxe8421[0x14]] = false;
let lz_jdpin_token_cookie = __Oxe8421[0x0];
let activityCookie = __Oxe8421[0x0];
let lz_cookie = {};
!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxe8421[0x1c]]($[__Oxe8421[0x19]], __Oxe8421[0x1a], __Oxe8421[0x1b], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxe8421[0x1b]});
        return
    }
    ;$[__Oxe8421[0x1d]] = __Oxe8421[0x1e];
    $[__Oxe8421[0x1f]] = __Oxe8421[0x20];
    $[__Oxe8421[0x21]] = __Oxe8421[0x22];
    console[__Oxe8421[0x8]](`${__Oxe8421[0x23]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x24]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`);
    for (let _0x6125x8 = 0; _0x6125x8 < cookiesArr[__Oxe8421[0x25]]; _0x6125x8++) {
        cookie = cookiesArr[_0x6125x8];
        originCookie = cookiesArr[_0x6125x8];
        if (cookie) {
            $[__Oxe8421[0x26]] = decodeURIComponent(cookie[__Oxe8421[0x27]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxe8421[0x27]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[__Oxe8421[0x28]] = _0x6125x8 + 1;
            message = __Oxe8421[0x0];
            $[__Oxe8421[0x29]] = 0;
            $[__Oxe8421[0x12]] = false;
            $[__Oxe8421[0x2a]] = __Oxe8421[0x0];
            console[__Oxe8421[0x8]](`${__Oxe8421[0x2b]}${$[__Oxe8421[0x28]]}${__Oxe8421[0x2c]}${$[__Oxe8421[0x2a]] || $[__Oxe8421[0x26]]}${__Oxe8421[0x2d]}`);
            await getUA();
            await run();
            await $[__Oxe8421[0x2e]](2000);
            if ($[__Oxe8421[0x13]] || $[__Oxe8421[0x14]]) {
                break
            }
        }
    }
    ;
    if ($[__Oxe8421[0x13]]) {
        let _0x6125x9 = __Oxe8421[0x2f];
        $[__Oxe8421[0x1c]]($[__Oxe8421[0x19]], `${__Oxe8421[0x0]}`, `${__Oxe8421[0x0]}${_0x6125x9}${__Oxe8421[0x0]}`);
        if ($[__Oxe8421[0x1]]()) {
            await notify[__Oxe8421[0x30]](`${__Oxe8421[0x0]}${$[__Oxe8421[0x19]]}${__Oxe8421[0x0]}`, `${__Oxe8421[0x0]}${_0x6125x9}${__Oxe8421[0x0]}`)
        }
    }
})()[__Oxe8421[0x18]]((_0x6125x7) => {
    return $[__Oxe8421[0x17]](_0x6125x7)
})[__Oxe8421[0x16]](() => {
    return $[__Oxe8421[0x15]]()
});

async function run() {
    try {
        $[__Oxe8421[0x31]] = true;
        $[__Oxe8421[0x32]] = 0;
        lz_jdpin_token_cookie = __Oxe8421[0x0];
        $[__Oxe8421[0x33]] = __Oxe8421[0x0];
        $[__Oxe8421[0x34]] = __Oxe8421[0x0];
        let _0x6125xb = false;
        await takePostRequest(__Oxe8421[0x35]);
        if ($[__Oxe8421[0x33]] == __Oxe8421[0x0]) {
            console[__Oxe8421[0x8]](__Oxe8421[0x36]);
            return
        }
        ;await getCk();
        if (activityCookie == __Oxe8421[0x0]) {
            console[__Oxe8421[0x8]](`${__Oxe8421[0x37]}`);
            return
        }
        ;
        if ($[__Oxe8421[0x14]] === true) {
            console[__Oxe8421[0x8]](__Oxe8421[0x38]);
            return
        }
        ;
        if ($[__Oxe8421[0x13]]) {
            console[__Oxe8421[0x8]](__Oxe8421[0x39]);
            return
        }
        ;await takePostRequest(__Oxe8421[0x3a]);
        if (!$[__Oxe8421[0x34]]) {
            console[__Oxe8421[0x8]](__Oxe8421[0x3b]);
            return
        }
        ;await takePostRequest(__Oxe8421[0x3c]);
        await takePostRequest(__Oxe8421[0x3d]);
        $[__Oxe8421[0x3e]] = [];
        $[__Oxe8421[0x3f]] = false;
        await takePostRequest(__Oxe8421[0x40]);
        if (!$[__Oxe8421[0x41]]) {
            console[__Oxe8421[0x8]](__Oxe8421[0x42]);
            return
        }
        ;await takePostRequest(__Oxe8421[0x43]);
        await $[__Oxe8421[0x2e]](1000);
        if ($[__Oxe8421[0x3f]] == false) {
            console[__Oxe8421[0x8]](__Oxe8421[0x44]);
            for (o of $[__Oxe8421[0x3e]]) {
                $[__Oxe8421[0x45]] = false;
                if (o[__Oxe8421[0x46]] == false) {
                    _0x6125xb = true;
                    $[__Oxe8421[0x47]] = o[__Oxe8421[0x48]];
                    $[__Oxe8421[0x49]] = __Oxe8421[0x0];
                    await joinShop();
                    if ($[__Oxe8421[0x49]][__Oxe8421[0x4b]](__Oxe8421[0x4a]) > -1 || $[__Oxe8421[0x49]][__Oxe8421[0x4b]](__Oxe8421[0x4c]) > -1) {
                        console[__Oxe8421[0x8]](__Oxe8421[0x4d]);
                        await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 500 + 700, 10));
                        await joinShop()
                    }
                    ;
                    if ($[__Oxe8421[0x49]][__Oxe8421[0x4b]](__Oxe8421[0x4a]) > -1 || $[__Oxe8421[0x49]][__Oxe8421[0x4b]](__Oxe8421[0x4c]) > -1) {
                        console[__Oxe8421[0x8]](__Oxe8421[0x4f]);
                        await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 500 + 700, 10));
                        await joinShop()
                    }
                    ;
                    if ($[__Oxe8421[0x49]][__Oxe8421[0x4b]](__Oxe8421[0x4a]) > -1 || $[__Oxe8421[0x49]][__Oxe8421[0x4b]](__Oxe8421[0x4c]) > -1) {
                        console[__Oxe8421[0x8]](__Oxe8421[0x50]);
                        await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 500 + 700, 10));
                        await joinShop()
                    }
                }
            }
            ;await takePostRequest(__Oxe8421[0x40]);
            await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 1000 + 1000, 10));
            await takePostRequest(__Oxe8421[0x43])
        } else {
            console[__Oxe8421[0x8]](__Oxe8421[0x51])
        }
        ;
        for (const _0x6125xc of $[__Oxe8421[0x3e]]) {
            if ($[__Oxe8421[0x52]] == false) {
                break
            }
            ;
            if (_0x6125xc[__Oxe8421[0x53]] == true) {
                console[__Oxe8421[0x8]](`${__Oxe8421[0x54]}${_0x6125xc[__Oxe8421[0x48]]}${__Oxe8421[0x0]}`)
            } else {
                $[__Oxe8421[0x55]] = _0x6125xc[__Oxe8421[0x48]];
                await takePostRequest(__Oxe8421[0x56]);
                await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 1500 + 1500, 10))
            }
        }
        ;console[__Oxe8421[0x8]](`${__Oxe8421[0x57]}${$[__Oxe8421[0x58]]}${__Oxe8421[0x0]}`);
        $[__Oxe8421[0x52]] = true;
        let _0x6125xd = parseInt($[__Oxe8421[0x58]] / 1);
        console[__Oxe8421[0x8]](`${__Oxe8421[0x59]}${_0x6125xd}${__Oxe8421[0x0]}`);
        if (jd_opencard_categoryUnion_draw == 1) {
            console[__Oxe8421[0x8]](`${__Oxe8421[0x5a]}`)
        } else {
            console[__Oxe8421[0x8]](`${__Oxe8421[0x5b]}`);
            for (m = 1; _0x6125xd--; m++) {
                console[__Oxe8421[0x8]](`${__Oxe8421[0x5c]}${m}${__Oxe8421[0x5d]}`);
                await takePostRequest(__Oxe8421[0x5e]);
                if ($[__Oxe8421[0x52]] == false) {
                    break
                }
                ;
                if (Number(_0x6125xd) <= 0) {
                    break
                }
                ;
                if (m >= 10) {
                    console[__Oxe8421[0x8]](__Oxe8421[0x5f]);
                    break
                }
                ;await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 1300 + 1500, 10))
            }
        }
        ;await takePostRequest(__Oxe8421[0x60]);
        if ($[__Oxe8421[0x13]]) {
            console[__Oxe8421[0x8]](__Oxe8421[0x39]);
            return
        }
        ;console[__Oxe8421[0x8]]($[__Oxe8421[0x41]]);
        console[__Oxe8421[0x8]](`${__Oxe8421[0x61]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`);
        if ($[__Oxe8421[0x28]] == 1) {
            $[__Oxe8421[0x1f]] = $[__Oxe8421[0x41]];
            console[__Oxe8421[0x8]](`${__Oxe8421[0x62]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`)
        }
        ;
        if (_0x6125xb) {
            await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 1000 + 2500, 10))
        }
        ;
        if ($[__Oxe8421[0x28]] % 3 == 0) {
            console[__Oxe8421[0x8]](__Oxe8421[0x63])
        }
        ;
        if ($[__Oxe8421[0x28]] % 3 == 0) {
            await $[__Oxe8421[0x2e]](parseInt(Math[__Oxe8421[0x4e]]() * 5000 + 2500, 10))
        }
    } catch (e) {
        console[__Oxe8421[0x8]](e)
    }
}

async function takePostRequest(_0x6125xf) {
    if ($[__Oxe8421[0x13]]) {
        return
    }
    ;let _0x6125x10 = __Oxe8421[0x64];
    let _0x6125x11 = `${__Oxe8421[0x0]}`;
    let _0x6125x12 = __Oxe8421[0x65];
    let _0x6125x13 = __Oxe8421[0x0];
    switch (_0x6125xf) {
        case __Oxe8421[0x35]:
            _0x6125x10 = `${__Oxe8421[0x66]}`;
            _0x6125x11 = await getToken();
            break;
        case __Oxe8421[0x3a]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x67]}`;
            _0x6125x11 = `${__Oxe8421[0x68]}${$[__Oxe8421[0x33]]}${__Oxe8421[0x69]}`;
            break;
        case __Oxe8421[0x3c]:
            let _0x6125x14 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x6a]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x6b]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`;
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x6c]}`;
            _0x6125x11 = `${__Oxe8421[0x6d]}${$[__Oxe8421[0x6e]] || $[__Oxe8421[0x48]] || $[__Oxe8421[0x21]] || __Oxe8421[0x0]}${__Oxe8421[0x6f]}${encodeURIComponent($.Pin)}${__Oxe8421[0x70]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x71]}${encodeURIComponent(_0x6125x14)}${__Oxe8421[0x72]}`;
            break;
        case __Oxe8421[0x3d]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x73]}`;
            _0x6125x11 = `${__Oxe8421[0x74]}${encodeURIComponent($.Pin)}${__Oxe8421[0x0]}`;
            break;
        case __Oxe8421[0x40]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x75]}`;
            _0x6125x11 = `${__Oxe8421[0x76]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x77]}${encodeURIComponent($.Pin)}${__Oxe8421[0x78]}${encodeURIComponent($[__Oxe8421[0x79]])}${__Oxe8421[0x7a]}${encodeURIComponent($[__Oxe8421[0x7b]])}${__Oxe8421[0x7c]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`;
            break;
        case __Oxe8421[0x43]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x7d]}`;
            _0x6125x11 = `${__Oxe8421[0x76]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x77]}${encodeURIComponent($.Pin)}${__Oxe8421[0x0]}`;
            break;
        case __Oxe8421[0x56]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x7e]}`;
            _0x6125x11 = `${__Oxe8421[0x76]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x7f]}${encodeURIComponent($.Pin)}${__Oxe8421[0x80]}${$[__Oxe8421[0x55]]}${__Oxe8421[0x81]}${$[__Oxe8421[0x41]]}${__Oxe8421[0x82]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`;
            break;
        case __Oxe8421[0x83]:
            break;
        case __Oxe8421[0x85]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x84]}`;
            _0x6125x11 = `${__Oxe8421[0x76]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x77]}${encodeURIComponent($.Pin)}${__Oxe8421[0x81]}${$[__Oxe8421[0x41]]}${__Oxe8421[0x0]}`;
            break;
        case __Oxe8421[0x5e]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x86]}`;
            _0x6125x11 = `${__Oxe8421[0x76]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x77]}${encodeURIComponent($.Pin)}${__Oxe8421[0x81]}${$[__Oxe8421[0x41]]}${__Oxe8421[0x0]}`;
            break;
        case __Oxe8421[0x60]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x87]}`;
            _0x6125x11 = `${__Oxe8421[0x76]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x77]}${encodeURIComponent($.Pin)}${__Oxe8421[0x81]}${$[__Oxe8421[0x41]]}${__Oxe8421[0x0]}`;
            break;
        case __Oxe8421[0x8a]:
            _0x6125x10 = `${__Oxe8421[0x0]}${_0x6125x10}${__Oxe8421[0x88]}`;
            _0x6125x11 = `${__Oxe8421[0x76]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x81]}${$[__Oxe8421[0x41]]}${__Oxe8421[0x89]}`;
            break;
        default:
            console[__Oxe8421[0x8]](`${__Oxe8421[0x8b]}${_0x6125xf}${__Oxe8421[0x0]}`)
    }
    ;let _0x6125x15 = getPostRequest(_0x6125x10, _0x6125x11, _0x6125x12);
    await $[__Oxe8421[0x2e]](500);
    return new Promise(async (_0x6125x16) => {
        $[__Oxe8421[0x90]](_0x6125x15, (_0x6125x17, _0x6125x18, _0x6125x19) => {
            try {
                setActivityCookie(_0x6125x18);
                if (_0x6125x17) {
                    if (_0x6125x18 && typeof _0x6125x18[__Oxe8421[0x8c]] != __Oxe8421[0x8d]) {
                        if (_0x6125x18[__Oxe8421[0x8c]] == 493) {
                            console[__Oxe8421[0x8]](__Oxe8421[0x39]);
                            $[__Oxe8421[0x13]] = true
                        }
                    }
                    ;console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${$[__Oxe8421[0x8e]](_0x6125x17, _0x6125x17)}${__Oxe8421[0x0]}`);
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x8f]}`)
                } else {
                    dealReturn(_0x6125xf, _0x6125x19)
                }
            } catch (e) {
                console[__Oxe8421[0x8]](e, _0x6125x18)
            } finally {
                _0x6125x16()
            }
        })
    })
}

async function dealReturn(_0x6125xf, _0x6125x19) {
    let _0x6125x1b = __Oxe8421[0x0];
    try {
        if (_0x6125xf != __Oxe8421[0x3c] || _0x6125xf != __Oxe8421[0x43]) {
            if (_0x6125x19) {
                _0x6125x1b = JSON[__Oxe8421[0x91]](_0x6125x19)
            }
        }
    } catch (e) {
        console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x92]}`);
        console[__Oxe8421[0x8]](_0x6125x19);
        $[__Oxe8421[0x52]] = false
    }
    ;
    try {
        switch (_0x6125xf) {
            case __Oxe8421[0x35]:
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0x94]] == 0) {
                        if (typeof _0x6125x1b[__Oxe8421[0x95]] != __Oxe8421[0x8d]) {
                            $[__Oxe8421[0x33]] = _0x6125x1b[__Oxe8421[0x95]]
                        }
                    } else {
                        if (_0x6125x1b[__Oxe8421[0x96]]) {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x97]}${_0x6125x1b[__Oxe8421[0x96]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](_0x6125x19)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](_0x6125x19)
                }
                ;
                break;
            case __Oxe8421[0x3a]:
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0x98]] && _0x6125x1b[__Oxe8421[0x98]] === true) {
                        if (_0x6125x1b[__Oxe8421[0x99]] && typeof _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x9a]] != __Oxe8421[0x8d]) {
                            $[__Oxe8421[0x34]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x9a]]
                        }
                        ;
                        if (_0x6125x1b[__Oxe8421[0x99]] && typeof _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x7b]] != __Oxe8421[0x8d]) {
                            $[__Oxe8421[0x7b]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x7b]]
                        }
                    } else {
                        if (_0x6125x1b[__Oxe8421[0x9b]]) {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x1b[__Oxe8421[0x9b]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                }
                ;
                break;
            case __Oxe8421[0x3d]:
                $[__Oxe8421[0x79]] = __Oxe8421[0x9d];
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0x98]] && _0x6125x1b[__Oxe8421[0x98]] === true) {
                        if (_0x6125x1b[__Oxe8421[0x99]] && typeof _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x9e]] != __Oxe8421[0x8d]) {
                            $[__Oxe8421[0x79]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x9e]] || $[__Oxe8421[0x79]]
                        }
                    } else {
                        if (_0x6125x1b[__Oxe8421[0x9b]]) {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x1b[__Oxe8421[0x9b]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                }
                ;
                break;
            case __Oxe8421[0x40]:
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0x98]] && _0x6125x1b[__Oxe8421[0x98]] === true) {
                        $[__Oxe8421[0x31]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x31]] || false;
                        $[__Oxe8421[0x9f]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x43]] || {};
                        $[__Oxe8421[0x41]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x41]] || __Oxe8421[0x0];
                        $[__Oxe8421[0xa0]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xa1]] || [];
                        $[__Oxe8421[0x3f]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xa2]][__Oxe8421[0x99]][__Oxe8421[0x3f]] || false;
                        $[__Oxe8421[0x3e]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xa2]][__Oxe8421[0x99]][__Oxe8421[0xa3]] || [];
                        $[__Oxe8421[0x58]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0x58]] || 0;
                        if ($[__Oxe8421[0x28]] == 1) {
                            console[__Oxe8421[0x8]]($[__Oxe8421[0x41]])
                        }
                    } else {
                        if (_0x6125x1b[__Oxe8421[0x9b]]) {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x1b[__Oxe8421[0x9b]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                }
                ;
                break;
            case __Oxe8421[0xa4]:
                ;
            case __Oxe8421[0x56]:
                console[__Oxe8421[0x8]](`${__Oxe8421[0xa5]}${$[__Oxe8421[0x55]]}${__Oxe8421[0xa6]}${_0x6125x19}${__Oxe8421[0x0]}`);
            case __Oxe8421[0x83]:
                break;
            case __Oxe8421[0x85]:
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0x98]] && _0x6125x1b[__Oxe8421[0x98]] === true) {
                        if (typeof _0x6125x1b[__Oxe8421[0x99]] == __Oxe8421[0x93]) {
                            let _0x6125x9 = __Oxe8421[0x0];
                            let _0x6125x1c = _0x6125xf;
                            if (_0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xa7]]) {
                                _0x6125x9 += (_0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xa7]][__Oxe8421[0xa8]] == true && _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xa7]][__Oxe8421[0xa9]] + __Oxe8421[0xaa]) || __Oxe8421[0xab]
                            }
                            ;
                            if (_0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xac]]) {
                                _0x6125x9 += `${__Oxe8421[0x9c]}${_0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xac]]}${__Oxe8421[0xad]}`
                            }
                            ;console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125x1c}${__Oxe8421[0xae]}${_0x6125x9 || _0x6125x19}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                        }
                    } else {
                        if (_0x6125x1b[__Oxe8421[0x9b]]) {
                            $[__Oxe8421[0x52]] = false;
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x1b[__Oxe8421[0x9b]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                }
                ;
                break;
            case __Oxe8421[0x60]:
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0x98]] && _0x6125x1b[__Oxe8421[0x98]] === true) {
                        let _0x6125x1d = 0;
                        for (let _0x6125x8 in _0x6125x1b[__Oxe8421[0x99]]) {
                            let _0x6125x3 = _0x6125x1b[__Oxe8421[0x99]][_0x6125x8];
                            if (_0x6125x3[__Oxe8421[0xaf]][__Oxe8421[0x4b]](__Oxe8421[0xaa]) > -1) {
                                _0x6125x1d += Number(_0x6125x3[__Oxe8421[0xaf]][__Oxe8421[0xb0]](__Oxe8421[0xaa], __Oxe8421[0x0])) || 0
                            }
                        }
                        ;
                        if (_0x6125x1d > 0) {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0xb1]}${parseInt(_0x6125x1d, 10) || 0}${__Oxe8421[0xaa]}`)
                        }
                    } else {
                        if (_0x6125x1b[__Oxe8421[0x9b]]) {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x1b[__Oxe8421[0x9b]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                }
                ;
                break;
            case __Oxe8421[0x8a]:
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0x98]] && _0x6125x1b[__Oxe8421[0x98]] === true && _0x6125x1b[__Oxe8421[0x99]]) {
                        console[__Oxe8421[0x8]](`${__Oxe8421[0xb2]}${_0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xb3]]}${__Oxe8421[0xb4]}${_0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xb5]]}${__Oxe8421[0xb6]}`);
                        $[__Oxe8421[0xb5]] = _0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xb5]];
                        $[__Oxe8421[0x8]](`${__Oxe8421[0xb7]}${_0x6125x1b[__Oxe8421[0x99]][__Oxe8421[0xb8]][__Oxe8421[0x25]]}${__Oxe8421[0xb9]}`)
                    } else {
                        if (_0x6125x1b[__Oxe8421[0x9b]]) {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x1b[__Oxe8421[0x9b]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0x9c]}${_0x6125x19}${__Oxe8421[0x0]}`)
                }
                ;
                break;
            case __Oxe8421[0x3c]:
                ;
            case __Oxe8421[0x43]:
                break;
            case __Oxe8421[0x5e]:
                console[__Oxe8421[0x8]](`${__Oxe8421[0xba]}${_0x6125x19}${__Oxe8421[0x0]}`);
                break;
            default:
                console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125xf}${__Oxe8421[0xbb]}${_0x6125x19}${__Oxe8421[0x0]}`)
        }
        ;
        if (typeof _0x6125x1b == __Oxe8421[0x93]) {
            if (_0x6125x1b[__Oxe8421[0x9b]]) {
                if (_0x6125x1b[__Oxe8421[0x9b]][__Oxe8421[0x4b]](__Oxe8421[0xbc]) > -1) {
                    $[__Oxe8421[0x12]] = true
                }
            }
        }
    } catch (e) {
        console[__Oxe8421[0x8]](e)
    }
}

function getPostRequest(_0x6125x10, _0x6125x11, _0x6125x12 = __Oxe8421[0x65]) {
    let _0x6125x1f = {
        "\x41\x63\x63\x65\x70\x74": __Oxe8421[0xbd],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxe8421[0xbe],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxe8421[0xbf],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxe8421[0xc0],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxe8421[0xc1],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxe8421[0xc2]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxe8421[0xc3]
    };
    if (_0x6125x10[__Oxe8421[0x4b]](__Oxe8421[0x64]) > -1) {
        _0x6125x1f[__Oxe8421[0xc4]] = `${__Oxe8421[0xc5]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0xc6]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`;
        _0x6125x1f[__Oxe8421[0xc7]] = `${__Oxe8421[0x64]}`;
        _0x6125x1f[__Oxe8421[0xc8]] = `${__Oxe8421[0x0]}${lz_jdpin_token_cookie && lz_jdpin_token_cookie || __Oxe8421[0x0]}${__Oxe8421[0x0]}${$[__Oxe8421[0x34]] && __Oxe8421[0xc9] + $[__Oxe8421[0x34]] + __Oxe8421[0xca] || __Oxe8421[0x0]}${__Oxe8421[0x0]}${activityCookie}${__Oxe8421[0x0]}`
    }
    ;
    return {url: _0x6125x10, method: _0x6125x12, headers: _0x6125x1f, body: _0x6125x11, timeout: 30000}
}

function getCk() {
    return new Promise((_0x6125x16) => {
        let _0x6125x21 = {
            url: `${__Oxe8421[0xc5]}${$[__Oxe8421[0x1d]]}${__Oxe8421[0x6b]}${$[__Oxe8421[0x1f]]}${__Oxe8421[0x0]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxe8421[0xc2]]},
            timeout: 30000
        };
        $[__Oxe8421[0xcd]](_0x6125x21, async (_0x6125x17, _0x6125x18, _0x6125x19) => {
            try {
                if (_0x6125x17) {
                    if (_0x6125x18 && typeof _0x6125x18[__Oxe8421[0x8c]] != __Oxe8421[0x8d]) {
                        if (_0x6125x18[__Oxe8421[0x8c]] == 493) {
                            console[__Oxe8421[0x8]](__Oxe8421[0x39]);
                            $[__Oxe8421[0x13]] = true
                        }
                    }
                    ;console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${$[__Oxe8421[0x8e]](_0x6125x17)}${__Oxe8421[0x0]}`);
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${$[__Oxe8421[0x19]]}${__Oxe8421[0xcb]}`)
                } else {
                    let _0x6125x22 = _0x6125x19[__Oxe8421[0x27]](/(活动已经结束)/) && _0x6125x19[__Oxe8421[0x27]](/(活动已经结束)/)[0x1] || __Oxe8421[0x0];
                    if (_0x6125x22) {
                        $[__Oxe8421[0x14]] = true;
                        console[__Oxe8421[0x8]](__Oxe8421[0xcc])
                    }
                    ;setActivityCookie(_0x6125x18)
                }
            } catch (e) {
                $[__Oxe8421[0x17]](e, _0x6125x18)
            } finally {
                _0x6125x16()
            }
        })
    })
}

function setActivityCookie(_0x6125x18) {
    if (_0x6125x18[__Oxe8421[0xcf]][__Oxe8421[0xce]]) {
        cookie = originCookie + __Oxe8421[0xca];
        for (let _0x6125x24 of _0x6125x18[__Oxe8421[0xcf]][__Oxe8421[0xce]]) {
            lz_cookie[_0x6125x24[__Oxe8421[0xd1]](__Oxe8421[0xca])[0x0][__Oxe8421[0xd2]](0, _0x6125x24[__Oxe8421[0xd1]](__Oxe8421[0xca])[0x0][__Oxe8421[0x4b]](__Oxe8421[0xd0]))] = _0x6125x24[__Oxe8421[0xd1]](__Oxe8421[0xca])[0x0][__Oxe8421[0xd2]](_0x6125x24[__Oxe8421[0xd1]](__Oxe8421[0xca])[0x0][__Oxe8421[0x4b]](__Oxe8421[0xd0]) + 1)
        }
        ;
        for (const _0x6125xc of Object[__Oxe8421[0x4]](lz_cookie)) {
            cookie += (_0x6125xc + __Oxe8421[0xd0] + lz_cookie[_0x6125xc] + __Oxe8421[0xca])
        }
        ;activityCookie = cookie
    }
}

async function getUA() {
    $[__Oxe8421[0xc2]] = `${__Oxe8421[0xd3]}${randomString(40)}${__Oxe8421[0xd4]}`
}

function randomString(_0x6125x7) {
    _0x6125x7 = _0x6125x7 || 32;
    let _0x6125x27 = __Oxe8421[0xd5], _0x6125x28 = _0x6125x27[__Oxe8421[0x25]], _0x6125x29 = __Oxe8421[0x0];
    for (i = 0; i < _0x6125x7; i++) {
        _0x6125x29 += _0x6125x27[__Oxe8421[0xd7]](Math[__Oxe8421[0xd6]](Math[__Oxe8421[0x4e]]() * _0x6125x28))
    }
    ;
    return _0x6125x29
}

async function joinShop() {
    if (!$[__Oxe8421[0x47]]) {
        return
    }
    ;
    return new Promise(async (_0x6125x16) => {
        $[__Oxe8421[0x49]] = __Oxe8421[0x4a];
        let _0x6125x2b = `${__Oxe8421[0x0]}`;
        if ($[__Oxe8421[0xd8]]) {
            _0x6125x2b = `${__Oxe8421[0xd9]}${$[__Oxe8421[0xd8]]}${__Oxe8421[0x0]}`
        }
        ;let _0x6125x11 = `${__Oxe8421[0xda]}${$[__Oxe8421[0x47]]}${__Oxe8421[0xdb]}${$[__Oxe8421[0x47]]}${__Oxe8421[0xdc]}${_0x6125x2b}${__Oxe8421[0xdd]}`;
        let _0x6125x2c = __Oxe8421[0x0];
        _0x6125x2c = await geth5st();
        const _0x6125x2d = {
            url: `${__Oxe8421[0xde]}${_0x6125x11}${__Oxe8421[0xdf]}${_0x6125x2c}${__Oxe8421[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxe8421[0xe0],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxe8421[0xbe],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxe8421[0xe1],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxe8421[0xe2],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxe8421[0xc2]]
            }
        };
        $[__Oxe8421[0xcd]](_0x6125x2d, async (_0x6125x17, _0x6125x18, _0x6125x19) => {
            try {
                _0x6125x19 = _0x6125x19 && _0x6125x19[__Oxe8421[0x27]](/jsonp_.*?\((.*?)\);/) && _0x6125x19[__Oxe8421[0x27]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x6125x19;
                let _0x6125x1b = $[__Oxe8421[0xe3]](_0x6125x19, _0x6125x19);
                if (_0x6125x1b && typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b && _0x6125x1b[__Oxe8421[0xe4]] === true) {
                        console[__Oxe8421[0x8]](_0x6125x1b[__Oxe8421[0x96]]);
                        $[__Oxe8421[0x49]] = _0x6125x1b[__Oxe8421[0x96]];
                        if (_0x6125x1b[__Oxe8421[0x98]] && _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xe5]]) {
                            for (let _0x6125x8 of _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xe5]][__Oxe8421[0xe6]]) {
                                console[__Oxe8421[0x8]](`${__Oxe8421[0xe7]}${_0x6125x8[__Oxe8421[0xe8]]}${__Oxe8421[0x0]}${_0x6125x8[__Oxe8421[0xe9]]}${__Oxe8421[0x0]}${_0x6125x8[__Oxe8421[0xea]]}${__Oxe8421[0x0]}`)
                            }
                        }
                    } else {
                        if (_0x6125x1b && typeof _0x6125x1b == __Oxe8421[0x93] && _0x6125x1b[__Oxe8421[0x96]]) {
                            $[__Oxe8421[0x49]] = _0x6125x1b[__Oxe8421[0x96]];
                            console[__Oxe8421[0x8]](`${__Oxe8421[0x0]}${_0x6125x1b[__Oxe8421[0x96]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`)
                        } else {
                            console[__Oxe8421[0x8]](_0x6125x19)
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](_0x6125x19)
                }
            } catch (e) {
                $[__Oxe8421[0x17]](e, _0x6125x18)
            } finally {
                _0x6125x16()
            }
        })
    })
}

function getshopactivityId() {
    return new Promise((_0x6125x16) => {
        const _0x6125x2d = {
            url: `${__Oxe8421[0xeb]}${$[__Oxe8421[0x47]]}${__Oxe8421[0xec]}`,
            headers: {
                '\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65': __Oxe8421[0xed],
                '\x4F\x72\x69\x67\x69\x6E': __Oxe8421[0xee],
                '\x48\x6F\x73\x74': __Oxe8421[0xef],
                '\x61\x63\x63\x65\x70\x74': __Oxe8421[0xe0],
                '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': $[__Oxe8421[0xc2]],
                '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxe8421[0xc1],
                '\x43\x6F\x6F\x6B\x69\x65': cookie
            }
        };
        $[__Oxe8421[0xcd]](_0x6125x2d, async (_0x6125x17, _0x6125x18, _0x6125x19) => {
            try {
                let _0x6125x1b = $[__Oxe8421[0xe3]](_0x6125x19, _0x6125x19);
                if (typeof _0x6125x1b == __Oxe8421[0x93]) {
                    if (_0x6125x1b[__Oxe8421[0xe4]] == true) {
                        console[__Oxe8421[0x8]](`${__Oxe8421[0xf0]}${_0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf2]][__Oxe8421[0xf1]] || __Oxe8421[0x0]}${__Oxe8421[0x0]}`);
                        $[__Oxe8421[0xd8]] = _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]] && _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]][0x0] && _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]][0x0][__Oxe8421[0xf4]] && _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]][0x0][__Oxe8421[0xf4]][__Oxe8421[0x1d]] || __Oxe8421[0x0];
                        $[__Oxe8421[0xa2]] = _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf5]][__Oxe8421[0xa2]];
                        if (_0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]] && _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]][__Oxe8421[0x25]]) {
                            for (let _0x6125x8 = 0; _0x6125x8 < _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]][__Oxe8421[0x25]]; _0x6125x8++) {
                                const _0x6125x3 = _0x6125x1b[__Oxe8421[0x98]][__Oxe8421[0xf3]][_0x6125x8];
                                if (_0x6125x3[__Oxe8421[0xe9]] && _0x6125x3[__Oxe8421[0xe9]][__Oxe8421[0xf6]](__Oxe8421[0xaa])) {
                                    $[__Oxe8421[0xf7]] = parseInt(_0x6125x3[__Oxe8421[0xe8]]);
                                    break
                                }
                            }
                        }
                    }
                } else {
                    console[__Oxe8421[0x8]](_0x6125x19)
                }
            } catch (e) {
                $[__Oxe8421[0x17]](e, _0x6125x18)
            } finally {
                _0x6125x16()
            }
        })
    })
}

function generateFp() {
    let _0x6125x7 = __Oxe8421[0xf8];
    let _0x6125x28 = 13;
    let _0x6125x8 = __Oxe8421[0x0];
    for (; _0x6125x28--;) {
        _0x6125x8 += _0x6125x7[Math[__Oxe8421[0x4e]]() * _0x6125x7[__Oxe8421[0x25]] | 0]
    }
    ;
    return (_0x6125x8 + Date[__Oxe8421[0xfa]]())[__Oxe8421[0xf9]](0, 16)
}

function geth5st() {
    let _0x6125x31 = Date[__Oxe8421[0xfa]]();
    let _0x6125x32 = generateFp();
    let _0x6125x33 = new Date(_0x6125x31).Format(__Oxe8421[0xfb]);
    let _0x6125x34 = [__Oxe8421[0xfc], __Oxe8421[0xfd], __Oxe8421[0xfe]];
    let _0x6125x35 = _0x6125x34[random(0, _0x6125x34[__Oxe8421[0x25]])];
    return encodeURIComponent(_0x6125x33 + __Oxe8421[0xca] + _0x6125x35 + _0x6125x32 + __Oxe8421[0x0] + Date[__Oxe8421[0xfa]]())
}

function getH5st() {
    let _0x6125x31 = Date[__Oxe8421[0xfa]]();
    let _0x6125x32 = generateFp();
    let _0x6125x33 = new Date(_0x6125x31).Format(__Oxe8421[0xfb]);
    return encodeURIComponent(_0x6125x33 + __Oxe8421[0xca] + __Oxe8421[0x0] + _0x6125x32 + __Oxe8421[0xfd] + Date[__Oxe8421[0xfa]]())
}

Date[__Oxe8421[0x100]][__Oxe8421[0xff]] = function (_0x6125x37) {
    var _0x6125x7, _0x6125x29 = this, _0x6125x38 = _0x6125x37, _0x6125x39 = {
        "\x4D\x2B": _0x6125x29[__Oxe8421[0x101]]() + 1,
        "\x64\x2B": _0x6125x29[__Oxe8421[0x102]](),
        "\x44\x2B": _0x6125x29[__Oxe8421[0x102]](),
        "\x68\x2B": _0x6125x29[__Oxe8421[0x103]](),
        "\x48\x2B": _0x6125x29[__Oxe8421[0x103]](),
        "\x6D\x2B": _0x6125x29[__Oxe8421[0x104]](),
        "\x73\x2B": _0x6125x29[__Oxe8421[0x105]](),
        "\x77\x2B": _0x6125x29[__Oxe8421[0x106]](),
        "\x71\x2B": Math[__Oxe8421[0xd6]]((_0x6125x29[__Oxe8421[0x101]]() + 3) / 3),
        "\x53\x2B": _0x6125x29[__Oxe8421[0x107]]()
    };
    /(y+)/i[__Oxe8421[0x108]](_0x6125x38) && (_0x6125x38 = _0x6125x38[__Oxe8421[0xb0]](RegExp.$1, __Oxe8421[0x0][__Oxe8421[0x10b]](_0x6125x29[__Oxe8421[0x10a]]())[__Oxe8421[0xd2]](4 - RegExp[__Oxe8421[0x109]][__Oxe8421[0x25]])));
    for (var _0x6125x3a in _0x6125x39) {
        if (new RegExp(__Oxe8421[0x10d][__Oxe8421[0x10b]](_0x6125x3a, __Oxe8421[0x10c]))[__Oxe8421[0x108]](_0x6125x38)) {
            var _0x6125x27, _0x6125x28 = __Oxe8421[0x10e] === _0x6125x3a ? __Oxe8421[0x10f] : __Oxe8421[0x110];
            _0x6125x38 = _0x6125x38[__Oxe8421[0xb0]](RegExp.$1, 1 == RegExp[__Oxe8421[0x109]][__Oxe8421[0x25]] ? _0x6125x39[_0x6125x3a] : (__Oxe8421[0x0][__Oxe8421[0x10b]](_0x6125x28) + _0x6125x39[_0x6125x3a])[__Oxe8421[0xd2]](__Oxe8421[0x0][__Oxe8421[0x10b]](_0x6125x39[_0x6125x3a])[__Oxe8421[0x25]]))
        }
    }
    ;
    return _0x6125x38
};

function getToken() {
    return new Promise((_0x6125x16) => {
        $[__Oxe8421[0xcd]]({
            url: `${__Oxe8421[0x111]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxe8421[0x112]},
            timeout: 30000
        }, (_0x6125x17, _0x6125x18, _0x6125x19) => {
            try {
                if (_0x6125x17) {
                    console[__Oxe8421[0x8]](`${__Oxe8421[0x113]}`)
                } else {
                    _0x6125x19 = JSON[__Oxe8421[0x91]](_0x6125x19);
                    if (_0x6125x19[__Oxe8421[0x114]] == 0) {
                        _0x6125x19 = _0x6125x19[__Oxe8421[0x99]]
                    } else {
                        _0x6125x19 = __Oxe8421[0x0]
                    }
                }
            } catch (e) {
                $[__Oxe8421[0x17]](e, _0x6125x18)
            } finally {
                _0x6125x16(_0x6125x19 || __Oxe8421[0x0])
            }
        })
    })
}

function random(_0x6125x3d, _0x6125x3e) {
    return Math[__Oxe8421[0xd6]](Math[__Oxe8421[0x4e]]() * (_0x6125x3e - _0x6125x3d)) + _0x6125x3d
}

function jsonParse(_0x6125x40) {
    if (typeof _0x6125x40 == __Oxe8421[0x115]) {
        try {
            return JSON[__Oxe8421[0x91]](_0x6125x40)
        } catch (e) {
            console[__Oxe8421[0x8]](e);
            $[__Oxe8421[0x1c]]($[__Oxe8421[0x19]], __Oxe8421[0x0], __Oxe8421[0x116]);
            return []
        }
    }
}

(function (_0x6125x41, _0x6125x42, _0x6125x43, _0x6125x44, _0x6125x45, _0x6125x3a) {
    _0x6125x3a = __Oxe8421[0x8d];
    _0x6125x44 = function (_0x6125x46) {
        if (typeof alert !== _0x6125x3a) {
            alert(_0x6125x46)
        }
        ;
        if (typeof console !== _0x6125x3a) {
            console[__Oxe8421[0x8]](_0x6125x46)
        }
    };
    _0x6125x43 = function (_0x6125x28, _0x6125x41) {
        return _0x6125x28 + _0x6125x41
    };
    _0x6125x45 = _0x6125x43(__Oxe8421[0x117], _0x6125x43(_0x6125x43(__Oxe8421[0x118], __Oxe8421[0x119]), __Oxe8421[0x11a]));
    try {
        _0x6125x41 = __encode;
        if (!(typeof _0x6125x41 !== _0x6125x3a && _0x6125x41 === _0x6125x43(__Oxe8421[0x11b], __Oxe8421[0x11c]))) {
            _0x6125x44(_0x6125x45)
        }
    } catch (e) {
        _0x6125x44(_0x6125x45)
    }
})({})

// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `??${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============??系统通知??=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `??${this.name}, 错误!`, t.stack) : this.log("", `??${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `??${this.name}, 结束! ?? ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}