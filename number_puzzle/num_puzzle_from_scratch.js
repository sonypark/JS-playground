let word1 = document.getElementById('word1'); // target word
let word2 = document.getElementById('word2'); // buttons
let check = document.getElementById('check'); // check if word1 == word2
let progress = document.getElementById('progress'); // progress check
let time = document.getElementById('time'); // time check

var t1 = Date.now();

var game = {};
game.btns = [];
game.letters = [];
game.current = 0;
game.maxPlay = 3;

game.progress = function () {
    if (this.letters.join('') === word1.innerText) {
        this.current++;
        this.removeButtons();
        this.init();
        this.shuffle();
        let str = '';
        for (let i = 0; i < this.current; i++) {
            str += 'O';
        }
        progress.innerHTML = str;
    }

    if (this.current === this.maxPlay) {
        alert('Good job, Thanks for playing');
        const t2 = Date.now();
        this.calTime(t2);
        this.current = 0;
        progress.innerHTML = ''
    }
};

game.getRandomWord = function () {
    words = 'HELLO,SEOUL,NEWYORK,SYDNEY,LONDON,TOKYO,SINGAPORE,CHICAGO,DANANG,HAWAI'.split(',');
    rand_idx = Math.floor(Math.random() * words.length);
    this.target_word = words[rand_idx];
    word1.innerHTML = this.target_word;
    this.letters = this.target_word.split('');
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn)
    }
};

game.removeButtons = function () {
    for (let i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i])
    }
    this.btns = [];
};

game.copyBtnText = function () {
    for (let i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i]
    }
};

// initiate
game.init = function () {
    this.getRandomWord();
    this.addButtons();
};
game.init();

var swap = function () {
    game.letters.reverse();
    game.copyBtnText();
    game.checkAnswer();
    game.progress()
};
var shiftToRight = function () {

    const s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.checkAnswer();
    game.progress()
};
var shiftToLeft = function () {

    const s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.checkAnswer();
    game.progress()
};

game.checkAnswer = function () {
    if (this.letters.join('') === word1.innerText) {
        check.innerHTML = '일치합니다.'
    } else {
        check.innerHTML = '일치하지 않습니다.'
    }
};

game.shuffle = function () {
    const toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        swap() // 50% 확률로 뒤집기
    }

    const rmax = Math.max(this.letters.length - 2, 1);
    const n = Math.floor(Math.random() * rmax) + 1;
    for (let i = 0; i < n; i++) {
        shiftToRight() // n회 오른쪽으로 밀기
    }
};
game.shuffle();

game.calTime = function (t2) {
    const t = t2 - t1;
    time.innerHTML = '경과 시간: ' + t
};

