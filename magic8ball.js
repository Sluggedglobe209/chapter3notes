let answerList =[`yes`, `no`, `maybe`, `probably`, `probably not`];

let randomNum = Math.floor(Math.random()*answerList.length);

let randomAnswer =answerList[randomNum];
console.log(randomAnswer);
