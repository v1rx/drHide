// ==UserScript==
// @name        DocumentingReality Hide Thanks/Fuck
// @namespace   https://www.documentingreality.com/
// @include     https://www.documentingreality.com/forum/*
// @version     1
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

Array.from(document.querySelectorAll("[id]")).filter((elem) => /^post_(thanks|groan)_box_\d+/i.exec(elem.id)).map((elem) => elem.remove());