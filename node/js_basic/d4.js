//로그인 처리하는 일련의 과정을 함수로 구성하여 함수를 호출함으로써 아이디와 비번을 전달
//결과를 돌려 받는 구조로 업그레이드 한다 => 서버 개발자는 해당 함수를 호출함으로써
//로그인의 결과를 얻을 수 있다.
var mysql = require('mysql');

function selectLogin (uid,upw,cb){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'node'
  });
  connection.connect((err) => {
    if (err) {
    } else {
      let sql = `SELECT * FROM users WHERE uid =? AND upw =?;`
      connection.query(sql, [uid, upw], (err, rows) => {
        cb(err, rows)
        connection.end();
      })
    }
  });
}
// 함수 내부가 비동기 상황이나, 내가 콜백함수를 하나 보낼테니까 결과가 연제라도 나오면 
// 그 콜백함수를 호출해줘라 단, 호출할때 결과를 같이 넣어서 호출해주면 굿잡
selectLogin('guest','2', (err, results)=>{
  if(results.length> 0)
  console.log('회원이다', results[0].name+'님 반가워용')
  else
  console.log('회원이 아니다', '아이디나 비번을 확인하세요')
  // console.log('결과를 받았다', results, err)
})