$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
$(function(){
  $('#portfolio').css("min-height", $(window).innerHeight());
  $(window).resize(function(){
    $('#portfolio').css("min-height", $(window).innerHeight());
  });
  $('#about').css("min-height", $(window).innerHeight());
  $(window).resize(function(){
    $('#about').css("min-height", $(window).innerHeight());
  });
  $('#contact').css("min-height", $(window).innerHeight());
  $(window).resize(function(){
    $('#contact').css("min-height", $(window).innerHeight());
  });
});

$( document ).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://dbv.alaricinfotech.com/dbv.php',
        data: {
            field: 'value'
        },
        dataType: 'jsonp',
        crossDomain: true
    }).done(function(response){
        $.each( response, function( key, value ) {
            $.each( value, function( type, text ) {                
                $("#"+type+"-text").html(text);                
            });
        });
    }).fail(function(error){
        console.log(error.statusText);
    });
    
});