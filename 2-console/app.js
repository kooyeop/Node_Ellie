console.log('logging...');
console.clear();

// log level
console.log('log');     // 개발
console.info('info');   // 정보
console.warn('warn');   // 정보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert (참이 아닌 겨우 출력)
console.assert(2 == 3, 'not same');
console.assert(2 == 2, 'same');

// print object
const  student = {name:'ellie', age:20, company:{name:'ac'}};
console.log(student);   // 오브젝트 일반 출력
console.table(student); // 오브젝트 테이블 출력
console.dir(student, {showHidden:true, colors:false, depth:0});     // 오브젝트 옵션을 주어 출력

// measuring time (같은 레이블에 대해서 시간을 측정)
console.time('for loop');
for(let i = 0; i < 10 ; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function');   // 카운트 초기화
a();
a();

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();    // 누가 호출했는가?
}
f1();