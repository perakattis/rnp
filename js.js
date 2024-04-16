if (innerWidth < 1000) {
    document.getElementById("focim").style.top = "30px";
}

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );