nameHeader=document.getElementById("name");
id=location.hash.replace("#","").toLowerCase();
quiz=quizes.filter(quiz=>quiz.id==id)[0];
nameHeader.innerHTML = `${quiz.index+1}: ${quiz.name}`;
document.getElementById("video").setAttribute("src",`https://www.youtube-nocookie.com/embed/${quiz.url}?loop=1&playlist=${quiz.url}`);
console.log(quiz.similar);
document.getElementById("similar").innerHTML = `<ul>${quiz.similar.map(x=>typeof x=="string"?`<li><a href="/quiz#${quizes.filter(quiz=>quiz.id==x)[0].id}">${quizes.filter(quiz=>quiz.id==x)[0].name}</a></li>`:`<li>Hegarty task ${x}</li>`).join("")}</ul>`;
doQuestion=(first=false)=>{
    question =  quiz.question();
    document.getElementById("question").innerHTML = question.question;
    if (!first) {
        window.MathJax.typeset();
    }
}
questionAnswered=()=>{
    doQuestion()
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