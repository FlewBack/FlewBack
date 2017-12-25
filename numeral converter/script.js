

function decode(){
    let dec = document.getElementById('number').value;
    let numeral = document.getElementById('numeral').value;
    let result = (dec >>> 0).toString(numeral);
    
    let answerHTML = document.getElementById('answer');
    answerHTML.insertAdjacentHTML('beforeEnd',result);
}

