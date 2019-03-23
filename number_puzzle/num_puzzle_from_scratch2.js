let word1 = document.getElementById('word1'); // target word
let word2 = document.getElementById('word2'); // letters on btns
let check = document.getElementById('check'); // check if word1 == word2
let progress = document.getElementById('progress'); // check progress
let time = document.getElementById('time'); // check time


var game = {};
game.btns = [];
game.letters = [];
game.current = 0;
game.maxPlay = 3;
game.startTime = Date.now();


game.getRandomWord = function () {
    words = 'HELLO,SEOUL,NEWYORK,SYDNEY,LONDON,TOKYO,SINGAPORE,CHICAGO,DANANG,HAWAI'.split(',');
    rand_idx = Math.floor(Math.random() * words.length);
    this.target_word = words[rand_idx];
    word1.innerHTML = this.target_word;
    this.letters = this.target_word.split('')
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
    for (let i = 0; i < this.btns.length; i++) {
        this.btns[i].innerHTML = this.letters[i]
    }
};

game.checkAnswer = function () {
    if (this.target_word === this.letters.join('')) {
        check.innerHTML = '일치합니다.'
    } else {
        check.innerHTML = '일치하지 않니다.'
    }
};

game.init = function () {
    this.getRandomWord();
    this.addButtons();
    this.checkAnswer();
};
game.init();

game.progress = function () {
    if (this.target_word === this.letters.join('')) {
        console.log('???');
        this.current++;
        this.removeButtons();
        this.init();
        this.shuffle();
        let str = "";
        for (let i = 0; i < this.current; i++) {
            str += 'O';
        }
        progress.innerHTML = str;
    }

    if (this.current === this.maxPlay) {
        const t = (Date.now() - this.startTime) / 1000;
        alert("Good job! Your Record: " + t + " sec");
        clearInterval(x);
        this.current = 0;
        progress.innerHTML = ''
    }
};

var swap = function () {
    game.letters.reverse();
    game.copyBtnText();
    game.checkAnswer();
    game.progress();
};

var shiftToRight = function () {
    const s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.checkAnswer();
    game.progress();
};

var shiftToLeft = function () {
    const s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.checkAnswer();
    game.progress();
};


game.shuffle = function () {
    // 50% 확률로 뒤집기
    const toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        swap()
    }
    // 글자 길이 내의 랜덤확률로 오른쪽 밀기
    const n = Math.floor(Math.random() * (this.letters.length - 1));
    for (let i = 0; i < n; i++) {
        shiftToRight()
    }
};
game.shuffle();

var updateTime = function () {
    var t_passed = (Date.now() - game.startTime) / 1000;
    time.innerHTML = t_passed + " sec";
};

var x = setInterval(updateTime, 50);
