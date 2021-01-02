const correctAnswers = ["A", "A"];
const form = document.querySelector(".form");

form.addEventListener('submit', e => {

  e.preventDefault();
  let userAnswers = [form.question1.value, form.question2.value];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 100
    }
    
  });

  console.log(score)
})