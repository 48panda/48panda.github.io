selectionZone = document.getElementById("selectionZone");
indexList = [];


for (let q of quizes) {
    btn = document.createElement("button");
    btn.innerHTML = `${q.index+1}: ${q.name}`;
    btn.onclick = (k=>()=>document.location=`/quiz#${k.replace(/\s/g, '-')}`)(q.name);
    selectionZone.appendChild(btn);
    console.log(q.index);
}
