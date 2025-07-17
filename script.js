// Animasyon ve geçişler için JavaScript

const cake1 = document.getElementById('cake1');
const chocolate1 = document.getElementById('chocolate1');
const cake2 = document.getElementById('cake2');
const chocolate2 = document.getElementById('chocolate2');
const cake3 = document.getElementById('cake3');
const icing = document.querySelector('.icing');
const candle = document.querySelector('.candle');
const flame = document.querySelector('.flame');

const confettiContainer = document.getElementById('confetti-container');
const heartsContainer = document.getElementById('hearts-container');
const sparklesContainer = document.getElementById('sparkles-container');

const mainContent = document.getElementById('mainContent');
const textContainer = document.getElementById("sequenceTextContainer");

const messages = [
  "İyi ki doğdun...",
  "İyi ki varsın...",
  "İyi ki tanımışım seni..."
];

let messageIndex = 0;

function showNextMessage() {
  textContainer.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  setTimeout(showNextMessage, 2500);
}

// Pasta animasyonu sırası
function startCakeAnimation() {
  setTimeout(() => {
    cake1.style.opacity = '1';
    cake1.style.transform = 'translateX(-50%) translateY(0)';
  }, 0);

  setTimeout(() => {
    chocolate1.style.opacity = '1';
    chocolate1.style.transform = 'translateX(-50%) translateY(0)';
  }, 900);

  setTimeout(() => {
    cake2.style.opacity = '1';
    cake2.style.transform = 'translateX(-50%) translateY(0)';
  }, 1800);

  setTimeout(() => {
    chocolate2.style.opacity = '1';
    chocolate2.style.transform = 'translateX(-50%) translateY(0)';
  }, 2700);

  setTimeout(() => {
    cake3.style.opacity = '1';
    cake3.style.transform = 'translateX(-50%) translateY(0)';
  }, 3600);

 

  setTimeout(() => {
    candle.style.opacity = '1';
    flame.style.opacity = '1';
    flame.style.animationPlayState = 'running';
  }, 8000);

  // Konfeti başlat
  createConfetti();
}

// Konfeti fonksiyonu (aşağıdan yukarıya küçük konfetiler)
function createConfetti() {
  const colors = ['#ff4b4b', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];

  let count = 100;
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.position = 'absolute';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = window.innerHeight + 'px';
    confetti.style.opacity = '0.9';
    confetti.style.borderRadius = '2px';
    confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;

    confettiContainer.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
      confetti.remove();
      // Yeniden oluştur
      createConfettiPiece();
    });
  }
}

// Tekrar konfetiyi oluştur
function createConfettiPiece() {
  const colors = ['#ff4b4b', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.position = 'absolute';
  confetti.style.width = '8px';
  confetti.style.height = '8px';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.top = window.innerHeight + 'px';
  confetti.style.opacity = '0.9';
  confetti.style.borderRadius = '2px';
  confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;

  confettiContainer.appendChild(confetti);

  confetti.addEventListener('animationend', () => {
    confetti.remove();
    createConfettiPiece();
  });
}

// İkinci sayfa geçişi ve animasyonları
function showSecondScene() {
  document.querySelector('.scene').style.display = 'none';
  mainContent.style.display = 'block';
  showNextMessage();
  createHearts(40);
  createSparkles(50);
}

// Kalpler oluşturma
function createHearts(count) {
  for(let i=0; i<count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';
    heart.style.opacity = (0.4 + Math.random() * 0.6);
    heart.style.fontSize = (10 + Math.random() * 20) + 'px';
    heartsContainer.appendChild(heart);

    heart.addEventListener('animationend', () => {
      heart.remove();
      createHearts(1);
    });
  }
}

// Işıltılar oluşturma
function createSparkles(count) {
  for(let i=0; i<count; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.animationDuration = (2 + Math.random() * 3) + 's';
    sparkle.style.opacity = (0.3 + Math.random() * 0.7);
    sparklesContainer.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
      createSparkles(1);
    }, (2000 + Math.random() * 3000));
  }
}

// Konfeti animasyon tanımı (CSS'te değil JS'te yapıyoruz)
const style = document.createElement('style');
style.innerHTML = `
@keyframes confettiFall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.9;
  }
  100% {
    transform: translateY(-110vh) rotate(360deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);


// Animasyonları başlat ve 12 saniye sonra ikinci sahneye geç
startCakeAnimation();

setTimeout(() => {
  showSecondScene();
}, 12000);
