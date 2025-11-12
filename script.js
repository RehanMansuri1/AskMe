const askBtn = document.getElementById("askBtn");
const answer = document.getElementById("answer");
const question = document.getElementById("question");

const replies = [
    "Yes 😄",
  "No 😢",
  "Maybe 🤔",
  "Ask again later ⏳",
  "Definitely! 💪",
  "I don't think so 😬",
  "100% sure! 🔥",
  "Nah bro 😎",
  "Of course! 🎯",
  "Not today 😴"
]


const getRandomColor = ()=>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r} , ${g} , ${b})`;
}
askBtn.addEventListener("click", function(){
    if(question.value.trim() === ""){
        alert("Please type a question first! 😅");
        return
    }

    const randomIndex = Math.floor(Math.random() * replies.length);

    answer.style.opacity = 0;
    setTimeout(() => {
        answer.textContent = replies[randomIndex];
        answer.style.color = getRandomColor();
        answer.style.opacity = 1;
    }, (300));


    document.body.style.backgroundColor = getRandomColor();

})