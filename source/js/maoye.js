// 导航栏显示标题
document.addEventListener("pjax:complete", tonav);
document.addEventListener("DOMContentLoaded", tonav);
//响应pjax
function tonav() {
  document
    .getElementById("name-container")
    .setAttribute("style", "display:none");
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
      document.getElementById("name-container").setAttribute("style", "");
      document
        .getElementsByClassName("menus_items")[1]
        .setAttribute("style", "display:none!important");
    } else {
      document
        .getElementsByClassName("menus_items")[1]
        .setAttribute("style", "");
      document
        .getElementById("name-container")
        .setAttribute("style", "display:none");
    }
    position = scroll;
  });
  // 不在标题显示全局站名
  document.getElementById("page-name").innerText =
    document.title.split(" | 猫野")[0];
  // 在标题显示全局站名
  // document.getElementById("page-name").innerText = document.title;
}

function scrollToTop() {
  document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
  document
    .getElementById("name-container")
    .setAttribute("style", "display:none");
  btf.scrollToDest(0, 500);
}


// 黑夜星空背景 
function dark() {
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  var n,
    e,
    i,
    h,
    t = 0.05,
    s = document.getElementById("universe"),
    o = !0,
    a = "180,184,240",
    r = "226,225,142",
    d = "226,225,224",
    c = [];
  function f() {
    (n = window.innerWidth),
      (e = window.innerHeight),
      (i = 0.216 * n),
      s.setAttribute("width", n),
      s.setAttribute("height", e);
  }
  function u() {
    h.clearRect(0, 0, n, e);
    for (var t = c.length, i = 0; i < t; i++) {
      var s = c[i];
      s.move(), s.fadeIn(), s.fadeOut(), s.draw();
    }
  }
  function y() {
    (this.reset = function () {
      (this.giant = m(3)),
        (this.comet = !this.giant && !o && m(10)),
        (this.x = l(0, n - 10)),
        (this.y = l(0, e)),
        (this.r = l(1.1, 2.6)),
        (this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t),
        (this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120)),
        (this.fadingOut = null),
        (this.fadingIn = !0),
        (this.opacity = 0),
        (this.opacityTresh = l(0.2, 1 - 0.4 * (this.comet + 1 - 1))),
        (this.do = l(5e-4, 0.002) + 0.001 * (this.comet + 1 - 1));
    }),
      (this.fadeIn = function () {
        this.fadingIn &&
          ((this.fadingIn = !(this.opacity > this.opacityTresh)),
          (this.opacity += this.do));
      }),
      (this.fadeOut = function () {
        this.fadingOut &&
          ((this.fadingOut = !(this.opacity < 0)),
          (this.opacity -= this.do / 2),
          (this.x > n || this.y < 0) && ((this.fadingOut = !1), this.reset()));
      }),
      (this.draw = function () {
        if ((h.beginPath(), this.giant))
          (h.fillStyle = "rgba(" + a + "," + this.opacity + ")"),
            h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
        else if (this.comet) {
          (h.fillStyle = "rgba(" + d + "," + this.opacity + ")"),
            h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
          for (var t = 0; t < 30; t++)
            (h.fillStyle =
              "rgba(" +
              d +
              "," +
              (this.opacity - (this.opacity / 20) * t) +
              ")"),
              h.rect(
                this.x - (this.dx / 4) * t,
                this.y - (this.dy / 4) * t - 2,
                2,
                2
              ),
              h.fill();
        } else
          (h.fillStyle = "rgba(" + r + "," + this.opacity + ")"),
            h.rect(this.x, this.y, this.r, this.r);
        h.closePath(), h.fill();
      }),
      (this.move = function () {
        (this.x += this.dx),
          (this.y += this.dy),
          !1 === this.fadingOut && this.reset(),
          (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0);
      }),
      setTimeout(function () {
        o = !1;
      }, 50);
  }
  function m(t) {
    return Math.floor(1e3 * Math.random()) + 1 < 10 * t;
  }
  function l(t, i) {
    return Math.random() * (i - t) + t;
  }
  f(),
    window.addEventListener("resize", f, !1),
    (function () {
      h = s.getContext("2d");
      for (var t = 0; t < i; t++) (c[t] = new y()), c[t].reset();
      u();
    })(),
    (function t() {
      document.getElementsByTagName("html")[0].getAttribute("data-theme") ==
        "dark" && u(),
        window.requestAnimationFrame(t);
    })();
}
dark();

// 浏览器F12控制台信息
var now1 = new Date();

