const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.dono = "5511910592328"
global.ownername ="Cofs"
global.nomedono ="~ᴄᴏғs 🇵🇹"
global.ownernumber = "5511910592328"
global.botname = "~ᴘᴇʟᴇ́ʙᴏᴛ🇧🇷"
global.thumbnail = fs.readFileSync("./configuracoes/cofs.png") //sesuaikan dengan nama foto
global.thumbnail1 = fs.readFileSync("./configuracoes/cofs.jpg") //sesuaikan dengan nama foto
global.thumbnail2 = fs.readFileSync("./configuracoes/haruka.jpeg") //sesuaikan dengan nama foto
global.thumbnail3 = fs.readFileSync("./configuracoes/cofs2.jpg") //sesuaikan dengan nama foto
global.thumbnail4 = fs.readFileSync("./configuracoes/images.jpeg") //sesuaikan dengan nama foto
global.hbo = "https://telegra.ph/file/ddc0b0f654e952a119099.jpg" 
global.amazon = "https://telegra.ph/file/dff9e603c9bf080b35212.jpg" 
global.perfil = "https://telegra.ph/file/1631e16c835d2e7622acc.jpg" 
global.perfil2 = "https://telegra.ph/file/b4e35423834e5d28af663.jpg"
global.downloadmenuu = "https://telegra.ph/file/e42ff6f93a12d0f3fb330.jpg" 
global.grupomenuu = "https://telegra.ph/file/0b528ddda11e0d96b18c9.jpg" 
global.stickermenuu = "https://telegra.ph/file/cdfb5bb7908cc15951cd9.jpg" 
global.logomenuu = "https://telegra.ph/file/1d5b714b599a820c01c6d.jpg" 
global.background = "https://telegra.ph/file/79204beffb3e8ac3ec4c8.jpg"
global.lolkey = 'RIFQIBOTZ' //apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "cofs.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})