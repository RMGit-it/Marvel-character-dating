$(document).ready(function() {
  $("button").click(function() {
    $("body").toggleClass("dark");
    $("button#dark").toggle();
    $("button#light").toggle();
  });
});


// $(document).ready(function() {
//  $("button#").click(function() {
//    $("body").toggleClass("light");
 //   $("button#dark").toggle();
 //   $("button#light").toggle();
 //   $("button#dark").toggleClass("dark");
 //   $("body").toggleClass("light")
//  });
//});
//Z