const word1 = document.getElementById('word1'); // target_word
const word2 = document.getElementById('word2'); // buttons
const check = document.getElementById('check'); // check if word1 == word2
const progress = document.getElementById('progress'); // check progress
const time = document.getElementById('time'); // check if word1 == word2


game = {};
game.btns = [];
game.letters = [];
game.maxPlay = 3;
game.current = 0;
game.startTime = Date.now();

game.progress = function () {
    if (this.isMatchedWithAnswer()) {
        this.current++;
        let str = "";
        for (let i = 0; i < this.current; i++) {
            str += "O"
        }
        progress.innerHTML = str;

        this.removeButtons();
        this.init();
        this.shuffle();

    }

    if (this.isFinished()) {
        this.current = 0; // 정답 갯수 초기화
        progress.innerHTML = "";
        clearInterval(x);
        const completedTime = (Date.now() - this.startTime) / 1000; // second
        alert("Good job! Your Record:" + completedTime + " sec")
    }


};

game.isMatchedWithAnswer = function () {
    return word1.innerText === this.letters.join('');
};

game.isFinished = function () {
    return this.current === this.maxPlay
};

game.getRandomWord = function () {
    words = 'HELLO,SEOUL,NEWYORK,SYDNEY,LONDON,TOKYO,SINGAPORE,CHICAGO,DANANG,HAWAI'.split(',');
    const rand_idx = Math.floor(Math.random() * words.length);
    word1.innerHTML = words[rand_idx];
    this.letters = words[rand_idx].split('');
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        this.btns[i] = btn;
        word2.appendChild(btn);
    }
};

game.removeButtons = function () {
    for (let i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i])
    }
    this.btns = []; // 버튼 배열 초기화 해줘야 한다!

};

game.checkAnswer = function () {
    if (this.isMatchedWithAnswer()) {
        check.innerHTML = '일치합니다.'
    } else {
        check.innerHTML = '일치하지 않습니다.'
    }
};

game.init = function () {
    this.getRandomWord();
    this.addButtons();
    this.checkAnswer();
};
game.init();

game.copyBtnText = function () {
    for (let i = 0; i < game.btns.length; i++) {
        this.btns[i].innerHTML = this.letters[i]
    }
};

game.swap = function () {
    this.letters.reverse();
    this.copyBtnText();
    this.checkAnswer();
};

game.shiftToRight = function () {
    const s = game.letters.pop();
    this.letters.unshift(s);
    this.copyBtnText();
    this.checkAnswer();
};

game.shiftToLeft = function () {
    const s = game.letters.shift();
    this.letters.push(s);
    this.copyBtnText();
    this.checkAnswer();
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

    const n = Math.floor(Math.random() * (this.btns.length - 1));
    for (let i = 0; i < n; i++) {
        shiftToRight();
    }
};
game.shuffle();

var updateTime = function () {
    let t_passed = (Date.now() - game.startTime) / 1000;
    time.innerHTML = t_passed;
};

var x = setInterval(updateTime, 50);