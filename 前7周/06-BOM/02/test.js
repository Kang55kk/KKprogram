var reg = /(ell|01)/g;//或者

var reg = /h.t/g; // 除了换行和行结束符
var reg = /h\wt/g; // 查找数字、字母及下划线。
var reg = /h\Wt/g; // 非 数字、字母及下划线。
var reg = /h\dt/g; // 数字
var reg = /h\Dt/g; // 非 数字

var reg = /h\d+t/g; // + >=1
var reg = /h\d*t/g; // + >=0
var reg = /h\d?t/g; // + 0/1
var reg = /h\d{2}t/g; // {m}
var reg = /h\d{2,10}t/g; // {m,n}

var reg = /^h.+t$/gm;
var reg = /^h\w+t/gm;

// hit hot h8t h99f h99t h t h,t h_t h99999t htt

// 手机号码
var reg = /1(3|5|7|8|9)\d{9}/g;
// 邮箱
var reg = /(\w|\.)+@([a-z]|\d|-)+(\.[a-z]{2,}){1,2}$/gm;


var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/gm


/* 

hit hot h8t h99f h99t h t h,t h_t h99999t htt

13800138000
13811178951
12345678901

19900001111

xxx@qq.com
xxx@yy123.com
xxx@yy-123.com
xxx@yy-123.123
xxx@yy-123.a
xxx@yy-123.ab
xxx@yy-123.ab.cd
xxx@yy-123.ab.cd.ef
*/

// https://blog.csdn.net/ZYC88888/article/details/98479629
