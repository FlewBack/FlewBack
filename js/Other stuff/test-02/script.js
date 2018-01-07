
function out(){
    let p = document.getElementById('out');
    p.insertAdjacentHTML("beforeBegin","<img id='cat' src='https://cdn2.iconfinder.com/data/icons/cat-power/128/cat_clean.png'>");

}

function del(){
    let d;
    d = document.getElementById('cat');
    d.outerHTML ="";
}

