const riddleRef = document.getElementById("riddle");
const answerRef = document.getElementById("answer");
const showBtn = document.getElementById("show-answer");
const nextBtn = document.getElementById("next");
const URL = "https://riddles-api.vercel.app/random";
//Display riddle
const updateRiddle = (riddle, answer) => {
  riddleRef.innerText = riddle;
  answerRef.innerText = answer;
};
const getRiddle = () => {
  answerRef.classList.add("hide");
  fetch(URL)
    .then((data) => data.json())
    .then((item) => {
      updateRiddle(item.riddle, item.answer);
    });
};
//Show Answer
showBtn.addEventListener("click", () => {
  answerRef.classList.remove("hide");
});
nextBtn.addEventListener("click", getRiddle);

window.onload = () => {
  getRiddle();
};
