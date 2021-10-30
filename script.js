let emojis = [
  "😂",
  "✌",
  "😔",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚",
];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const emojiHTML = document.getElementsByClassName("container__emoji")[0];
let emojiIndex = 0;

emojiHTML.addEventListener("click", () => {
  emojiIndex = getRndInteger(0, 93);
  if (emojis[emojiIndex] === undefined) {
    emojiHTML.innerHTML = "😍";
  } else {
    emojiHTML.innerHTML = emojis[emojiIndex];
  }
});

const btn = document.getElementsByClassName("container__btn")[0];
btn.addEventListener("click", () => {
  navigator.clipboard.writeText(emojis[emojiIndex]);
});

const face1 = document.querySelector('.glasses');
const face2 = document.querySelector('.surprise');


//event listener
face1.addEventListener('click', () => {
    if(face2.classList.contains('surprise')){
        face2.classList.add('active');
        face1.classList.remove('active');
    }
});

face2.addEventListener('click', () => {
    if(face1.classList.contains('glasses')){
        face1.classList.add('active');
        face2.classList.remove('active');
    }
});
