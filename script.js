function showMessage() {
  const message = document.getElementById("message");
  const gift = document.querySelector(".gift");
  const giftImage = document.getElementById('giftImage');
  const mess = document.getElementById("mess");

  // Change the gift box to the opened version
  giftImage.src = './src/img/gift-open.png';
  gift.classList.add('open'); 
  // grrr
  // Show the birthday message with a fade-in effect
  message.style.display = "block";
  message.style.opacity = 0; 

  let opacity = 0;
  const fadeIn = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.05;
      message.style.opacity = opacity;
    } else {
      clearInterval(fadeIn);
    }
  }, 30);
}

function startAudio() {
  const audio = document.getElementById("hbdAudio");
  audio.play().then(() => {
    mess.remove();
  }).catch((err) => {
    console.log("Audio blocked:", err);
  });

  document.body.onclick = null;
}
