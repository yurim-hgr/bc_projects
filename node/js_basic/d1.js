//  nodejs에서 mysql을 access하여 sql을 수행하는 코드
// 로그인에서 아이디 비번 도착했으니까
// 데이터베이스에서 가져오기이
//$ npm i --save mysql
// --save : package.json에 기입한다.(버전까지포함), 설치해라
//1. 모듈 가져오기
var mysql      = require('mysql');

//2. 접속정보세팅
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'node'
});
 
//3. 연결: 연결행위 자체가 비동기라서 콜백함수를 등록하여 연결 결과가 나오면 호출되게 구성
// 이런 경우 콜백함수의 1번인자 통상적으로 err를 넣는다.
connection.connect((err)=>{
 
 //연결 종료
 if(err){
    console.log('접속오류', err)
 }else{
     connection.end();
     console.log('접속 종료')
 }
});
    // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //   if (error) throw error;
    //   console.log('The solution is: ', results[0].solution);
    // });

console.log(2);