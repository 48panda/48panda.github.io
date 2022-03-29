names = ["a", "b", "c", "d", "e", "f", "g"]
subjects = ["Maths"]
getLetters = numLetters => {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for (let i = 0; i < numLetters; i++) {
        index = Math.floor(Math.random() * letters.length);
        output += letters[index];
        letters = letters.slice(0, index) + letters.slice(index + 1);
    }
    return output;
}
getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
getRandomBoolean = () => {
    return Math.random() >= 0.5;
}
getRandomName = () => {
    return names[getRandomInt(0, names.length)]
}
getRandomSubject = () => {
    return subjects[getRandomInt(0, subjects.length)]
}
quizes = 
[
    {
        name: "",
        id: "",
        path: ["", ""],
        index: 0,
        url: "", // TODO: UPLOAD AND CHANGE
        similar: [406],
        question: () => {
            let numberOfNumbers = getRandomInt(3, 7);
            let numbers = []
            let range = getRandomInt(200, 900) * 100
            for (let i=0; i < numberOfNumbers-1; i++) {
                numbers.push(getRandomInt(range, range + 100))
            }
            let partialSum = numbers.reduce((a,b)=>a+b)
            let mean = getRandomInt(Math.min(...numbers), Math.max(...numbers))
            numbers.push((mean * numberOfNumbers) - partialSum)
            return {question:`Calculate the mean of this set of data:\n${numbers}`}
        }
    }, {
        name: "",
        id: "",
        path: ["", ""],
        index: 1,
        url: "", // TODO: UPLOAD AND CHANGE
        similar: [406],
        question: () => {
            num_rows = getRandomInt(2,5);
            let x = [];
            let w = [];
            w_left = 20
            for (let i=0;i<num_rows;i++){w.push(1), w_left-=1}
            for (let i=0; i < w_left; i++) {
                index = getRandomInt(0, num_rows)
                w[index] += 1
            }
            w=w.map(x=>x/20)
            for (let i=0; i < num_rows; i++) {
                x.push(getRandomInt(0,21) * 5)
            }
            text = w.map((v,i)=>`Paper ${i+1} makes up ${Math.round(v*100)}%`)
            paper = x.map((v,i)=>`${v}% on Paper ${i+1}`)
            s = ""
            c = 0
            s2 = ""
            c2 = 0
            console.log(text)
            for(let i of text){if(c==num_rows-1){s+=" and "}else if(c!=0){s+=", "}s+=i;c++}
            for(let i of paper){if(c2==num_rows-1){s2+=" and "}else if(c2!=0){s2+=", "}s2+=i;c2++}
            name = getRandomName()
            return {question:`In ${getRandomSubject()}, There are ${num_rows} papers. ${s}. ${name} got ${s2}. What was ${name}'s percentage across all of the papers?`,
                checkAnswer:(answer)=>{
                    fx = x.map((x_,i)=>{w_=w[i];return w_*x_})
                    correct = fx.reduce((a,b)=>a+b)
                    return answer==correct
                }
            }
        }
    }
]