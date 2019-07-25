var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'node'
});
connection.connect((err) => {
  if (err) {
  } else {
    //본 쿼리는 아이디와 비번이 고정되어 있어서 재사용성이 떨어진다 => 아이디와 비번을 
    //sql문장에서 뜯어내고 외부에서 세팅될수 있게 조정하는게 이 코드의 목적
    let sql = ` SELECT * FROM users WHERE uid =? AND upw = '1';`
    connection.query(sql, ['guest', '1'], (err, rows) => {
      console.log(err, rows[0].name)
      connection.end();

    })
  }
});
