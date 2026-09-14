// // Express
// // Iski help se hum apna backend/server bana sakte hain.
// import express from 'express'

// // CORS 
// // Isse hum decide kar sakte hain ki kaunsa frontend hamare backend se baat kar sakta hai.
// import cors from 'cors'

// // Cookie-parser 
// // Ye cookies ko read karne mein hamari help karega 
// import cookieParser from 'cookie-parser'


// // Ab hum apna Express app bana rahe hain.
// // Isi 'app' ke andar hum apna server configure karenge.
// const app = express()


// // CORS ko apne app mein use kar rahe hain.
// // Matlab frontend ko backend se safely connect karne ki permission de rahe hain.
// app.use(cors({

// //  origin:  "Request kis jagah / website se aa rahi hai."
//     origin: process.env.CORS_ORIGIN,

//     // Agar request ke saath cookies bhi bhejni hain,
// // toh credentials ko true karna zaroori hai.
//     credentials: true

// }));


// // Ab Express ko bata rahe hain ki agar request mein JSON data aaye,
// // toh us JSON data ko samajh lena aur humare liye parse kar dena 😄
// app.use(express.json({

//     // Request mein maximum 16KB tak ka JSON data allow karenge.
//     limit: "16kb"

// }))


// // Agar frontend se form ke through data aaye,
// // toh us data ko read karne ke liye ye middleware use hoga.
// app.use(express.urlencoded({

//     // Isse hum complex/nested form data bhi handle kar sakte hain.
//     extended: true,

//     // Form data bhi maximum 16KB tak hi allow karenge.
//     limit: "16kb"

// }));


// // 'public' folder ko static files ke liye use kar rahe hain.
// // Jaise images, CSS ya koi public file browser se access karni ho.
// app.use(express.static("public"))


// // Ab cookie-parser ko app mein laga rahe hain ❤️
// // Iski help se hum browser se aane wali cookies ko easily read kar sakenge.
// app.use(cookieParser())


// // Ab apne 'app' ko export kar rahe hain.
// // Taaki kisi doosri file mein is app ko import karke use kar sakein.
// export { app }
// // Code	Simple meaning
// // express	Server/application banane ke liye
// // cors	Frontend ↔ Backend communication allow karne ke liye
// // cookie-parser	Cookies read karne ke liye
// // express()	Express app create karta hai
// // app.use()	Middleware add karta hai
// // cors()	CORS rules set karta hai
// // origin	Kaunsa frontend allowed hai
// // credentials: true	Cookies/auth credentials allow
// // express.json()	JSON body read karta hai
// // limit: "16kb"	Request body size limit
// // express.urlencoded()	Form data read karta hai
// // extended: true	Nested form data support
// // express.static("public")	Public files serve karta hai
// // cookieParser()	Cookies ko parse karta hai
// // export { app }	app ko other files mein use karne deta hai


import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();


app.use(cors({
origin:process.env.CORS_ORIGIN,
credential:true
}))


app.use(express.json({
    limit:"16kb"
}))
;


app.use(express.urlencoded({
     extended: true,
limit:'16kb'
}))

app.use(express.static("public"))

app.use(cookieParser())

export { app }