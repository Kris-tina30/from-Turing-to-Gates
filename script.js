$("img").click(function () {
  let newSrc = $(this).attr("alt-pic");
  $(this).attr("src", newSrc);
});
