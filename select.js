selectionZone = document.getElementById("selectionZone");
indexList = [];


for (let q of quizes) {
    container = document.createElement("div");
    btn = document.createElement("a");
    btn.innerHTML = `${q.index+1}: ${q.name}`;
    btn.href = `/quiz#${q.name.replace(/\s/g, '-')}`;
    btn.classList = "btn"
    container.appendChild(btn);
    container.classList = "container-list";
    selectionZone.appendChild(container);
    console.log(q.index);
}
