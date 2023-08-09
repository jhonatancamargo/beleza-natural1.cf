const videoWrappers = document.querySelectorAll('.video-wrapper');
let currentVideo = null;

function toggleVideo(video, wrapper) {
  if (video.paused) {
    if (currentVideo) {
      currentVideo.pause();
      const currentWrapper = currentVideo.closest('.video-wrapper');
      currentWrapper.querySelector('.play-button').classList.remove('hide');
    }
    video.play();
    video.playbackRate = 1.3; // Definir a velocidade de reprodução para 1.3x
    wrapper.querySelector('.play-button').classList.add('hide');
    currentVideo = video;
  } else {
    video.pause();
    wrapper.querySelector('.play-button').classList.remove('hide');
    currentVideo = null;
  }
}

function handleVideoWrapper(wrapper) {
  const video = wrapper.querySelector('video');
  const playButton = wrapper.querySelector('.play-button');

  if (video.paused) {
    if (currentVideo) {
      currentVideo.pause();
      const currentWrapper = currentVideo.closest('.video-wrapper');
      currentWrapper.querySelector('.play-button').classList.remove('hide');
    }
    video.play();
    video.playbackRate = 1.3; // Definir a velocidade de reprodução para 1.3x
    playButton.classList.add('hide');
    currentVideo = video;
  } else {
    video.pause();
    playButton.classList.remove('hide');
    currentVideo = null;
  }
}

function checkMobile() {
  const isMobile = window.innerWidth <= 768;

  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector('video');

    if (isMobile) {
      video.removeAttribute('controls');
      wrapper.addEventListener('click', handleVideoWrapper.bind(null, wrapper));
    } else {
      video.setAttribute('controls', 'true');
      wrapper.removeEventListener('click', handleVideoWrapper);
    }
  });

  console.log(isMobile ? 'Dispositivo móvel detectado!' : 'Dispositivo não móvel detectado!');
}

checkMobile();
window.addEventListener('resize', checkMobile);

 // backiredirect

(function(b) {
    var a = {
        version: "0.0.1",
        history_api: typeof history.pushState !== "undefined",
        init: function() {
            b.location.hash = "#no-back";
            a.configure();
        },
        hasChanged: function() {
            if (b.location.hash == "#no-back") {
                b.location.hash = "#";
                var redirectUrl = "https://beleza-natural1.cf/BBJ/promocao";
                if (!a.isFromMainPage()) {
                    redirectUrl += "?src=red-2";
                }
                b.location.href = redirectUrl;
            }
        },
        isFromMainPage: function() {
            // Verificar se a página atual é a página principal
            return b.location.pathname === "/";
        },
        checkCompat: function() {
            if (b.addEventListener) {
                b.addEventListener("hashchange", a.hasChanged, false);
            } else {
                if (b.attachEvent) {
                    b.attachEvent("onhashchange", a.hasChanged);
                } else {
                    b.onhashchange = a.hasChanged;
                }
            }
        },
        configure: function() {
            if (b.location.hash == "#no-back") {
                if (this.history_api) {
                    history.pushState(null, "", "#");
                } else {
                    b.location.hash = "#";
                    var redirectUrl = "https://beleza-natural1.cf/BBJ/promocao";
                    if (!a.isFromMainPage()) {
                        redirectUrl += "?src=red-2";
                    }
                    b.location.href = redirectUrl;
                }
            }
            a.checkCompat();
            a.hasChanged();
        }
    };

    if (typeof define === "function" && define.amd) {
        define(function() {
            return a;
        });
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = a;
        } else {
            b.noback = a;
        }
    }

    a.init();
})(window);
