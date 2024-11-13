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

// XPathを使って要素を取得
const xpath = "/html/body/div[5]/div[2]/div[1]/div[2]";
const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

// 要素が見つかった場合
if (result.singleNodeValue) {
  const element = result.singleNodeValue;

  // 中身を削除して新しい内容に書き換え
  element.innerHTML = "<h1 style="color: red">解説見るな</h1>";
} 
