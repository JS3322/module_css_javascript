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
var insTag = "<embed src='../vr003/vr003.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
    }
function querypage(){
var insTag = "<embed src='../vr004/vr004.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
 }

function splpage(){
var insTag = "<embed src='../vr005/vr005.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
 }
function codepage(){
var insTag = "<embed src='../vr006/vr006.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
 }
function lhistorypage(){
var insTag = "<embed src='../vr007/vr007.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
 }
function ehistorypage(){
var insTag = "<embed src='../vr008/vr008.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
 }
function uregisterpage(){
var insTag = "<embed src='../vr009/vr009.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
 }
function uupdatepage(){
var insTag = "<embed src='../vr010/vr010.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
 }
function progresspage(){
	var insTag = "<object src='../vr011/vr011.html' />";
$(".test").html(insTag) ;
}
//"../vr003/vr003.html"