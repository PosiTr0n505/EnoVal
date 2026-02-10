const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-section');
const messageSection = document.getElementById('message-section');
const noCounterDisplay = document.getElementById('no-counter');

let noCount = 0;
let yesScale = 1;
let noScale = 1;
const initialButtonHeight = 60; // approximate height of button (padding + font size)

const roastMessages = [
    "Nice try.",
    "Calculated... but man, you're bad at math.",
    "Are you clicking 'No' as a workout?",
    "Error 404: 'No' option not found.",
    "I can do this all day. I am a computer scientist.",
    "I know you didn't mean to press that",
    "The 'Yes button is getting hungry'",
    "I will kick your ass if you keep on pressing this",
    "I will punish you",
    "ENOLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "I will fart on your face",
    "Haha LOL noob loser"
];

noBtn.addEventListener('click', () => {
    noCount++;
    
    yesScale += 0.3; 
    yesBtn.style.transform = `scale(${yesScale})`;

    // Move message up as button grows to maintain constant spacing
    const scaleGrowth = (yesScale - 1) * initialButtonHeight / 2;
    noCounterDisplay.style.transform = `translateY(-${scaleGrowth}px)`;

    noScale = Math.max(0.2, noScale - 0.1)

    const padding = 100;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.transform = `translate(-50%, -50%) scale(${noScale})`;

    if (noCount % 2 === 0) {
        const msgIndex = Math.floor(Math.random() * roastMessages.length);
        noCounterDisplay.innerText = roastMessages[msgIndex];
        
        noCounterDisplay.style.transform = `scale(1.2) translateY(-${scaleGrowth}px)`;
        setTimeout(() => noCounterDisplay.style.transform = `scale(1) translateY(-${scaleGrowth}px)`, 100);
    }
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    messageSection.classList.remove('hidden');
    
    confetti({
        particleCount: 500,
        spread: 200,
        origin: { y: 0.6 }
    });
});