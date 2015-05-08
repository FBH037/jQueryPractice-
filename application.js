$(document).ready(function(){
$(".red").hover(
  function(){
    $( this ).toggleClass("green")
  });

$("#btn-bg").click(
  function(){
    $("body").toggleClass("bg")
  });

$("body").dblclick(
  function(){
    alert("alerts you")
  });

$("#hotdog").click(
  function(){
    for(i = 0; i<=1000; i=i+1){
      $(this).clone().appendTo("body")  }
  });

$('#up').click(
  function(){
    $(this).parent().prevAll().hide()
  });

$("ul").click(
  function(){
    // debugger
    // var color = []
    // $(this).children().each(function() { color.push($(this).text()) });
    // debugger
    var lis = $(this).children()
    for( i = 0; i<lis.length; i++){
    $($(lis[i])).css("color", $(lis[i]).text() )
    }
  });

$("#random").click(
  function(){
    var colors = ['green', 'red', 'blue', 'purple', 'orange', 'pink']
    $(this).css("color", colors[Math.floor(Math.random()*colors.length)])
    // debugger
  })

$("#number").click(
  function(){
    for( i=0;i < 50; i++){
      // debugger
      $("<p>" + Math.floor(Math.random()*1000).toString() + "</p>").appendTo($(this))

    }
  }
)

});
