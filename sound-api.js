const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => { //request, response
  res.send('Hello World!') 
})

app.get('/sound/:name', (req, res) => { 
    const { name } = req.params // value 값 한번에 넣어

    if(name == "dog"){
        res.json({'sound': '멍멍'})
    } else if(name == "cat"){
        res.json({'sound': '야옹'})
    } else if(name == "pig") {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})

app.get('/cat', (req, res) => { 
    res.json({'sound': '야옹'})
})


//get -> params, query
// id에 따라서 화면 다르게
app.get('/user/:id', (req, res) => {  
    // params
    // const q = req.params // q라는 변수에 요청 들어온 params 담아
    // console.log(q) // { id: 'seungmin98' }
    // console.log(q.id)
    // res.json({'userid': q.id})

    // query
    const q = req.query
    console.log(q);
    console.log(q.q);
    console.log(q.name);

    res.json({'userid': q.name})
  })

//post -> params, body (fetch 이용할때 post 방식 적용 가능)
app.use(express.json());
app.post('/user/:id', (req, res) => {
  const p = req.params; // id param 그대로 받는건 똑같아
  console.log(p);
  const b = req.body; // body 값 적용 (body 불러와서 찍어)
  console.log(b);

  res.send({'message' : 'Hello World!'});

})

app.listen(port, () => { //port listen... 뒤에()는 함수인데 기능적인건 없어
  console.log(`Example app listening on port ${port}`) 
})