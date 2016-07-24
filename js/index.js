/* --------------------------------------------------------
Js file for Flip Puzzle Demo-Sandeep Satone

version: 1.0
last modified: 24.07.2016 by Sandeep Satone
author: Sandeep Satone
website: http://sandeepbalramsatone.com/
----------------------------------------------------------*/


//$(function () {
//    var tileClicked = 0;
//    var backText = null;
//    $('[id^=row] [id^=column]').mouseenter(function (e) {
//        console.log($(this).text());
//        $(this).addClass('hoverTrue');
//        backText = $(this).text();
//        tileClicked= tileClicked+1;    
//    });
//    $('[id^=row] [id^=column]').mouseleave(function (e) {
//        console.log("Mouse Left !!");
//    });
//});

$(function () {
    $('[id^=row] [id^=column]').click(function (e) {
        console.log($(this).text());
        $(this).addClass('hoverTrue');
    });

});