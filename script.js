function showLayer(id, delay) {
  setTimeout(() => {
    const el = document.getElementById(id);
    el.classList.remove('hidden');
    el.style.opacity = 1;
    el.style.transition = 'none';
    el.style.transform = 'translateX(-50%) translateY(-400px)';
    setTimeout(() => {
      el.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease';
      el.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);
  }, delay);
}

function showChocolate(id, delay) {
  setTimeout(() => {
    const el = document.getElementById(id);
    el.classList.remove('hidden');
    el.style.animation = 'chocolateFlowDown 1s ease forwards';
  }, delay);
}

function showIcing() {
  const icing = document.getElementById('icing');
  icing.classList.remove('hidden');
  icing.style.animation = 'icingWave 2s ease forwards';
}

function showCandle() {
  const candle = document.getElementById('candle');
  const flame = candle.querySelector('.flame');
  candle.classList.remove('hidden');
  candle.style.opacity = 1;
  setTimeout(() => {
    flame.style.opacity = 1;
    flame.style.animationPlayState = 'running';
  }, 500);
}

showLayer('cake1', 500);
showChocolate('chocolate1', 1300);
showLayer('cake2', 2100);
showChocolate('chocolate2', 2900);
showLayer('cake3', 3700);
setTimeout(showIcing, 4500);
setTimeout(showCandle, 6500);

/* ------------------- İkinci sayfa yazı animasyonu ----------------- */

const textContainer = document.getElementById("sequenceTextContainer");
const messages = [
  "İyi ki doğdun...",
  "İyi ki varsın...",
  "İyi ki tanımışım seni..."
];
let i = 0;
function showNextMessage() {
  textContainer.textContent = messages[i];
  i = (i + 1) % messages.length;
  setTimeout(showNextMessage, 2500);
}

/* İntro bittikten sonra ikinci sayfayı göster */
setTimeout(() => {
  // Pastayı gizle
  document.querySelector('.scene').style.display = 'none';

  // İkinci sayfayı göster
  const mainContent = document.getElementById('mainContent');
  mainContent.style.display = 'block';

  // Yazı animasyonunu başlat
  showNextMessage();
}, 9000); /* Pasta ve mum animasyonları bittikten sonra */

/* ------------------ Kalp animasyonu -------------------- */

const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Rastgele yatay pozisyon (0-100vw)
  heart.style.left = Math.random() * 100 + 'vw';

  // Farklı boyutlar (10px - 25px)
  const size = 10 + Math.random() * 15;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  // Farklı animasyon süreleri (4 - 8 saniye)
  const duration = 4 + Math.random() * 4;
  heart.style.animationDuration = duration + 's';

  // Hafif animasyon gecikmesi
  const delay = Math.random() * 1000;
  heart.style.animationDelay = delay + 'ms';

  heartsContainer.appendChild(heart);

  // Animasyon bitince kalbi DOM’dan kaldır
  setTimeout(() => {
    heart.remove();
  }, duration * 1000 + delay);
}

// Her 300ms’de yeni kalp oluştur
setInterval(createHeart, 300);
