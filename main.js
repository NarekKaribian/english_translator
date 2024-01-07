let userAnswer = document.querySelector(".user_answer");
let input = document.querySelector(".input");
let translation = document.querySelector(".translation");
let countAswers = document.querySelector(".count_answers");
let answerButton = document.getElementById("answer_button");
let answerInput = document.getElementById("answer_input");

const words = [
  { original: "edit", translation: "редактировать" },
  { original: "undo", translation: "отменить" },
  { original: "redo", translation: "переделывать" },
  { original: "paste", translation: "вставить" },
  { original: "find", translation: "изыскать" },
  { original: "replace", translation: "заменять" },
  { original: "toggle", translation: "переключать" },
  { original: "emment", translation: "наполнять" },
  { original: "recent", translation: "недавний" },
  { original: "share", translation: "делиться" },
  { original: "preferences", translation: "предпочтения" },
  { original: "revert", translation: "возвращаться" },
  { original: "boot", translation: "загружать" },
  { original: "create", translation: "создать" },
  { original: "cut", translation: "вырезать" },
  { original: "backup", translation: "резервное копирование" },
  { original: "issue", translation: "проблема" },
  { original: "pull requests", translation: "запросы на извлечение" },
  { original: "explore", translation: "исследовать" },
  { original: "assigned", translation: "назначенный" },
  { original: "mentione", translation: "упомянуть" },
  { original: "dashboard", translation: "панель приборов" },
  { original: "upgrade", translation: "обновление" },
  { original: "matched", translation: "соответствует" },
  { original: "visibility", translation: "видимость" },
  { original: "develop", translation: "разрабатовать" },
  { original: "compile", translation: "компилировать" },
  { original: "verify", translation: "проверить" },
  { original: "enable", translation: "активировать" },
  { original: "install", translation: "устанавливать" },
  { original: "load", translation: "загружать" },
  { original: "expansion", translation: "расширение" },
  { original: "hyperlink", translation: "ссылка" },
  { original: "booknark", translation: "закладка" },
  { original: "cloud storage", translation: "облачное хранилище" },
  { original: "latency", translation: "задержка" },
  { original: "reboot", translation: "перезагрузка" },
  { original: "to update", translation: "обновить" },
  { original: "to display", translation: "отображать" },
  { original: "to eject", translation: "извлекать" },
  { original: "restore", translation: "восстанавливать" },
  { original: "query", translation: "запрос" },
  { original: "firmware", translation: "прошивка" },
  { original: "keyboard", translation: "клавиатура" },
  { original: "derice", translation: "устройство" },
  { original: "hard disk drive", translation: "жесткий диск" },
  { original: "power supply unit", translation: "блок питания" },
  { original: "storage device", translation: "накопитель" },
  { original: "touch screen", translation: "сенсорный экран" },
  { original: "allow", translation: "разрешить" },
];

let currectIndex = 0;
let correctAnswers = 0;
let correctAnswersText = "Правилные ответы";
let inCorrectAnswers = 0;
let inCorrectAnswersText = "Неправилные ответы";

function getNextWord() {
  return words[currectIndex];
}

function checkTranslation() {
  let currentWord = getNextWord();
  let userTranslation = input.value.toLowerCase().trim();
  let correctTranslation = currentWord.translation.toLowerCase().trim();

  if (userTranslation === correctTranslation) {
    translation.innerHTML = `${currentWord.original} - <span class = "green_text"> ${currentWord.translation} </span>`;
    correctAnswers++;
    answerInput.classList.add("grean_input");
    answerButton.classList.add("green_button");
    setTimeout(() => {
      answerButton.classList.remove("green_button");
      answerInput.classList.remove("green_input");
    }, 1000);
  } else {
    translation.innerHTML = `${currentWord.original} - <span class = "red_text">${currentWord.translation}</span>`;
    inCorrectAnswers++;
    answerInput.classList.add("red_input");
    answerButton.classList.add("red_button");
    setTimeout(() => {
      answerButton.classList.remove("red_button");
      answerInput.classList.remove("red_input");
    }, 1000);
  }

  currectIndex = (currectIndex + 1) % words.length;

  userAnswer.textContent = getNextWord().original;
  countAswers.innerHTML = `
  <p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
  <p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
  `;
  input.value = "";
}

userAnswer.textContent = getNextWord().original;

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkTranslation();
  }
});

function validateInput(input) {
  input.value = input.value.replace(/\d/g, "");
}
