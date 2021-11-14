const SpeechRegocnitionRu =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognitionRu = new SpeechRegocnitionRu();

recognitionRu.lang = "ru-Ru";

microphoneRu.addEventListener("click", () => {
  LangTypeRu.textContent = "Говорите !";
  recognitionRu.start();
});

recognitionRu.onresult = (ev) => {
  let resultRu = ev.results[0][0].transcript;
  LangTypeRu.textContent = "Нажмите и говори !";

  let body = document.querySelector("body");

  if (resultRu == "чёрный") {
    body.style.background = "black";
  } else if (resultRu == "желтый") {
        body.style.background = "yellow";
  }
  else if (resultRu == "красный") {
    body.style.background == "red";
  } else if (resultRu == "зеленый") {
    body.style.background = "green";
  } else if (resultRu == "апельсин") {
    body.style.background = "orange";
  } else if (resultRu == "синий") {
    body.style.background = "blue";
  } else if (resultRu == "белый") {
    body.style.background = "white";
  } else if (resultRu == "розовый") {
    body.style.background = "pink";
  } else if (resultRu == "бордовый") {
    body.style.background = "maroon";
  } else if (resultRu == "фиолетовый") {
    body.style.background = "purple";
  } else if (resultRu == "золото") {
    body.style.background = "gold";
  } else if (resultRu == "серебро") {
    body.style.background = "silver";
  } else if (resultRu == "бронза") {
    body.style.background = "bronze";
  } else if (resultRu == "небо") {
    body.style.background = "skyblue";
  } else if (resultRu == "морков") {
    body.style.background = "salmon";
  } else {
    body.style.background = "linear-gradient(45deg, blue, red)";
  }
};
