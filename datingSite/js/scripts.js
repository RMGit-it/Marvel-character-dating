$(document).ready(function() {
  $("#hero").submit(function(event) {
    let chosenColor = $('input:radio[name="color"]:checked').val();
    let money = $('input:radio[name="money"]:checked').val();
    alert("text");

    if (chosenColor === "green" && money === "low") {
      $("#hulk").show();
    } else if (chosenColor === "red" && money === "high") {
      $("#ironman").show();
    } else if  (chosenColor === "yellow" && money == "medium") {
      $("#thor").show();
    } 
    console.log(money);
  
    event.preventDefault();
  });
});
