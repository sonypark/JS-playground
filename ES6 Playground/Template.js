

const data = [
    {
        name : 'coffe bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false
    }
];

// json 으로 응답을 받고
// javascript object 로 변환한 후에
// 데이터처리 조작 후 DOM 에 추가
// (데이터 + HTML 문자열의 결합이 필요하기 때문에)

// tagged template literals
function fn(tags, name, items) {
    if(typeof items === 'undefined'){
        items = '주문 가능한 상품이 없습니다.'
    }
    return tags[0] + name + tags[1] + items + tags[2]
}

data.forEach(value => {
    let template = fn`<div>welcome ${value.name} !!</div><h2>주문가능항목</h2><div>${value.items}</div>`;
    console.log(template);
});


