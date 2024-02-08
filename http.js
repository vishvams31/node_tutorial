const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
res.end('this is our home page')
}
if(req.url==='/about'){
    res.end('this is our short history')
}
res.end(
    `<h1>Oops</h1>
    <p>we can't find the suitable page you are looking for</p>
    <a href="/">back home</a>`
)
})

server.listen(5000)