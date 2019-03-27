function print() {
    /*
    filter, includes, from 을 사용해서 문자열 `e`가 포함 노드로 구성된 배열을 만들어 반환하기
     */
    let list = document.querySelectorAll('li');
    let words = [];
    let newArray = Array.from(list);
    for(let i=0; i < newArray.length; i++){
        let word = newArray[i].innerHTML;
        words.push(word);
    }
    words = words.filter(word => word.includes('e'));
    console.log(words);
}
print();
