
import nodemailer from 'nodemailer'

let testAccount = await nodemailer.createTestAccount();


console.log(testAccount);
/*
export const mailTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true, 
    auth: {
      user: "onlyjeet3@gmail.com", 
      pass: "cbzoepvrreaqqpht",
    },
})
console.log(mailTransport);


export const sendEmail = async ()=>{
    let info = await mailTransport.sendMail({
        from:"onlyjeet3@gmail.com",
        to:"onlyjeet3@gmail.com",
        subject:"Hellow",
        text:"HEllo",
        html:'<h1>Hellow Html!</h1>'
    })
    
    
}

*/