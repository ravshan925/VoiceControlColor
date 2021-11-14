const SpeechRecognitionUz =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognitionUz = new SpeechRecognitionUz();

recognitionUz.lang = "uz-UZ";

microphoneUz.addEventListener("click", () => {
  LangTypeUz.textContent = "Gapiring !";
  recognitionUz.start();
});

recognitionUz.onresult = (evt) => {
  let resultUz = evt.results[0][0].transcript;
  LangTypeUz.textContent = "Bosib gapiring !";

  ResultVoice.textContent = evt.results[0][0].transcript;

  let body = document.querySelector("body");

  if (resultUz == "qizil") {
    body.style.background = "red";
  } else if (resultUz == "qora") {
    body.style.background = "black";
  } else if (resultUz == "oltin") {
    body.style.background = "gold";
  } else if (resultUz == "ko'k") {
    body.style.background = "blue";
  } else if (resultUz == "oq") {
    body.style.background = "white";
  } else if (resultUz == "yashil") {
    body.style.background = "green";
  } else if (resultUz == "sariq") {
    body.style.background = "yellow";
  } else if (resultUz == "pushti") {
    body.style.background = "pink";
  } else {
    body.style.background = "linear-gradient(45deg, blue, red)";
  }
};
