$(document).ready(function () {
  $(".contact-button").on('click', function() {
    $("textarea").val("");
  });

  $(".close").on('click', function () {
    $("textarea").val("");
  });
});
