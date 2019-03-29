
function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function () {
    console.log(this.name + '님 안녕하세요')
};

const h = new Health('crong');
h.showHealth();


// ES6 Class - 위에 것과 완전히 똑같다. 가독성의 차이일 뿐.
// 협업을 위해서 class 형식으로 적는걸 권
class Health2 {
    constructor(name, lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }
    showHealth() {
        console.log('안녕하세요, ' + this.name)
    }
}

const myHealth = new Health2('crong');
myHealth.showHealth();



// Object assign method
const healthObj = {
    showHealth : function () {
        console.log('오늘 운동 시간 : ' + this.healthTime)
    }
};

// Object.create 로 객체로 만든 뒤에 클래스 속성 일일이 입력
const myHealth2 = Object.create(healthObj);
myHealth2.healthTime = '11:20';
myHealth2.name = 'crong';

console.log(myHealth2);
myHealth2.showHealth();

// Object assign method 로 두번째 파라미터에 클래스 속성 할당
const myHealth3 = Object.assign(Object.create(healthObj), {
    name : 'sony',
    healthTime : '12:30'
});

console.log('my health is : ' + myHealth3);
myHealth3.showHealth();
console.log(myHealth3.name);

// Create immutable object using assign method
const previousObj = {
    name : 'crong',
    lastTime : '11:20'
};

// 이전 객체에 값이 있으면 그대로 쓰고 새 객체에 추가하거나 수정한 값이 있으면 업데이트한다.
const myHealth4 = Object.assign({}, previousObj,{
    'name' : 'honux',
    'age' : 40
});
console.log(myHealth4);


// setProtoTypeOf
const healthObj2 = {
    showHealth : function () {
        console.log('오늘의 운동 시간 : ' + this.healthTime)
    },
    setHealth : function (newTime) {
        this.healthTime = newTime;
    }
};

const myHealth5 = {
    name : 'SON',
    lastTime : '10:20'
};

// myHealth5 object 에 healthObj2 를 프로토타입으로 추가
Object.setPrototypeOf(myHealth5, healthObj2);

console.log('My health is ', myHealth5);


// Object setPrototypeOf 로 객체 간 prototype chain 생성하기
// parent
healthObj2;

// child obj
const healthChildObj = {
    getAge : function () {
        return this.age
    }
}
Object.setPrototypeOf(healthChildObj, healthObj2);

const childObj = Object.setPrototypeOf({
    age : 22
}, healthChildObj);

console.log('childObj is '+ childObj);
childObj.setHealth('10:10');
childObj.showHealth();