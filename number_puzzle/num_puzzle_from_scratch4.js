const word1 = document.getElementById('word1'); // target_word
const word2 = document.getElementById('word2'); // buttons
const check = document.getElementById('check'); // check in word1 === word2
const progress = document.getElementById('progress'); // check progress
const time = document.getElementById('time'); // check running time

var game = {};
game.btns = [];
game.letters = [];
game.current = 0;
game.maxPlay = 3;
game.startTime = Date.now();
game.isFinished = function () {
    return this.current === this.maxPlay
};

game.progress = function () {
    if (this.letters.join('') === word1.innerText) {
        this.removeButtons();
        this.init();
        this.current++;
        let s = "";
        for (let i = 0; i < this.current; i++) {
            s += 'O';
        }
        progress.innerHTML = s;
    }

    if (this.isFinished()) {
        progress.innerHTML = "";
        this.current = 0;
        const running_time = (Date.now() - this.startTime) / 1000;
        alert('Good job!, Your Record: ' + running_time + ' sec')
        clearInterval(x);
    }
};

game.getRandomWord = function () {
    words = 'HELLO,SEOUL,NEWYORK,SYDNEY,LONDON,TOKYO,SINGAPORE,CHICAGO,DANANG,HAWAI'.split(',');
    rand_idx = Math.floor(Math.random() * words.length);
    const rand_word = words[rand_idx];
    this.letters = rand_word.split('');
    word1.innerHTML = rand_word;
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        this.btns.push(btn);
        word2.appendChild(btn);
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
        this.btns[i].innerHTML = this.letters[i];
    }
};

game.checkAnswer = function () {
    if (this.letters.join('') === word1.innerText) {
        check.innerHTML = '일치합니다.'
    } else {
        check.innerHTML = '일치하지 않습니다.'
    }
};

game.swap = function () {
    game.letters.reverse();
    game.copyBtnText();
    game.checkAnswer();
};
game.shiftToRight = function () {
    const s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.checkAnswer();
};
game.shiftToLeft = function () {
    const s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.checkAnswer();
};

var swap = function () {
    game.swap();
    game.progress();
};

var shiftToRight = function () {
    game.shiftToRight();
    game.progress();
};

var shiftToLeft = function () {
    game.shiftToLeft();
    game.progress();
};

game.shuffle = function () {
    const toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        swap();
    }

    const rmax = Math.max(this.letters.length - 2, 1);
    const n = Math.floor(Math.random() * rmax) + 1;
    for (let i = 0; i < n; i++) {
        shiftToRight();
    }
};

game.init = function () {
    game.getRandomWord();
    game.addButtons();
    game.shuffle();
};
game.init();

var updateTime = function () {
    let running_time = (Date.now() - game.startTime) / 1000;
    time.innerHTML = running_time + "sec";
};
var x = setInterval(updateTime, 50);