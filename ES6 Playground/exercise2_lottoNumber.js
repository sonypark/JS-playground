const SETTING = {
    name: 'LUCKY LOTTO!',
    count: 6,
    maxNumber: 45
};

// Destructing SETTING
let {count, maxNumber} = SETTING;
console.log(count, maxNumber);

function getRandomNumber(maxNumber) {
    // 랜덤한 유일한 숫자값 추출
    let lottoSet = new Set();
    while (lottoSet.size < 6){
        const rand_num = Math.floor(Math.random() * maxNumber + 1);
        lottoSet.add(rand_num);
    }
    return lottoSet
}
console.log(getRandomNumber(maxNumber));