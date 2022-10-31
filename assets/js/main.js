/**
 * Template Name: MyResume - v4.7.0
 * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Hero type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

/*voice*/
var vid = document.getElementById("myAudio");

window.onload = function playAduio() {
  vid.play();
};

function playVid() {
  vid.play();
}
function pauseVid() {
  vid.pause();
}

function go(loc) {
  document.getElementById("MENUview").src = loc;
}

let data_video_id = [
  "7147779584178621701",
  "7147414554106957061",
  "7147354901151108357",
  "7145173344072092934",
  "7144445465554095366",
  "7144024291389082886",
  "7143650981245357318",
  "7142595775124557062",
  "7139948462627474693",
  "7138857961849507077",
  "7138480001694928134",
  "7138115738073566470",
  "7137734830040698117",
  "7137359001360108806",
  "7136974761548188933",
  "7136618811091963141",
  "7136229142336441605",
  "7134755246080838918",
  "7134383047515852037",
  "7134012894588587269",
  "7133641185943457029",
  "7133293345933167877",
  "7132910723402910982",
  "7132562118087429382",
  "7132195949849382150",
  "7131039865956846853",
  "7130347232343166213",
  "7127750051249671429",
  "7127350431008689414",
  "7126975713558777093",
  "7126637255535365381",
  "7124013481023655174",
  "7123632703676714245",
  "7123314775999778054",
  "7121804220675755269",
  "7121449813907983621",
  "7121046572162485510",
  "7119966840280894726",
  "7119555467885530374",
  "7119196257054215429",
  "7119018108483865861",
  "7115490491570851077",
  "7115091215023869190",
  "7114381687684943110",
  "7113244919178808582",
  "7112880653703646470",
  "7111392976181513477",
  "7109208008755891461",
  "7108791932540914950",
  "7108402372304538885",
  "7107637552500280582",
  "7107305093837409541",
  "7105443145210547462",
  "7105071225130585349",
  "7104338980971351302",
  "7103230374808997126",
  "7102829332053200133",
  "7101745318835850501",
  "7100996878757547269",
  "7099866137776672006",
  "7099829204853820677",
  "7098087140168420614",
  "7097322447778712837",
  "7097306285627985157",
  "7096964884545441030",
  "7096916489080425733",
  "7096564828302544134",
  "7095826209707265286",
  "7094740293953572101",
  "7094378642838457605",
  "7094316423937264901",
  "7094281263917305093",
  "7092911716924755205",
  "6810767444324535557",
];

let reals = document.querySelector(".tiktok-embed-container");
let div_Maker = (value) => {
  let data = document.createElement("blockquote");
  data.className = "tiktok-embed";
  data.setAttribute(
    "cite",
    `https://www.tiktok.com/@muhamedabdulmajid/video/${data_video_id[value]}`
  );
  data.setAttribute("data-video-id", `${data_video_id[value]}`);
  data.setAttribute("data-embed-from", "oembed");
  let section = document.createElement("section");
  data.appendChild(section);
  reals.appendChild(data);
};
let counter = 0;
document.querySelector(".load-more").addEventListener("click", (e) => {
  for (let i = 0; i < 4; i++) {
    console.log(div_Maker(counter));
    counter++;
  }
  let script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  reals.appendChild(script);
});
