names = ["a", "b", "c", "d", "e", "f", "g"]
subjects = ["Maths"]
experiments = [
    {
        name:"titration",
        unit:"mol/dm3"
    }
]
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
getRandomExperiment = () => {
    return experiments[getRandomInt(0, experiments.length)]
}
getRandomName = () => {
    return names[getRandomInt(0, names.length)]
}
getRandomSubject = () => {
    return subjects[getRandomInt(0, subjects.length)]
}
getRandomFloat = (min, max, divs)=>getRandomInt(min*divs, max*divs)/divs

quizes = 
[
    {
        name: "Mean of large numbers",
        id: "mean-of-large-numbers",
        topic: "stats",
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
            return {question:`Calculate the mean of this set of data:\n${numbers}`,checkAnswer:answer=>answer==mean, answer:mean}
        }
    }, {
        name: "Weighted mean",
        id: "weighted-mean",
        topic: "stats",
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
            w=w.map(x=>x*getRandomInt(1,6))
            for (let i=0; i < num_rows; i++) {
                x.push(getRandomInt(0,21) * 5)
            }
            //text = w.map((v,i)=>`Paper ${i+1} makes up ${Math.round(v*100)}%`)
            //paper = x.map((v,i)=>`${v}% on Paper ${i+1}`)
            //console.log(text)
            text = x.map(x=>`<td>${x}</td>`).join("")
            paper=w.map(x=>`<td>${x}</td>`).join("")
            let name = getRandomName()
            fx = x.map((x_,i)=>{w_=w[i];return w_*x_})
            correct = fx.reduce((a,b)=>a+b)
            return {question:`These are ${name}'s test scores. What was ${name}'s mean score?\n<table><tr><th>Score</th>${text}</tr><tr><th>Weight</th>${paper}</tr></table>`,
                checkAnswer:(answer)=>{
                    return answer==correct
                },
                answer:correct
            }
        }
    }, {
        name: "",
        id: "",
        topic: "",
        index: 2,
        url: "",
        similar: [],
        question: () => {
            center = getRandomInt(1, 100)
            a = getRandomFloat(center - 5, center + 5, 10)
            b = getRandomFloat(center - 5, center + 5, 10)
            c = getRandomFloat(center - 5, center + 5, 10)
            d = getRandomFloat(center - 5, center + 5, 10)
            e = getRandomFloat(center - 5, center + 5, 10)
            mean = (a+b+c+d+e)/5
            de = e - mean
            return {question: `${getRandomName} DATA THINGY HERE ${a}, ${b}, ${c} ${d}.\n The last DATA THINGY HERE was ${e}.\ncCalculate the devaition of the LAST DATATHINGY HERE in the dataset.`}
        }
    }
]