const str = document.getElementById('str').innerHTML;
const word2 = document.getElementById('word2');

for(let i =0; i<str.length; i++){
    const btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
}

var swap = function (event) {
    console.log('swap')
};

var shift = function (event) {
    console.log('shift')
};
