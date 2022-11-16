/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file
========================================================================== */
"use strict"; //Set environment variable (Used for development and demo)

/* 
    Possible values:
    1. development
    2. demo
    3. customization
*/

var env = "demo";
initPageloader();
$(document).ready(function ($) {
  if (env === "development") {
    disableSidebarLinks();
    changeDemoImages();
  } else if (env === "demo") {
    changeDemoImages();
  } else if (env === "customization") {
    disableSidebarLinks();
  }

  initNavbar();
  initMobileMenu();
  highlightNavbarLinks();
  initSidebar();
  initPopovers();
  initTooltips();
  initBackgroundImages();
  initBackToTop();
  initGitem();
  initScrollToHash();
  initTestimonials();
  initPricing();
  initVideoEmbed();
  initScrollReveal();
});

document.ready(function () {
  $(".to-request").on("click", function (event) {
    event.preventDefault();
    var id = $("#request-block"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

document.ready(function () {
  $(".lets-go").on("click", function (event) {
    event.preventDefault();
    var id = $("#second-block"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