function createtime1() {
  var grt = new Date("04/01/2024 00:00:00"); //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250);
  var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  var dnum = Math.floor(days);

  var ascll = [
    `欢迎来到猫野的小世界😀`,
    `Welcome to Mao Ye’s little world😀`,
    `
ｍｍ　ｍ　　　ａａａａ　　　　ｏｏｏ　　　ｙ　　　ｙ　　　ｅｅｅ
ｍ　ｍ　ｍ　　　　　　ａ　　ｏ　　　ｏ　　ｙ　　　ｙ　　ｅ　　　ｅ
ｍ　ｍ　ｍ　　　　　　ａ　　ｏ　　　ｏ　　ｙ　　　ｙ　　ｅ　　　ｅ
ｍ　ｍ　ｍ　　　ａａａａ　　ｏ　　　ｏ　　　ｙ　ｙ　　　ｅｅｅｅｅ
ｍ　ｍ　ｍ　　ａ　　　ａ　　ｏ　　　ｏ　　　ｙ　ｙ　　　ｅ
ｍ　ｍ　ｍ　　ａ　　　ａ　　ｏ　　　ｏ　　　　ｙ　　　　ｅ　　　ｅ
ｍ　ｍ　ｍ　　　ａａａａ　　　ｏｏｏ　　　　　ｙ　　　　　ｅｅｅ
　　　　　　　　　　　　　　　　　　　　　ｙｙ      
`,
    "小站已经运行",
    dnum,
    "天啦!",
    "©2024 By 猫野",
  ];

  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} \n%c${ascll[1]} \n%c ${ascll[2]} \n%c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      ""
    )
  );
}

createtime1();

// 重写console方法
// console.log = function () {};
// console.error = function () {};
// console.warn = function () {};

document.addEventListener("DOMContentLoaded", function () {
  const preloader = {
    endLoading: function () {
      document.body.style.overflow = "auto";
      document.getElementById("loading-box").classList.add("loaded");
    },
    initLoading: function () {
      document.body.style.overflow = "";
      document.getElementById("loading-box").classList.remove("loaded");
    },
  };

  if (
    document.readyState === "complete" ||
    document.readyState === "loaded" ||
    document.readyState === "interactive"
  ) {
    preloader.endLoading();
  } else {
    window.addEventListener("load", preloader.endLoading);
  }

  // 判断 theme.pjax 和 theme.pjax.enable 的代码需要特别处理，
  // 因为这部分逻辑依赖于你的网站配置，可能需要从外部获取这些配置
  // 如果你的站点确实使用了PJAX，可以在这里添加相关逻辑
  // 这个示例假设你有某种方法来检查 PJAX 是否启用
  if (window.theme && window.theme.pjax && window.theme.pjax.enable) {
    document.addEventListener("pjax:send", preloader.initLoading);
    document.addEventListener("pjax:complete", preloader.endLoading);
  }
});

// 日夜切换动画
function switchNightMode() {
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'
    ),
    setTimeout(function () {
      document.querySelector("body").classList.contains("DarkMode")
        ? (document.querySelector("body").classList.remove("DarkMode"),
          localStorage.setItem("isDark", "0"),
          document
            .getElementById("modeicon")
            .setAttribute("xlink:href", "#icon-light"))
        : (document.querySelector("body").classList.add("DarkMode"),
          localStorage.setItem("isDark", "1"),
          document
            .getElementById("modeicon")
            .setAttribute("xlink:href", "#icon-dark")),
        setTimeout(function () {
          document.getElementsByClassName(
            "Cuteen_DarkSky"
          )[0].style.transition = "opacity 3s";
          document.getElementsByClassName("Cuteen_DarkSky")[0].style.opacity =
            "0";
          setTimeout(function () {
            document.getElementsByClassName("Cuteen_DarkSky")[0].remove();
          }, 1e3);
        }, 2e3);
    });
  const nowMode =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  if (nowMode === "light") {
    activateDarkMode();
    saveToLocal.set("theme", "dark", 2);
    GLOBAL_CONFIG.Snackbar !== undefined &&
      btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
    document.getElementById("modeicon").setAttribute("xlink:href", "#icon-dark");
  } else {
    activateLightMode();
    saveToLocal.set("theme", "light", 2);
    document.querySelector("body").classList.add("DarkMode"),
      document
        .getElementById("modeicon")
        .setAttribute("xlink:href", "#icon-light");
  }
  // handle some cases
  typeof utterancesTheme === "function" && utterancesTheme();
  typeof FB === "object" && window.loadFBComment();
  window.DISQUS &&
    document.getElementById("disqus_thread").children.length &&
    setTimeout(() => window.disqusReset(), 200);
}


var anzhiyu_musicPlaying = false;
var anzhiyu_musicFirst = false;