const SpeechRegocnition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRegocnition();

// recognition.start()
recognition.lang = "en-EN";

microphoneEn.addEventListener("click", () => {
  LangTypeEn.textContent = "Speak !";
  recognition.start();
});

recognition.onresult = (evt) => {
  let resultEn = evt.results[0][0].transcript;
  LangTypeEn.textContent = "Press and speak !";

  ResultVoice.textContent = evt.results[0][0].transcript;

  let body = document.querySelector("body");

  if (resultEn == "black") {
    body.style.background = "black";
  } else if (resultEn == "yellow") {
    body.style.background = "yellow";
  } else if (resultEn == "green") {
    body.style.background = "green";
  } else if (resultEn == "orange") {
    body.style.background = "orange";
  } else if (resultEn == "blue") {
    body.style.background = "blue";
  } else if (resultEn == "red") {
    body.style.background = "red";
  } else if (resultEn == "white") {
    body.style.background = "white";
  } else if (resultEn == "pink") {
    body.style.background = "pink";
  } else if (resultEn == "purple") {
    body.style.background = "purple";
  } else if (resultEn == "gold") {
    body.style.background = "gold";
  } else if (resultEn == "silver") {
    body.style.background = "silver";
  } else if (resultEn == "bronze") {
    body.style.background = "bronze";
  } else {
    body.style.background = "linear-gradient(45deg, blue, red)";
  }
}
