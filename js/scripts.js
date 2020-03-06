(function($) {
  $(document).ready(function() {
    "use strict";

    // VIDEO MASK TEXT
    const video = document.querySelector("video");
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
    }

    // PARTICLES BG EFFECT
    var n = document.getElementById("particles-bg");
    if (n == null) {
    } else {
      particlesJS("particles-bg", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }

    // READMORE JS
    $(".intro-coddle .article").readmore({
      moreLink:
        '<p><a href="#" class="ghost-btn"><svg><defs><linearGradient id="grad1"><stop offset="0%" stop-color="#FF8282"/><stop offset="100%" stop-color="#E178ED" /></linearGradient></defs><rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="url(#grad1)"></rect></svg><span>Learn More +</span></a></p>',
      lessLink:
        '<p><a href="#" class="ghost-btn"><svg><defs><linearGradient id="grad1"><stop offset="0%" stop-color="#FF8282"/><stop offset="100%" stop-color="#E178ED" /></linearGradient></defs><rect width="206" height="50" x="5" y="5" rx="25" fill="none" stroke="url(#grad1)"></rect></svg><span>Learn Less +</span></a></p>',
      collapsedHeight: 104,
      afterToggle: function(trigger, element, expanded) {
        if (!expanded) {
          // The "Close" link was clicked
          $("html, body").animate(
            { scrollTop: element.offset().top },
            { duration: 100 }
          );
        }
      }
    });

    // PERSPECTIVE
    (function() {
      var tiltSettings = [
        {},
        {
          movement: {
            imgWrapper: {
              translation: { x: 10, y: 10, z: 30 },
              rotation: { x: 0, y: -10, z: 0 },
              reverseAnimation: { duration: 200, easing: "easeOutQuad" }
            },
            lines: {
              translation: { x: 10, y: 10, z: [0, 70] },
              rotation: { x: 0, y: 0, z: -2 },
              reverseAnimation: { duration: 2000, easing: "easeOutExpo" }
            },
            caption: {
              rotation: { x: 0, y: 0, z: 2 },
              reverseAnimation: { duration: 200, easing: "easeOutQuad" }
            },
            overlay: {
              translation: { x: 10, y: -10, z: 0 },
              rotation: { x: 0, y: 0, z: 2 },
              reverseAnimation: { duration: 2000, easing: "easeOutExpo" }
            },
            shine: {
              translation: { x: 100, y: 100, z: 0 },
              reverseAnimation: { duration: 200, easing: "easeOutQuad" }
            }
          }
        }
      ];

      function init() {
        var idx = 0;
        [].slice
          .call(document.querySelectorAll(".coddle__box"))
          .forEach(function(el, pos) {
            idx = pos % 2 === 0 ? idx + 1 : idx;
            new TiltFx(el, tiltSettings[idx - 1]);
          });
      }

      (function() {
        init();
      })();
    })();

    // MAIN FEATURES
    $(".main-features .more-link").on("click", function(e) {
      jQuery(this).text("+");
      if ($(".feature-box ul").is(":visible")) {
        jQuery(this).text("+");
      } else {
        jQuery(this).text("-");
      }
      $(this)
        .siblings(".feature-box ul")
        .slideToggle();
      $(this)
        .parent(".main-features")
        .siblings(".feature-box")
        .children("ul")
        .next()
        .slideUp();
      return false;
    });

    // SERVICES
    $(".services .more-link").on("click", function(e) {
      jQuery(this).text("+");
      if ($(".service-box ul").is(":visible")) {
        jQuery(this).text("+");
      } else {
        jQuery(this).text("-");
      }
      $(this)
        .siblings(".service-box ul")
        .slideToggle();
      $(this)
        .parent(".services")
        .siblings(".service-box")
        .children("ul")
        .next()
        .slideUp();
      return false;
    });

    // HAMBURGER MENU
    $(".hamburger-menu").on("click", function(e) {
      $(this).toggleClass("open");
      $(".hamburger-menu-box").toggleClass("show-me");
    });

    $(".search-btn").on("click", function(e) {
      $(".search-box").toggleClass("show-me");
    });

    // STICKY NAVBAR
    $(window).on("scroll touchmove", function(e) {
      $(".navbar").toggleClass("stick-me", $(document).scrollTop() > 1);
    });

    // SWIPER SLIDER
    var swiper = new Swiper(".swiper-slider", {
      speed: 600,
      parallax: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    // TREE MENU
    $(".hamburger-menu-box .menu .navbar-nav .nav-item .nav-link").click(
      function(e) {
        $(this)
          .parent()
          .children(".hamburger-menu-box .menu .navbar-nav .nav-item ul")
          .slideToggle(300);
        return true;
      }
    );

    // PAGE TRANSITION
    $(".transition").on("click", function(e) {
      $(".transition-overlay").toggleClass("show-me");
    });

    // TRANSITION DELAY
    $(".transition").on("click", function(e) {
      e.preventDefault();
      var goTo = this.getAttribute("href");
      setTimeout(function() {
        window.location = goTo;
      }, 1000);
    });

    // WORKS GRID
    $(window).load(function(e) {
      $(".works-grid").isotope({
        itemSelector: ".works-grid li",
        percentPosition: true
      });
    });

    // WORKS FILTER
    $(window).load(function(e) {
      var $container = $(".works-grid");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });

      $(".works-filter a").click(function(e) {
        $(".works-filter .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    });
  });

  // ODOMETER
  $(window).scroll(function(e) {
    $(".odometer").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {
        $("#1").html("11");
        $("#2").html("870");
        $("#3").html("252");
        $("#4").html("99");
      }
    });
  });

  // WOW ANIMATION
  wow = new WOW({
    animateClass: "animated",
    offset: 50
  });
  wow.init();
})(jQuery);
