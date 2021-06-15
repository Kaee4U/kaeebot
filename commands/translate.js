const translate = require('translate-google')

module.exports= {
    name : 'translate',
    execute(client, message, args){
        translate(args.join(" "), {to : 'en'}).then(res => {
            message.channel.send(res)
        }).catch(err => {
            message.channel('terjadi error')
            console.log(err)
        })
    }
}