$( document ).ready(function() {
    const colors = ["maroon","teal","yellow","beige","brown","red","green","black","white","blue","purple","pink","orange","navy"];
    const btn = $("#btn");
    const color = $(".color");

    btn.on("click",function(){
        const randomColor = getRandomColor();
        $("body").css("background-color", colors[randomColor]);
        color.text(colors[randomColor]);
      });

      function getRandomColor() {
        return Math.floor(Math.random() * colors.length);
      }
});
