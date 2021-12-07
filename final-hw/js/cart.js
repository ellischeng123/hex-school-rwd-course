$(".fa-heart").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("fa-solid");
  $(this).toggleClass("fa-regular");
});
