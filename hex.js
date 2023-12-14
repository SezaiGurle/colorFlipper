$(document).ready(function() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const btn = $("#btn");
    const color = $(".color");
  
    btn.on("click", function() {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
      }
      color.text(hexColor);
      $("body").css("background-color", hexColor);
    });
  
    function getRandomNumber() {
      return Math.floor(Math.random() * hex.length);
    }
  });