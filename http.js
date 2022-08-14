const http=require('http')

const server=http.createServer((req,res)=>{
    res.write("it works??")
    res.end()
})

server.listen(5000)