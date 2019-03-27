//Destructuring Array
let data = ['crong', 'honux', 'jk', 'jinny'];
let [ji, , jung]= data;
console.log(ji, jung);

// Destructuring Object
let obj = {
    name : 'cong',
    address : 'Korea',
    age : 10
};

// let {name, age} = obj;
// console.log(name, age);

let {name: myName, age: myAge} = obj;
console.log(myName, myAge);


//Destructuring 활용 JSON 파싱
var news = [
    {
        'title' : 'sbs',
        'imgurl' : 'http://static.naver.net/newsstand/',
        'newslist' : [
            "[가보니]",
            "리캡카 사라진다",
            "갤럭시 S10 출시",
            "블록체인"
        ]
    },
    {
        'title' : 'mbc',
        'imgurl' : 'http://static.naver.net/newsstand/mbc',
        'newslist' : [
            "[mbc]",
            "mbc: 리캡카 사라진다",
            "mbc: 갤럭시 S10 출시",
            "mbc: 블록체인"
        ]
    }
];

let [, {title, imgurl, newslist}] = news;
console.log(title, imgurl, newslist);