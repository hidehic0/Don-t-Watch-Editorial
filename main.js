// ==UserScript==
// @name Don't Watch Editorial
// @namespace https://github.com/hidehic0/Don-t-Watch-Editorial
// @description atcoderの解説ページを見れないようにします
// @version 0.1
// @grant none
// @match https://atcoder.jp/contests/*/editorial
// @match https://atcoder.jp/contests/*/tasks/*/editorial
// @author hidehic0
// ==/UserScript==

// querySelectorで要素を取得
const element = document.querySelector("div.col-sm-12:nth-child(2)");

// 要素が見つかった場合、内容を変更
if (element) {
  element.innerHTML = "<h1>解説見ないで頑張ろう</h1>";
  element.style.color = "#ff0000";
} else {
  console.log("指定した要素が見つかりませんでした");
}
