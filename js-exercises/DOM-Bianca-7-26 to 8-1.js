/**
 * Write your solutions here
 */

$(document).ready(function() {
//#1
    $("#add-borders").on({
        mouseenter: function () {
            $("*").addClass("blue-border");
        },
        mouseleave: function () {
            $("*").removeClass("blue-border");
        }
    });
});



//#2
$(".carrot").on("click", function () {
    $(this).css("color", "orangered");

})



//#3
$("#codeup-btn").on("click", function () {
    window.location = 'https://java.codeup.com/javascript-i/bom-and-dom/bom/';
    // location.reload();

})
// #4
// When a frog is being double-clicked by the mouse: get the selected data-value attribute value
// from the frog being double-clicked and display it in the element with the id of review-result.

$('.frog').dblclick(function() {
    var num = $(this).data("value");
    $("#review-result").html('You last double-clicked frog number: ' + num + "!");

});


// //#5
// // When the button with the id of change-bg-from-input is clicked change the document
// // background color to the value of the input with the id of color-input.
//
$("#change-bg-from-input").on("click", function () {
    var color = $("#color-input").val();
    $("body").css("background-color", color);
    console.log(color);
})

// //#6
// //When the button with an id of prepend-to-ul is clicked, prepend a li with a number nested inside counting the
// // number of times the buttons has been clicked to the ul with the id of prepend-to-me.
var counter = 0;
$("#prepend-to-ul").on("click", function () {
    counter++;
    $("#prepend-to-me").prepend("<li>"+ counter +"</li>");

});

// //#7
// // Three seconds after the button with the id of change-message has been clicked,
// // the heading with the id of message should change its text to Something has gone right!.
$("#change-message").on("click", function () {
    setTimeout(function (){$("#message").html("Something has gone right!")}, 3000)
});



// //#8
// // When a list item inside of the ul with the id of content-toggle is hovered over, the content of the li
// // should change to the text "Where did my content go?!".
// // When the list item is hovered out of, the text content should return to what was there previously.
//$('#content-toggle').hover('hover', function () {
$('#content-toggle li ').hover(function(){
    prev = $(this).text();
    $(this).text('Where did my content go?!');
}, function(){
    $(this).text(prev)
});




// //#9
// // Whenever a list item inside of the ul with the id of font-change is clicked, the
// // font should cycle from "Quantico" to "Molle" to "Major Mono Display" and then back to the default
// // serif font. These fonts are already included in the HTML via a link to the Google Fonts CDN.
//
$('#font-change').on('click', function (){
    if ($(this).css("font-family") === "Quantico"){
        $(this).css("font-family", "Molle")
    }else {
        $(this).css("font-family", "Quantico")
    }
})// $('font1').css('font-family', 'Quantico');
$('font2').css('font-family', 'Molle')

$('font3').css('font-family', 'Major Mono Display')


$('#font-change li').on('click', function () {
    $(this).toggleClass('font1')
}, function () {
    $(this).toggleClass('font2')
}, function () {
    $(this).toggleClass('font3')
})


// //#10
// // When the button with the id of add-to-number is clicked, the element with the id of
// // output should display the number typed into the input of the id input added to the number displayed
// // in the element with the id of output. This should only update the value
// // if the input value is a number, and not a non-numeric value, or a number held within quotation marks.
$('#add-to-number').on('click', function (){
    var input = $('#input').val()
    if(!isNaN(parseFloat(input))) {
        $('#output').html(input)
    }
})

