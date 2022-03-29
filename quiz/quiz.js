nameHeader=document.getElementById("name");
id=location.hash.replace("#","").toLowerCase();
quiz=quizes.filter(quiz=>quiz.id==id)[0];
nameHeader.innerHTML = `${quiz.index+1}: ${quiz.name}`;
document.getElementById("video").setAttribute("src",`https://www.youtube-nocookie.com/embed/${quiz.url}?loop=1&playlist=${quiz.url}`);
console.log(quiz.similar);
document.getElementById("similar").innerHTML = `<ul>${quiz.similar.map(x=>typeof x=="string"?`<li><a href="/quiz#${quizes.filter(quiz=>quiz.id==x)[0].id}">${quizes.filter(quiz=>quiz.id==x)[0].name}</a></li>`:`<li>Hegarty task ${x}</li>`).join("")}</ul>`;
doQuestion=()=>{
    mathField.latex("");
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("btn-submit").style.display = "inline-block";
    document.getElementById("next").style.display = "none";
    document.getElementById("input").querySelector(".mq-textarea textarea").disabled = false;
    question =  quiz.question();
    document.getElementById("question").innerHTML = question.question.replace(/\n/g,"<br>");
    window.MathJax.typeset();
    window.currentQuestion = question;
}
questionAnswered=()=>{
    let answer = mathField.latex()
    document.getElementById("input").querySelector(".mq-textarea textarea").disabled = true;
    if (currentQuestion.checkAnswer(answer)) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        document.getElementById("btn-submit").style.display = "none";
        document.getElementById("next").style.display = "inline-block";
    } else {
        document.getElementById("correct").style.display = "none";
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correctanswer").innerHTML = currentQuestion.answer;
        document.getElementById("btn-submit").style.display = "none";
        document.getElementById("next").style.display = "inline-block";
    }
    window.MathJax.typeset();
}
goButton=()=>{
    document.getElementById("questions").style.display = "block";
    document.getElementById("vidcon").classList.add("hidden");
    document.getElementById("similarcontainer").style.display = "none";
    document.getElementById("go").style.display = "none";
    doQuestion();
}
//doQuestion(true);
var mathField = MQ.MathField(document.getElementById("input"), {
    spaceBehavesLikeTab: true,
    autoCommands: 'pi theta sqrt sum',
    autoOperatorNames: 'sin cos',
    supSubsRequireOperand: true,
    charsThatBreakOutOfSupSub: '+-=',
    leftRightIntoCmdGoes: 'up',
    handlers: {
        enter: questionAnswered
    }
});