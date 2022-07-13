nameHeader=document.getElementById("name");
id=location.hash.replace("#","").toLowerCase();
console.log(quizes, id, quizes.filter(quiz=>quiz.id==id))
quiz=quizes.filter(quiz=>quiz.id==id)[0];
nameHeader.innerHTML = `${quiz.index+1}: ${quiz.name}`;
console.log(quiz.similar);
window.currentQuestion = {qnum:-1};
questionprogress = document.getElementById("questionprogress")
for (let i=0; i<quiz.questions.length; i++) {
    box = document.createElement("div")
    box.classList = "question-box";
    box.innerHTML = `Question&nbsp;${i+1}`;
    questionprogress.appendChild(box);
}
window.numCorrect = 0;
window.numIncorrect = 0;

doQuestion=()=>{
    if (window.currentQuestion.qnum == quiz.questions.length-1) {
        document.getElementById("input").style.display = "none";
        document.getElementById("correct").style.display = "none";
        document.getElementById("question").style.display = "none";
        document.getElementById("incorrect").style.display = "none";
        document.getElementById("btn-submit").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("done").style.display = "block";
        document.getElementById("score").innerHTML = window.numCorrect;
        document.getElementById("total").innerHTML = window.numCorrect + window.numIncorrect;
    }
    question =  quiz.questions[window.currentQuestion.qnum+1]();
    console.log(question);
    document.getElementById("input").value = "";
    document.getElementById("questions").classList = "";
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("btn-submit").style.display = "inline-block";
    document.getElementById("next").style.display = "none";
    document.getElementById("input").disabled = false;
    document.getElementById("question").innerHTML = question.question.replace(/\n/g,"<br>").replace(/\(\*/g, "<b>").replace(/\*\)/g, "</b>").replace(/\^\^/g, "</sup>").replace(/\^/g, "<sup>");
    questionprogress.children[question.qnum].classList = "question-box current";
    window.currentQuestion = question;
}
questionAnswered=()=>{
    answer = document.getElementById("input").value;
    document.getElementById("input").disabled = true;
    if (answer == currentQuestion.answer) {
        document.getElementById("questions").classList = "correct";
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        document.getElementById("btn-submit").style.display = "none";
        document.getElementById("next").style.display = "inline-block";
        questionprogress.children[window.currentQuestion.qnum].classList = "question-box correct";
        window.numCorrect++;
    } else {
        document.getElementById("questions").classList = "incorrect";
        document.getElementById("correct").style.display = "none";
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correctanswer").innerHTML = currentQuestion.answer;
        document.getElementById("btn-submit").style.display = "none";
        document.getElementById("next").style.display = "inline-block";
        questionprogress.children[window.currentQuestion.qnum].classList = "question-box wrong";
        window.numIncorrect++;
    }
}
doQuestion();