// html elements
let word1 = document.getElementById('word1'); // target letters
const word2 = document.getElementById('word2'); // buttons
const check = document.getElementById('check'); // check answer
let progress = document.getElementById('progress'); // progress check
let time = document.getElementById('time'); // time check

// game objects
var game = {};
game.btns = []; // 버튼 담을 배열
game.maxPlay = 3;
game.current = 0;

game.startTime = Date.now();

game.checkAnswer = function () {
    return this.letters.join('') === this.target_word
};

game.progress = function () {
    if (this.checkAnswer()) {
        this.current++;
        this.removeButtons();
        this.init();
        this.shuffle();
        var str = "";
        for (let i = 0; i < this.current; i++) {
            str += "0";
        }
        progress.innerHTML = str;
    }

    if (this.current === this.maxPlay) {
        const sec = (Date.now() - this.startTime) / 1000;
        alert("Good job! Your Record: " + sec + " sec");
        clearInterval(x);
        this.current = 0;
        progress.innerHTML = '';
        time.innerHTML = '0';
    }

};

game.getRandomWord = function () {
    // words = ['HELLO', 'SEOUL', 'NEW YORK', 'SYDNEY', 'LONDON', 'TOKYO', 'SINGAPORE', 'CHICAGO', 'DANANG', 'HAWAI'];
    words = 'HELLO,SEOUL,NEWYORK,SYDNEY,LONDON,TOKYO,SINGAPORE,CHICAGO,DANANG,HAWAI'.split(',');
    rand_idx = Math.floor(Math.random() * words.length);
    this.target_word = words[rand_idx];
    word1.innerHTML = this.target_word;
    this.letters = this.target_word.split(''); // 글자 배열
};


game.addButtons = function () {
    for (let i = 0; i < this.target_word.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = this.target_word[i];
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

game.check_letters = function () {
    if (this.checkAnswer()) {
        check.innerHTML = '일치합니다.'
    } else {
        check.innerHTML = '일치하지 않습니다.'
    }
};

game.shuffle = function () {
    // 50% 확률로 뒤집기
    const toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        swap()
    }

    // 랜덤확률로 오른쪽으로 밀기
    const n = Math.floor(Math.random() * (game.target_word.length - 1));
    for (let i = 0; i < n; i++) {
        shiftToRight()
    }
};

game.copyBtnText = function () {
    for (let i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i]
    }
};

game.swap = function () {
    this.letters.reverse();
    this.copyBtnText();
    this.check_letters();
};

game.shiftToRight = function () {
    const s = this.letters.pop();
    this.letters.unshift(s);
    this.copyBtnText();
    this.check_letters();
};

game.shiftToLeft = function () {
    const s = this.letters.shift();
    this.letters.push(s);
    this.copyBtnText();
    this.check_letters();
};

// event handler for swqp button
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

game.init = function () {
    this.getRandomWord();
    this.addButtons();
    this.check_letters();
    this.shuffle();
};
game.init();

var updateTime = function () {
    var now = (Date.now() - game.startTime) / 1000;
    time.innerHTML = now + ' s';
};
var x = setInterval(updateTime, 50);
