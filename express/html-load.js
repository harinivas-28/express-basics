const http = require('http')
const {readFileSync}=require('fs')
const homePage = readFileSync('./public/dom-projects.html')
const homeStyles = readFileSync('./public/dom-projects.css')
const homeScript = readFileSync('./public/dom-projects.js')



const server = http.createServer((req,res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else if(url === '/dom-projects.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
    }
    else if(url === '/dom-projects.js'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeScript)
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Error 404</h1>')
        res.write('<h3>Page not Found</h3>')
        res.end()
    }
})
server.listen(5000)