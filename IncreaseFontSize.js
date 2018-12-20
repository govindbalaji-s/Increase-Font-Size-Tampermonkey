// ==UserScript==
// @name         Increase font size

// @version      0.1
// @description  increases font size of all elements by 1. call cFS(x) to increase by x.
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @match        *://*/**
// @grant        none
// ==/UserScript==

cFS = function(x){
    $("*").each(function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+x );
    });
};

(function() {
    'use strict';
     cFS(1);
    // Your code here...
})();
