$(function() {

  var w = $(window).width(),
    h = $(window).height();
  //$('section').width(w);
  $('section').height(h);
  $('menu .container').height(h - 60);
  $('body').prepend('<div id="overlay">');

  $('#menu').click(function() {$('html').addClass('active');});
  $('#close-menu').click(function() {$('html').removeClass('active');});
  $('#overlay').click(function() {$('html').removeClass('active');});
  $(window).resize(function() {
    var w = $(window).width(),
      h = $(window).height();
    //$('section').width(w);
    $('section').height(h);
    $('menu .container').height(h - 60);
  });

});


//예외처리로 Errorpage
 function ingestpage(){
//$("#main").load("../vr003/vr003.html");
//$('<link>').appendTo('head').attr(
//	{
//      type: 'text/css', 
//      rel: 'stylesheet',
//      href: '../vr003/css/vr003.css'
//	});
	 
//	  $.ajax({
//        type : "GET",
//        url : "../vr003/vr003.html",
//        dataType : "text",
//        error : function() {
//            alert('통신실패!!');
//        },
//        success : function(data) {
//            $('#main').html(data);
//			      alert('통신성공!!');
//        }
// 
//    });
//$('<link>').appendTo('head').attr(
//	{
//      type: 'text/css', 
//      rel: 'stylesheet',
//      href: '../vr003/css/vr003.css'
//	});
//	 

var insTag = "<embed src='../vr003/vr003.html' width='100%' height='700px'/>";
$("#main").html(insTag) ;
    }

function querypage(){
var insTag = "<embed src='../vr004/vr004.html' width='100%' height='700px'/>";
$("#main").html(insTag) ;
 }
//"../vr003/vr003.html"