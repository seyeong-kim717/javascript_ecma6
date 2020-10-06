/* 상수 만들기 (값이 할당되면 변경 불가) */
let pi=3.14;
const PI=3.14;

pi=3.14159;
console.log('pi:'+pi);

//PI=3.14159; //값 변경 불가
console.log('PI:'+PI);

const nums=[10,20,30,40, 50];
//nums=[] 수정불가
//데이터 추가
nums.push(60);
//데이터 삭제
nums.splice(0,1);

console.log(nums);

//object 에 저장된 내용 수정 가능
const mem={num:1, name:"김구라"};
//mem={} 수정불가

mem.num=2;
mem.name="이정호";
console.log(mem);
