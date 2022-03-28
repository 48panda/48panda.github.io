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
quizes = [
    {
        name: "Collecting Like Terms 1",
        id: "collecting-like-terms-1",
        path: ["Algebra", "Like Terms"],
        index: 0,
        url: "wT0ajlmTq38",
        similar: [406,407],
        question: () => {
                number_of_letters = getRandomBoolean() ? 2 : 3;
                let letters = getLetters(number_of_letters);
                let coeffients = [];
                let range = []
                if (number_of_letters == 2) {
                    coefficients = [0,0,0,0]
                    range = [0,1,2,3]
                } else {
                    coefficients = [0,0,0,0,0,0]
                    range = [0,1,2,3,4,5]
                }
                coeffients = coefficients.map(() => getRandomInt(2, 11));
                letters = letters + letters
                return {question:`Collect the like terms of $${range.map(i=>`${coeffients[i]}${letters[i]}`).join(" + ")}$`,checkAnswer:answer=>{
                    return true
                }}
            }

    }
]