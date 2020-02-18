let express = require('express')
let path = require('path')

const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.static('src'))


//Used to parse JSON bodies //BodyParser 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/location', (req, res) => {
    res.send('Geo location')
})

app.get('/mailsent', (req, res)=>{
    res.send('Sent Successfully')
})
app.post('/send-mail', (req, res) => {
    console.log(req.body)
    const transporte = nodemailer.createTransport({

        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'abhijitbhadra.a4u@gmail.com',
            pass: '7890003393'
        }
    })

    let mailOption = {
        from: 'abhijitbhadra.a4u@gmail.com',
        to: req.body.email,
        subject: req.body.sub,
        text: req.body.mesg
    }

    transporte.sendMail(mailOption, (err, info) => {
        if (err) {
            return console.log(err)
        }
        console.log('mesg sent')
    })
    res.redirect(301,  '/mailsent')
   //res.writeHead(301, { location: 'index.html' })
    res.end()
})
app.listen(PORT, () => {
    console.log('server is up on ' + PORT)
})