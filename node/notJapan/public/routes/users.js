var express = require('express');
var router = express.Router();
//디렉토리만 지정하면 무조건 그밑에 index.js를 찾아서 가져온다
let db = require('./db/')
//url은 동일하나, method 방식으로 분기하여 처리하는 방식 : restful
/* GET users listing. */
// ~/users
router.get('/', function (req, res, next) {
  res.send('dtmdthdthmdh');
});

router.get('/login', (req, res, next) => {
  // post방식으로 데이터가 전달되었다 -> 어떻게 추출하는가?
  res.render('login', { title: '로그인' })
});

// POST: ~/users/login
router.post('/login', (req, res, next) => {
  // post방식으로 데이터가 전달되었다 -> 어떻게 추출하는가?
  db.selectLogin(req.body.uid, req.body.upw, (err,results) => {
    if (results.length > 0)
      res.send('[succes]회원이다'+ results[0].name + '님 반가워용')
    else
      res.send('[fail]회원이 아니다' + '아이디나 비번을 확인하세요')
  })

});

module.exports = router;
