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
