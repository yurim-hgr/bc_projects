//반복문, 제어문
//for : 지정된 횟수를 반복할때 => 배열
//while : 언제 끝날지 모를때, 0~무한대, 1~무한대(do~while)
//for -> 구구단 3~5단 출력
// 3x1 = 3,...5x9=45
//for종류 : 인덱스초기화:비교:증감, 데이터 덩어리(연속데이터, 배열)에서 하나씩 꺼내는 (for~each)

for (let i = 3; i <= 5; i++) {//3~5
    for (let j = 1; j <= 9; j++) {//1~9
        //js의 문자열 포맷팅 방식이 모던스크립트에서 추가됨(표준방식: `  `)
        console.log(`${i} x ${j} = ${i * j}`)
    }
}
//===========
//for~each 방식=> 배열에서 데이터를 뽑아서 뭔가 작업할때~
//Array(배열) : []=> 순서가 존재한다, 순서(인덱스): 0,1,2,...=> 데이터를 대변하는 키
//Object(객체 : class기반 생성): {}
let data = [`a`, `b`, `c`]
//배열 data 에서 데이터를 하나씩 꺼내서 출력하시오 -> for in
for (idx in data) {
    console.log(idx, data[idx])
}
//위의 방식은 진정한 for ~ each가아니다. 데이터가 순순하게 나와야 한다. -> for ~ of 등장
for (item of data) {
    console.log(item)
}
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//위의 데이터에서 짝수만 출력하시오
//모든값출력
for (item of data) {
    if (item % 2 == 0) {
        console.log(item)
    }
}
//--
//만약, 추출한 데이터가 2거나 4가 나오면 출력하지않고 다시 조건문으로 이동한다. 
for (item of data) {
    if (item == 2 || item == 4) {
        continue;//다시 조건문으로 이동한다. 
    } if (item % 2 == 0) {
        console.log(item)
    }
}
//-----------------
//data에서 추출한 값이 7이면 반복문을 빠져나가라
for (item of data) {
    if (item == 7) {
        break;
    }
    if (item == 2 || item == 4) {
        continue;//다시 조건문으로 이동한다. 
    }
    if (item % 2 == 0) {
        console.log(item)
    }
}
//------------------------
let a = 1
while (a < 10) {
    console.log(a++)
}