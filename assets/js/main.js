$(document).ready(function () {
  $("#portfolio .thumbnail").hover(
    function () {
      $(this).children(".cust-caption").slideDown();
    },
    function () {
      $(this).children(".cust-caption").fadeOut();
    }
  );

  // spy and scroll menu boogey
  $("#navbar a.hash").click(function (e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // Destination
    var scrollOffset = $(this.hash).offset().top;

    // animate
    $("html, body").animate(
      {
        scrollTop: scrollOffset,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  });

  VANTA.NET({
    el: ".dark-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3213d4,
    spacing: 18.0,
  });
});
