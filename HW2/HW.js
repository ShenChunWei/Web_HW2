$( "#page1" ).hide();
$( "#page2" ).hide();

$(".day").click(function(){
  $( ".background" ).hide();
  $( ".night" ).hide();
  $( "#page2" ).hide();
  $( "#page1" ).show();
});

$(".night").click(function(){
  $( ".background" ).hide();
  $( ".day" ).hide();
  $( "#page1" ).hide();
  $( "#page2" ).show();
});

$(".icon_background1").click(function(){
  $( "#page1" ).hide();
  $( "#page2" ).hide();
  $( ".background" ).show();
  $( ".day" ).show();
  $( ".night" ).show();
});

$(".icon-background2").click(function(){
  $( "#page1" ).hide();
  $( "#page2" ).hide();
  $( ".background" ).show();
  $( ".day" ).show();
  $( ".night" ).show();
});
