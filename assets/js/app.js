const framePlayer = document.getElementById("clients-frame-player");
const playerBtn = document.getElementById("clients-play-btn");
const poster = document.getElementById("clients-poster");
const video = document.getElementById("frame-video-player");

const terminalsTabBtn = document.getElementById("terminal-btn");
const bankingTabBtn = document.getElementById("banking-btn");

const terminalsTab = document.getElementById("terminals");
const bankingTab = document.getElementById("banking");
const terminalsTabMbl = document.getElementById("terminals-mbl");
const bankingTabMbl = document.getElementById("banking-mbl");

playerBtn.addEventListener("click", showFrame);

terminalsTab.addEventListener("click", openTab);
bankingTab.addEventListener("click", openTab);
terminalsTabBtn.addEventListener("click", displayTab);
bankingTabBtn.addEventListener("click", displayTab);

function showFrame() {
  poster.style.display = "none";
  framePlayer.style.display = "block";
  video.setAttribute(
    "src",
    "https://www.youtube.com/embed/v9SFs6Y6RrE?autoplay=1"
  );
}

function openTab(e) {
  const clickedTarget = e.target.closest(".tab");

  if (!clickedTarget.classList.contains("closed-tab")) return;

  terminalsTab.classList.toggle("closed-tab");
  bankingTab.classList.toggle("closed-tab");

  lazyAppear();
}

function lazyAppear() {
  if (!terminalsTab.classList.contains("closed-tab")) {
    const [textBox, imgBox] = terminalsTab.getElementsByClassName("lazy-box");
    // textBox.style.display = "none";
    // imgBox.style.display = "none";
  } else if (!bankingTab.classList.contains("closed-tab")) {
    const [textBox, imgBox] = bankingTab.getElementsByClassName("lazy-box");
    // textBox.style.display = "none";
    // imgBox.style.display = "none";
  }
}

function displayTab() {
  terminalsTabMbl.classList.toggle("hidden-tab");
  bankingTabMbl.classList.toggle("hidden-tab");
}

(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('#section_port').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());
