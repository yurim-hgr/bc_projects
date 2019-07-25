var express = require('express');
var router = express.Router();

/* GET home page. */
//요청이 들어오면 해석을 하는데,
//만약, get방식이고, 주소가/ 이면 아래 함수가 호출된다=>라우팅
router.get('/', function(req, res, next) {
  //views/index.ejs파일을 읽어서 전달한 데이터를 사용해서 완성된 html을 응답한다.=>랜더링한다.
  //랜더링의 대상 ets 파일은 무조건 views밑에서 찾는다.
  res.render('index', { title: 'Express' });
});

module.exports = router;
