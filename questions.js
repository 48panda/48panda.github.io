names = ["Jeff"]
getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max+1);
    return Math.floor(Math.random() * (max - min)) + min;
}
roundFloat = (float, dp) => {
    return Math.round(float * Math.pow(10, dp)) / Math.pow(10, dp);
}
getRandomBoolean = () => {
    return Math.random() >= 0.5;
}
getRandomName = () => {
    return names[getRandomInt(0, names.length)]
}
getRandomFloat = (min, max, divs)=>getRandomInt(min*divs, max*divs)/divs

quizes = 
[
    {
        name: "Deviaition",
        id: "deviaition",
        topic: "stats",
        index: 0,
        questions:[
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                f = [a,b,c,][getRandomInt(0, 2)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*)\n Round to 2dp if needed.`,
                    answer: roundFloat(f - ((a+b+c)/3), 2),qnum:0
                }
            }
            ,() => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                f = [a,b,c,][getRandomInt(0, 2)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*)\n Round to 2dp if needed.`,
                    answer: roundFloat(f - ((a+b+c)/3), 2),qnum:1
                }
            }
            ,() => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                d = getRandomFloat(1, 10, 1);
                e = getRandomFloat(1, 10, 1);
                f = [a,b,c,d,e][getRandomInt(0, 4)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*)`,
                    answer: roundFloat(f - ((a+b+c+d+e)/5), 5),qnum:2
                }
            }
            ,() => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                d = getRandomFloat(1, 10, 1);
                e = getRandomFloat(1, 10, 1);
                f = [a,b,c,d,e][getRandomInt(0, 4)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*)`,
                    answer: roundFloat(f - ((a+b+c+d+e)/5), 5),qnum:3
                }
            }
            ,() => {
                a = getRandomFloat(1, 10, 10);
                b = getRandomFloat(1, 10, 10);
                c = getRandomFloat(1, 10, 10);
                d = getRandomFloat(1, 10, 10);
                e = getRandomFloat(1, 10, 10);
                f = [a,b,c,d,e][getRandomInt(0, 4)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*)`,
                    answer: roundFloat(f - ((a+b+c+d+e)/5), 5),qnum:4
                }
            }
            ,() => {
                a = getRandomFloat(1, 10, 10);
                b = getRandomFloat(1, 10, 10);
                c = getRandomFloat(1, 10, 10);
                d = getRandomFloat(1, 10, 10);
                e = getRandomFloat(1, 10, 10);
                f = [a,b,c,d,e][getRandomInt(0, 4)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*)`,
                    answer: roundFloat(f - ((a+b+c+d+e)/5), 5),qnum:5
                }
            }
            ,() => {
                a = getRandomFloat(1, 100, 10);
                b = getRandomFloat(1, 100, 10);
                c = getRandomFloat(1, 100, 10);
                d = getRandomFloat(1, 100, 10);
                e = getRandomFloat(1, 100, 10);
                f = [a,b,c,d,e][getRandomInt(0, 4)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*)`,
                    answer: roundFloat(f - ((a+b+c+d+e)/5), 5),qnum:6
                }
            }
            ,() => {
                a = getRandomFloat(1, 100, 10);
                b = getRandomFloat(1, 100, 10);
                c = getRandomFloat(1, 100, 10);
                d = getRandomFloat(1, 100, 10);
                e = getRandomFloat(1, 100, 10);
                f = [a,b,c,d,e][getRandomInt(0, 4)];
                return {question: `Find the deviation of (*${f}*) in the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*)`,
                    answer: roundFloat(f - ((a+b+c+d+e)/5), 5),qnum:7
                }
            }
     ]
    },
    {
        name: "Variance",
        id: "variance",
        topic: "stats",
        index: 1,
        questions: [
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2)/3 - ((a+b+c)/3)**2, 2),qnum:0
                }
            },
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2)/3 - ((a+b+c)/3)**2, 2),qnum:1
                }
            },
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                d = getRandomFloat(1, 10, 1);
                e = getRandomFloat(1, 10, 1);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2, 2),qnum:2
                }
            },
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                d = getRandomFloat(1, 10, 1);
                e = getRandomFloat(1, 10, 1);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2, 2),qnum:3
                }
            },
            () => {
                a = getRandomFloat(1, 10, 10);
                b = getRandomFloat(1, 10, 10);
                c = getRandomFloat(1, 10, 10);
                d = getRandomFloat(1, 10, 10);
                e = getRandomFloat(1, 10, 10);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2, 2),qnum:4
                }
            },
            () => {
                a = getRandomFloat(1, 10, 10);
                b = getRandomFloat(1, 10, 10);
                c = getRandomFloat(1, 10, 10);
                d = getRandomFloat(1, 10, 10);
                e = getRandomFloat(1, 10, 10);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2, 2),qnum:5
                }
            },
            () => {
                a = getRandomFloat(1, 100, 10);
                b = getRandomFloat(1, 100, 10);
                c = getRandomFloat(1, 100, 10);
                d = getRandomFloat(1, 100, 10);
                e = getRandomFloat(1, 100, 10);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2, 2),qnum:6
                }
            },
            () => {
                a = getRandomFloat(1, 100, 10);
                b = getRandomFloat(1, 100, 10);
                c = getRandomFloat(1, 100, 10);
                d = getRandomFloat(1, 100, 10);
                e = getRandomFloat(1, 100, 10);
                return {question: `Find the variance of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2dp`,
                    answer: roundFloat((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2, 2),qnum:7
                }
            },
        ]
    },
    {
        name: "Standard Deviation",
        id: "standard-deviation",
        topic: "stats",
        index: 2,
        questions: [
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2)/3 - ((a+b+c)/3)**2)**0.5, 2),qnum:0
                }
            },
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2)/3 - ((a+b+c)/3)**2)**0.5, 2),qnum:1
                }
            },
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                d = getRandomFloat(1, 10, 1);
                e = getRandomFloat(1, 10, 1);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2)**0.5, 2),qnum:2
                }
            },
            () => {
                a = getRandomFloat(1, 10, 1);
                b = getRandomFloat(1, 10, 1);
                c = getRandomFloat(1, 10, 1);
                d = getRandomFloat(1, 10, 1);
                e = getRandomFloat(1, 10, 1);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2)**0.5, 2),qnum:3
                }
            },
            () => {
                a = getRandomFloat(1, 10, 10);
                b = getRandomFloat(1, 10, 10);
                c = getRandomFloat(1, 10, 10);
                d = getRandomFloat(1, 10, 10);
                e = getRandomFloat(1, 10, 10);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2)**0.5, 2),qnum:4
                }
            },
            () => {
                a = getRandomFloat(1, 10, 10);
                b = getRandomFloat(1, 10, 10);
                c = getRandomFloat(1, 10, 10);
                d = getRandomFloat(1, 10, 10);
                e = getRandomFloat(1, 10, 10);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2)**0.5, 2),qnum:5
                }
            },
            () => {
                a = getRandomFloat(1, 100, 10);
                b = getRandomFloat(1, 100, 10);
                c = getRandomFloat(1, 100, 10);
                d = getRandomFloat(1, 100, 10);
                e = getRandomFloat(1, 100, 10);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2)**0.5, 2),qnum:6
                }
            },
            () => {
                a = getRandomFloat(1, 100, 10);
                b = getRandomFloat(1, 100, 10);
                c = getRandomFloat(1, 100, 10);
                d = getRandomFloat(1, 100, 10);
                e = getRandomFloat(1, 100, 10);
                return {question: `Find the standard deviation of the dataset below. \n (*${a}*), (*${b}*), (*${c}*), (*${d}*), (*${e}*) \n\n  give your answer to 2d.p.`,
                    answer: roundFloat(((a**2+b**2+c**2+d**2+e**2)/5 - ((a+b+c+d+e)/5)**2)**0.5, 2),qnum:7
                }
            },
        ]
    },
    {
        name: "Comparative (scaled) Pie Charts",
        id: "comparative-(scaled)-pie-charts",
        topic: "stats",
        index: 3,
        questions: [
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomInt(1, 10, 1);
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B represents ${f2} people. \n What should the radius of Pie Chart B be?`,
                    answer: r2,qnum:0
                }
            },
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomFloat(1, 10, 1);
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B represents ${f2} people. \n What should the radius of Pie Chart B be?`,
                    answer: r2,qnum:1
                }
            },
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomInt(1, 10) * 100;
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B represents ${f2} people. \n What should the radius of Pie Chart B be?`,
                    answer: r2,qnum:2
                }
            },
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomInt(1, 10) * 100;
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B represents ${f2} people. \n What should the radius of Pie Chart B be?`,
                    answer: r2,qnum:3
                }
            },
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomFloat(1, 10, 1);
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B has a radius of ${r2}. \n How many people does Pie Chart B represent?`,
                    answer: f2,qnum:4
                }
            },
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomFloat(1, 10, 1);
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B has a radius of ${r2}. \n How many people does Pie Chart B represent?`,
                    answer: f2,qnum:5
                }
            },
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomInt(1, 10) * 100;
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B has a radius of ${r2}. \n How many people does Pie Chart B represent?`,
                    answer: f2,qnum:6
                }
            },
            () => {
                r1 = getRandomFloat(1, 20, 1);
                r2 = getRandomFloat(1, 20, 1);
                while (r1 == r2) {
                    r2 = getRandomFloat(1, 20, 1);
                }
                multiple = getRandomInt(1, 10) * 100;
                f1 = r1**2 * multiple;
                f2 = r2**2 * multiple;
                return {question: `Pie Chart A has radius ${r1} and represents ${f1} people. \n Pie Chart B has a radius of ${r2}. \n How many people does Pie Chart B represent?`,
                    answer: f2,qnum:7
                }
            },
        ]
    }
]