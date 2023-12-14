$( document ).ready(function() {
    const colors = ["maroon","teal","yellow","beige","brown","red","green","black","white","blue","purple","pink","orange","navy"];
    const btn = $("#btn");
    const color = $(".color");

    btn.on("click",function(){
        const randomNumber = getRandomNumber();
        $("body").css("background-color", colors[randomNumber]);
        color.text(colors[randomNumber]);
      });

      function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
      }
});