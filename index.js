/*Salve Rapaziada
Fiz essa bot para ajuda-los
Feito por: Cofs
*/

// WhatsApp api
require('./configuracoes/config.js')
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
	
//module exports
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const CFonts  = require('cfonts')
const { uploadImages } = require('./lib/uploadimage')
const axios = require("axios")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")  
const crypto = require('crypto')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg') 
const figlet = require('figlet')
const fs = require('fs')
const gis = require('g-i-s')
const hx = require('hxz-api')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const request = require('request')
const speed = require('performance-now')
const util = require('util')
const yts = require( 'yt-search')
const ytdl = require("ytdl-core")
const zee = require('api-alphabot')

//library
const { grupomenu } = require('./lib/grupomenu')
const { downloadmenu } = require('./lib/downloadmenu')
const { logotipomenu } = require('./lib/logotipomenu')
const { stickermenu } = require('./lib/stickermenu')
const { modapk } = require('./lib/modapk')
const { hbomax } = require('./lib/hbomax')
const { fetchJson, kyun, fetchText } = require('./lib/fetcher')
const { yta, ytv} = require('./lib/y2mate')
const simple = require('./lib/simple')

//json
const corinthians = JSON.parse(fs.readFileSync('./basededados/clubess/corinthians.json'))
const saopaulo = JSON.parse(fs.readFileSync('./basededados/clubess/saopaulo.json'))
const palmeiras = JSON.parse(fs.readFileSync('./basededados/clubess/palmeiras.json'))
const flamengo = JSON.parse(fs.readFileSync('./basededados/clubess/flamengo.json'))
const cruzeiro = JSON.parse(fs.readFileSync('./basededados/clubess/cruzeiro.json'))
const atletico = JSON.parse(fs.readFileSync('./basededados/clubess/atletico.json'))
const fluminense = JSON.parse(fs.readFileSync('./basededados/clubess/fluminense.json'))
const botafogo = JSON.parse(fs.readFileSync('./basededados/clubess/botafogo.json'))
const vasco = JSON.parse(fs.readFileSync('./basededados/clubess/vasco.json'))
const santos = JSON.parse(fs.readFileSync('./basededados/clubess/santos.json'))
const internacional = JSON.parse(fs.readFileSync('./basededados/clubess/internacional.json'))
const gremio = JSON.parse(fs.readFileSync('./basededados/clubess/gremio.json'))
const _level = JSON.parse(fs.readFileSync('./basededados/level/level.json'))
const welkom = JSON.parse(fs.readFileSync('./basededados/grupo/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./basededados/grupo/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./basededados/usuario/registrado.json'))
const _limit = JSON.parse(fs.readFileSync('./basededados/usuario/limit.json'))
const premium = JSON.parse(fs.readFileSync('./basededados/usuario/premium.json'))
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./basededados/usuario/register.js')
const tebakgambar = JSON.parse(fs.readFileSync('./basededados/game/tebakgambar.json'))

offline = false

/*
# language
# available now [ind]
*/
const  { ind } = require(`./comandos/help`)
lang = ind

//times
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

const getLevelingXp = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}
const getLevelingLevel = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}   
const getLevelingId = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].jid
}
}

async function starts() {
	const cofs = new WAConnection()
	cofs.logger.level = 'warn'
	console.log(banner.string)
	cofs.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Use o código QR acima'))
	})

	fs.existsSync('./cofs.json') && cofs.loadAuthInfo('./cofs.json')
	cofs.on('connecting', () => {
		start('2', 'Conectando...')
	})
	cofs.on('open', () => {
		success('2', 'Conectado')
	})
	await cofs.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./cofs.json', JSON.stringify(cofs.base64EncodedAuthInfo(), null, '\t'))

cofs.on('group-participants-update', async(anu) => {
	mdata = await cofs.groupMetadata(anu.jid)
        try {
			if (anu.action == 'add') {
				num = anu.participants[0]
				mem = anu.participants[0]
				console.log(anu)
            try {
               var pp_user = await cofs.getProfilePicture(mem)
            } catch (e) {
               var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            let pp_userz = await getBuffer(pp_user)
            mdata = await cofs.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                let v = cofs.contacts[num] || { notify: num.replace(/@.+/, "") };
                anu_user = v.vname || v.notify || num.split("@")[0];
                           teks = `「🏆」 Olá @${num.split('@')[0]} \nBem vindo, para utilizar o bot use o comando .menu`
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeURI(anu_user)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=${background}`)
cofs.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
            } else if (anu.action == 'remove') {
            	num = anu.participants[0]
				mem = anu.participants[0]
				console.log(anu)
            try {
                var pp_user = await cofs.getProfilePicture(mem)
            } catch (e) {
               var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            let pp_userz = await getBuffer(pp_user)
				teks = `「🇧🇷」 Tchau @${num.split('@')[0]} 👋\ntomara q nao se arrependa😔`
				mdata = await cofs.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                let v = cofs.contacts[num] || { notify: num.replace(/@.+/, "") };
                anu_user = v.vname || v.notify || num.split("@")[0];
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeURI(anu_user)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=${background}`)
				cofs.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

cofs.on('chat-update', async (mek) => {
	try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
		const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
		const type = Object.keys(mek.message)[0]        
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const comandos = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = cofs.user.jid
		const botNumberss = cofs.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? cofs.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const ownerNumber = [`${ownernumber}@s.whatsapp.net`] 
		const isOwner = mek.key.fromMe ? cofs.user.jid : ownerNumber.includes(sender)
		const totalchat = await cofs.chats.all()
		const groupMetadata = isGroup ? await cofs.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isCorinthians = corinthians.includes(sender)
        const isSaoPaulo = saopaulo.includes(sender)
        const isPalmeiras = palmeiras.includes(sender)
        const isFlamengo = flamengo.includes(sender)
        const isCruzeiro = cruzeiro.includes(sender)
        const isAtletico = atletico.includes(sender)
        const isFluminense = fluminense.includes(sender)
        const isBotafogo = botafogo.includes(sender)
        const isVasco = vasco.includes(sender)
        const isSantos = santos.includes(sender)
        const isInternacional = internacional.includes(sender)
        const isGremio = gremio.includes(sender)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? cofs.user.jid : cofs.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? cofs.user.name : conts.notify || conts.vname || conts.name || '-'
        
        const levelRole = getLevelingLevel(sender)
var role = 'Bronze I🥉'
if (levelRole <= 3) {
role = 'Bronze I 🥉'
} else if (levelRole <= 5)  {
role = 'Bronze II 🥉'
} else if (levelRole <= 10) {
role = 'Bronze III 🥉'
} else if (levelRole <= 15) {
role = 'Bronze IV 🥉'
} else if (levelRole <= 20) {
role = 'Bronze V 🥉'
} else if (levelRole <= 25) {
role = 'Prata I 🥈'
} else if (levelRole <= 30) {
role = 'Prata II 🥈'
} else if (levelRole <= 35) {
role = 'Prata III 🥈'
} else if (levelRole <= 40) {
role = 'Prata IV 🥈'
} else if (levelRole <= 45) {
role = 'Prata V 🥈'
} else if (levelRole <= 50) {
role = 'Ouro I 🥇'
} else if (levelRole <= 55) {
role = 'Ouro II 🥇'
} else if (levelRole <= 60) {
role = 'Ouro III 🥇'
} else if (levelRole <= 65) {
role = 'Ouro IV 🥇'
} else if (levelRole <= 70) {
role = 'Ouro V 🥇'
} else if (levelRole <= 75) {
role = 'Campeão I 🏆'
} else if (levelRole <= 80) {
role = 'Campeão II 🏆'
} else if (levelRole <= 85) {
role = 'Campeão III 🏆'
} else if (levelRole <= 90) {
role = 'Campeão IV 🏆'
} else if (levelRole <= 95) {
role = 'Campeão V 🏆'
} else if (levelRole <= 100) {
role = 'Diamante I 💎'
} else if (levelRole <= 110) {
role = 'Diamante II 💎'
} else if (levelRole <= 120) {
role = 'Diamante III 💎'    
} else if (levelRole <= 130) {
role = 'Diamante IV 💎'
} else if (levelRole <= 140) {
role = 'Diamante V 💎'
} else if (levelRole <= 150) {
role = 'Mestre I 🔥' 
} else if (levelRole <= 170) {
role = 'Mestre II 🔥' 
} else if (levelRole <= 180) {
role = 'Mestre III 🔥'
} else if (levelRole <= 190) {
role = 'Mestre IV 🔥'
} else if (levelRole <= 200) {
role = 'Mestre V 🔥' 
} else if (levelRole <= 250) {
role = 'Mítico I 🔮'
} else if (levelRole <= 300) {
role = 'Mítico II 🔮'
} else if (levelRole <= 350) {
role = 'Mítico III 🔮'
} else if (levelRole <= 400) {
role = 'Mítico IV 🔮' 
} else if (levelRole <= 450) {
role = 'Mítico V 🔮'   
} else if (levelRole <= 500) {
role = 'Lenda I ⚡'
} else if (levelRole <= 550) {
role = 'Lenda II ⚡'
} else if (levelRole <= 600) {
role = 'Lenda III ⚡'
} else if (levelRole <= 650) {
role = 'Lenda IV ⚡'
} else if (levelRole <= 700) {
role = 'Lenda V ⚡'
} else if (levelRole <= 750) {
role = 'Lendário I 🎑'
} else if (levelRole <= 800) {
role = 'Lendário II 🎑'
} else if (levelRole <= 850) {
role = 'Lendário III 🎑'
} else if (levelRole <= 900) {
role = 'Lendário IV 🎑'
} else if (levelRole <= 910) {
role = 'Lendário V 🎑'
} else if (levelRole <= 920) {
role = 'EL DA CORO I 🏅'
} else if (levelRole <= 930) {
role = 'EL DA CORO II 🏅'
} else if (levelRole <= 940) {
role = 'EL DA CORO III 🏅'
} else if (levelRole <= 950) {
role = 'EL DA CORO IV 🏅'
} else if (levelRole <= 10000) {
role = 'EL DA CORO V 🏅'
}
        var tipo = 'COMUM'
if (dono) {
tipo = 'MEMBRO'
}
if (isGroupAdmins) {
	tipo = 'ADMIN'
	}
var clubess = 'Não torce pra nenhum time'
if (isCorinthians) {
clubess = '🏴🏳️ Corinthians 🏴🏳️'
} 
if (isSaoPaulo) {
clubess = '🇾🇪 São Paulo 🇾🇪'
}   
if (isPalmeiras) {
clubess = '🇮🇹 Palmeiras 🇮🇹'
}
if (isFlamengo) {
clubess = '🇦🇴 Flamengo 🇦🇴'
}   
if (isCruzeiro) {
clubess = '🇫🇲 Cruzeiro 🇫🇲'
}
if (isAtletico) {
clubess = '🏴🏳️ Atlético Mineiro 🏴🏳️'
} 
if (isFluminense) {
clubess = '🇭🇺 Fluminense 🇭🇺'
}   
if (isBotafogo) {
clubess = '🏁 Botafogo 🏁'
}
if (isVasco) {
clubess = '◤✠◢ Vasco ◤✠◢'
}   
if (isSantos) {
clubess = '🏳️🏴 Santos 🏳️🏴'
}
if (isInternacional) {
clubess = '🇦🇹 Internacional 🇦🇹'
}   
if (isGremio) {
clubess = '🇪🇪 Grêmio 🇪🇪'
}
        
		const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Domingo"; break;
                case 1: hari = "Segunda"; break;
                case 2: hari = "Terça"; break;
                case 3: hari = "Quarta"; break;
                case 4: hari = "Quinta"; break;
                case 5: hari = "Sexta"; break;
                case 6: hari = "Sábado"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Janeiro"; break;
                case 1: bulan1 = "Fevereiro"; break;
                case 2: bulan1 = "Março"; break;
                case 3: bulan1 = "Abril"; break;
                case 4: bulan1 = "Maio"; break;
                case 5: bulan1 = "Junho"; break;
                case 6: bulan1 = "Julho"; break;
                case 7: bulan1 = "Agosto"; break;
                case 8: bulan1 = "Setembro"; break;
                case 9: bulan1 = "Outubro"; break;
                case 10: bulan1 = "Novembro"; break;
                case 11: bulan1 = "Dezembro"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "𝙃𝙤𝙧𝙖́𝙧𝙞𝙤 : " + jam + ":" + menit + ":" + detik + " ⏰";     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
        
        //apaya
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const  timestampi = speed();
		const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
        
        //fake reply
			let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} 🏟️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
      	  let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumbnail}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5511910592328-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
            let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "*PeléBot🇧🇷💛*", 'jpegThumbnail': thumbnail}}}
			let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5511910592328-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `© ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
			let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbnail, thumbnail: thumbnail,sendEphemeral: true}}}
		

		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            cofs.sendMessage(from, teks, text, {quoted:mek})
        }
        
        const sendMess = (hehe, teks) => {
            cofs.sendMessage(hehe, teks, text)
        }
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? cofs.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : cofs.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sleep = async (ms) => {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
			
        function bytesToSize(bytes) {
				return new Promise((resolve, reject) => {
					const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
					if (bytes === 0) return 'n/a';
					const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
					if (i === 0) resolve(`${bytes} ${sizes[i]}`);
					resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
					});
				};
			
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return cofs.sendMessage(from,`Limit kamu sudah habis`, text,{ quoted: mek})
						cofs.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						found = true
					}
				}
					if (found === false) {
						let obj = { id: sender, limit: 1 }
						_limit.push(obj)
						fs.writeFileSync('./basededados/usuario/limit.json', JSON.stringify(_limit))
						cofs.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : mek})
						}
					}
			const isLimit = (sender) =>{ 
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal ) {
							position = true
							cofs.sendMessage(from, lang.limitend(pushname), text, {quoted: mek})
							return true
						} else {
							_limit
							position = true
						return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./basededados/usuario/limit.json',JSON.stringify(_limit))
					return false
					}
				}
				
				const limitAdd = (sender) => {
					if (isOwner && isPremium) {return false;}
					let position = false
					Object.keys(_limit).forEach((i) => {
						if (_limit[i].id == sender) {
							position = i
							}
						})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./basededados/usuario/limit.json', JSON.stringify(_limit))
					}
				}
				

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        cofs.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
					}
				const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    cofs.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return cofs.sendMessage(from, await getBuffer(url), video ,{caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' ,quoted: mek})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return cofs.sendMessage(from, await getBuffer(url), document, {mimetype: 'application/pdf', caption: caption, mentions: men ? men : [], quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return cofs.sendMessage(from, await getBuffer(url), image ,{ caption: caption, mentions: men ? men : [], quoted: mek})
            }
            if(mime.split("/")[0] === "video"){
                return cofs.sendMessage(from, await getBuffer(url), video, {caption: caption, mentions: men ? men : [], mimetype: 'video/mp4', quoted: mek})
            }
            if(mime.split("/")[0] === "audio"){
                return cofs.sendMessage(from, await getBuffer(url), audio, {caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg', quoted: mek })
            }
        }
				
				// send message button
				const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						cofs.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await cofs.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						cofs.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await cofs.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						cofs.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
						
						const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi comando nya ga keliatan
let po = cofs.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLIQUE AQUI","listType": "SINGLE_SELECT","sections": list}}, {})
  return cofs.relayWAMessage(po, {waitForAck: true})
 }     
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await cofs.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					cofs.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				
				//sticker
				const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
cofs.sendMessage(hehe, ano, sticker, { quoted: mek})
}
				
				// antilink
                if (manti.includes("://chat.whatsapp.com/")){
		        if (!(isGroup || isAntiLink || isGroupAdmins)) return
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        await cofs.sendMessage(from, `Desculpe, estou te banindo. É proibido enviar links nesse Grupo`, text , {quoted: mek})
		        cofs.groupRemove(from, [kic]).catch((e)=>{reply(`Bot Harus Jadi Admin`)})
		        }

			//game 
			if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat 😘 Jawaban kamu benar!", `• ${ownername}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./basededados/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            
			colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isCofs = checkRegisteredUser(sender)
			const isPremium = premium.includes(sender) || isOwner
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			
		//console termux
		if(!(isCmd)){
			console.log(('|\x1b[1;33m MSG \x1b[1;33m|'), time, chalk.yellow(budy), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		if(!(isCmd || mek.key.fromMe)){
			console.log(('|\x1b[1;32m CMD \x1b[1;37m|'), time, chalk.green(comandos), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		
		if (!mek.key.fromMe && global.self === true) return
//colong aja bang, ingat jgn asal colong ntr sc lu error
switch (comandos) {
				case 'menu':
case 'help':
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
 listMsg = {
 buttonText: 'ListBot',
 description: `┌───── •✧✧• ─────┐
         ~𝙋𝙚𝙡𝙚́𝘽𝙤𝙩-𝐕3.𝟎 
└───── •✧✧• ─────┘

🔥Criador: ${nomedono}
🔥Ping: ${latensii.toFixed(4)} Seg
🔥Status: ${offline ? 'OFFLINE' : 'ONLINE'}

*🧔 Info User 🧔*

🔥Clube: ${clubess}
🔥Nick: ${pushname}
🔥Número: ${sender.split('@')[0]}
🔥Tipo: ${tipo}
🔥Patente ${role}`,
 sections: [
                     {
                      "title": `Youtube : COFS BOTZ`,
 rows: [
                          {
                              "title": "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 🔎",
                              "rowId": ".downloadmenu"
                           },
                           {
                              "title": "𝙇𝙤𝙜𝙤 ㊙️",
                              "rowId": ".logotipomenu"
                           },
                           {
                              "title": "𝙎𝙩𝙞𝙘𝙠𝙚𝙧 🎩",
                              "rowId": ".stickermenu"
                           },
                           {
                              "title": "𝙂𝙧𝙪𝙥𝙤 🚀",
                              "rowId": ".grupomenu"
                           }
                        ]
                     }],
 listType: 1
}
cofs.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgif})
break
case 'corinthians':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🏴🏳️ Corinthians 🏴🏳️* 」\n`
no = 0
for (let cor of corinthians) {
no += 1
teks += `│「${no.toString()}」 @${cor.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${corinthians.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": corinthians}})
await limitAdd(sender)
break
case 'saopaulo':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🇾🇪 São Paulo 🇾🇪* 」\n`
no = 0
for (let sao of saopaulo) {
no += 1
teks += `│「${no.toString()}」 @${sao.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${saopaulo.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": saopaulo}})
await limitAdd(sender)
break
case 'palmeiras':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🇮🇹 Palmeiras 🇮🇹* 」\n`
no = 0
for (let pal of palmeiras) {
no += 1
teks += `│「${no.toString()}」 @${pal.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${palmeiras.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": palmeiras}})
await limitAdd(sender)
break
case 'flamengo':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🇦🇴 Flamengo 🇦🇴* 」\n`
no = 0
for (let fla of flamengo) {
no += 1
teks += `│「${no.toString()}」 @${fla.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${flamengo.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": flamengo}})
await limitAdd(sender)
break
case 'cruzeiro':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🇫🇲 Cruzeiro 🇫🇲* 」\n`
no = 0
for (let cru of cruzeiro) {
no += 1
teks += `│「${no.toString()}」 @${cru.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${cruzeiro.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": cruzeiro}})
await limitAdd(sender)
break
case 'atletico':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🏴🏳️ Atlético 🏴🏳️* 」\n`
no = 0
for (let atl of atletico) {
no += 1
teks += `│「${no.toString()}」 @${atl.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${atletico.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": atletico}})
await limitAdd(sender)
break
case 'fluminense':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🇭🇺 Fluminense 🇭🇺* 」\n`
no = 0
for (let flu of fluminense) {
no += 1
teks += `│「${no.toString()}」 @${flu.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${fluminense.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": fluminense}})
await limitAdd(sender)
break
case 'botafogo':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🏁 Botafogo 🏁* 」\n`
no = 0
for (let bot of botafogo) {
no += 1
teks += `│「${no.toString()}」 @${bot.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${botafogo.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": botafogo}})
await limitAdd(sender)
break
case 'vasco':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *◤✠◢  Vasco ◤✠◢ * 」\n`
no = 0
for (let vas of vasco) {
no += 1
teks += `│「${no.toString()}」 @${vas.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${vasco.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": vasco}})
await limitAdd(sender)
break
case 'santos':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🏳️🏴  Santos 🏳️🏴 * 」\n`
no = 0
for (let san of santos) {
no += 1
teks += `│「${no.toString()}」 @${san.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${santos.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": santos}})
await limitAdd(sender)
break
case 'internacional':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🇦🇹 Internacional 🇦🇹* 」\n`
no = 0
for (let int of internacional) {
no += 1
teks += `│「${no.toString()}」 @${int.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${internacional.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": internacional}})
await limitAdd(sender)
break
case 'gremio':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
teks = `╭─「 *🇪🇪 Grêmio 🇪🇪* 」\n`
no = 0
for (let gre of gremio) {
no += 1
teks += `│「${no.toString()}」 @${gre.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${gremio.length}\n╰──────「 *TORCEDORES* 」`
cofs.sendMessage(from, teks.trim(), extendedText, {quoted: fgif, contextInfo: {"mentionedJid": gremio}})
await limitAdd(sender)
break
case 'rgcorinthians':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit6 = 0 //QUANTIDADE DA TAXA
const totaluz = koinPerlimit6 * payout2
corinthians.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/corinthians.json', JSON.stringify(corinthians))
await reply(`TIME CORINTHIANS\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit6} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgsaopaulo':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit7 = 0 //QUANTIDADE DA TAXA
const totaluz1 = koinPerlimit7 * payout2
saopaulo.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/saopaulo.json', JSON.stringify(saopaulo))
await reply(`TIME SÃO PAULO\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit7} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgpalmeiras':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit8 = 0 //QUANTIDADE DA TAXA
const totaluz2 = koinPerlimit8 * payout2
palmeiras.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/palmeiras.json', JSON.stringify(palmeiras))
await reply(`TIME PALMEIRAS\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit8} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgflamengo':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit9 = 0 //QUANTIDADE DA TAXA
const totaluz3 = koinPerlimit9 * payout2
flamengo.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/flamengo.json', JSON.stringify(flamengo))
await reply(`TIME FLAMENGO\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit9} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgcruzeiro':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit10 = 0 //QUANTIDADE DA TAXA
const totaluz4 = koinPerlimit10 * payout2
cruzeiro.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/cruzeiro.json', JSON.stringify(cruzeiro))
await reply(`TIME CRUZEIRO\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit10} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgatletico':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit11 = 0 //QUANTIDADE DA TAXA
const totaluz5 = koinPerlimit11 * payout2
atletico.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/atletico.json', JSON.stringify(atletico))
await reply(`TIME ATLETICO\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit11} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgfluminense':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit12 = 0 //QUANTIDADE DA TAXA
const totaluz6 = koinPerlimit12 * payout2
fluminense.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/fluminense.json', JSON.stringify(fluminense))
await reply(`TIME FLUMINENSE\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit12} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgbotafogo':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit13 = 0 //QUANTIDADE DA TAXA
const totaluz7 = koinPerlimit13 * payout2
botafogo.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/botafogo.json', JSON.stringify(botafogo))
await reply(`TIME BOTAFOGO\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit13} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgvasco':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit14 = 0 //QUANTIDADE DA TAXA
const totaluz8 = koinPerlimit14 * payout2
vasco.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/vasco.json', JSON.stringify(vasco))
await reply(`TIME VASCO\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit14} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rgsantos':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit15 = 0 //QUANTIDADE DA TAXA
const totaluz9 = koinPerlimit15 * payout2
santos.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/santos.json', JSON.stringify(santos))
await reply(`TIME SANTOS\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit15} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rginternacional':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit16 = 0 //QUANTIDADE DA TAXA
const totaluz10 = koinPerlimit16 * payout2
internacional.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/internacional.json', JSON.stringify(internacional))
await reply(`TIME INTERNACIONAL\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit16} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
case 'rggremio':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
cofs.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit17 = 0 //QUANTIDADE DA TAXA
const totaluz11 = koinPerlimit17 * payout2
gremio.push(`${sender.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./basededados/clubess/gremio.json', JSON.stringify(gremio))
await reply(`TIME GREMIO\n\n*RECRUTADOR* : ~ᴄᴏғs 🇵🇹 ボ\n*TORCEDOR RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit17} \n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
break
      case 'stickerwa':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + comando} Corinthians`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
                        await cofs.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'infobot':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			reply('')
break
case 'owner':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
		const ownerContact = [ownernumber]
		let ini_list = []
		for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
			const vname = cofs.contacts[i] != undefined ? cofs.contacts[i].vname || cofs.contacts[i].notify : undefined
			ini_list.push({
				"displayName": `${ownername}`,
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
				}
				hehe = await cofs.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: mek })
					cofs.sendMessage(from, `Salve mano, tmj!🤝`, text, {quoted: hehe})
				}
			break
case 'fig':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cofs.downloadAndSaveMediaMessage(encmedia)
                                                if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								cofs.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cofs.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(lang.ok)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`âŒ Falhou, no momento da conversÃ£o ${tipe} para o sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								cofs.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
					
// download fix by zeeone
case 'ig': case 'igdl': 
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
	if (!q) return reply('Link?')
	if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.errorLink)
	let urlnya = q
	zee.Igdl(urlnya)
	.then(async(result) => {
		for(let i of result.medias){
			if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                    cofs.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram •  ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    cofs.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => reply(`🤲 Error`))
            
             break
             case 'promover':
					cofs.updatePresence(from, Presence.composing) 
                                        if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
					if (!isGroup) return reply(lang.group())
					if (!isGroupAdmins) return reply(lang.admin(groupName))
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Cadê a tag amigo?*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `*Feito, bem-vindo novo administrador* :\n`
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cofs.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Feito, @${mentioned[0].split('@')[0]} foi promovido para adm.*  `, mentioned, true)
						cofs.groupMakeAdmin(from, mentioned)
					}
					break
					
             case 'contas':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, 'Clique abaixo, e veja as contas disponíveis.', '© ' + ownername, thumbnail4, [{buttonId: '.hbomax ${q}', buttonText: {displayText: '💜 HboMax' }, type: 1}], {quoted: mek})
						
             break
             case 'hbomax':
					cofs.sendMessage(from, hbomax(prefix), text)
					break
					case 'modapk':
                    cofs.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
                    case 'grupomenu':
					cofs.sendMessage(from, grupomenu(prefix), text, { quoted: mek })
					break
					case 'downloadmenu':
                    cofs.sendMessage(from, downloadmenu(prefix), text, { quoted: mek })
                    break
                    case 'logotipomenu':
					cofs.sendMessage(from, logotipomenu(prefix), text, { quoted: mek })
					break
					case 'stickermenu':
                    cofs.sendMessage(from, stickermenu(prefix), text, { quoted: mek })
                    break
case 'tiktok':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, 'Selecione o modo desejado abaixo', '© ' + ownername, thumbnail2, [{buttonId: `${prefix}tiktoknowm ${q}`, buttonText: {displayText: '🎥'}, type: 1},{buttonId: `${prefix}tiktokmusic ${q}`, buttonText:{displayText: '🎵'}, type: 1}], {quoted: mek})
						
             break
case 'tiktoknowm':   
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					cofs.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Error`))
			
             break 
             case 'google':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + comando} YouTube`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Título : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'playstore':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + comando} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Nome : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Desenvolvedor : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Preço : ${x.priceText}\n`
                        ini_txt += `Preço : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'wallpapersearch':
                    if (args.length == 0) return reply(`Exemplo : ${prefix + comando} Corinthians`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await cofs.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'wallpapersearch2':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + comando} Corinthians`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await cofs.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'tiktokwm':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let wem = args.join(' ')
			zee.Ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					cofs.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break 
case 'tiktokmusic': case 'tiktokaudio':  
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Link inválido')
			reply(lang.wait())
			let audi = q
			zee.Ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					cofs.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Error`))
			
             break
case 'pinterest': 
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if(!q) return reply('Busque o que deseja')
            async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
                                })
                                resolve(result)
                            }).catch(reject)
                    })
                }

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
                        })
                    }).catch(reject)
                })

                pinterest(q).then(async(res) => {
                	let we = await getBuffer(res.image)
              	  sendButImage(from,  lang.ok() , `© ${ownername}`,we, [{"buttonId": `.pinterest ${q}`,"buttonText": {"displayText": "👾"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
                   }).catch(async(err) => {
                    reply('Erro')
                })
                
             break
             case 'toimg':  
                   if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await cofs.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        cofs.sendMessage(from, buffer, image, {quoted: mek, caption: 'Feito fdp'})
				    fs.unlinkSync(ran)
					})					
			    	break 
case 'play': case 'song':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Exemplo *${prefix}play* Corinthians`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				zee.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${aramas.videos[0].title}\n*Ext* : MP3\n*Filesize* : ${data.medias[7].formattedSize}\n*Link* : ${aramas.videos[0].url}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Título : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Tamanho : ${data.medias[7].formattedSize}
• Visualizações : ${aramas.videos[0].views} 
• Duração : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, ' ' + ownername, thumbyt, [{buttonId: `${prefix}ytmp4 ${mulaikah}`, buttonText: {displayText: '📽️'}, type: 1},{buttonId: `${prefix}ytmp3 ${mulaikah}`, buttonText:{displayText: '🎵'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Erro')
					}
			
             break
case 'spotify':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
    get_result = get_result.result
    ini_txt = `Titulo : ${get_result.title}\n`
    ini_txt += `Artista : ${get_result.artists}\n`
    ini_txt += `Duração : ${get_result.duration}\n`
    ini_txt += `Popularidade : ${get_result.popularity}\n`
    ini_txt += `Prévia : ${get_result.preview_url}\n`
    thumbnail = await getBuffer(get_result.thumbnail)
    await cofs.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
    get_audio = await getBuffer(get_result.link)
    await cofs.sendMessage(from, get_audio, audio, { mimetype: 'audio/mpeg', filename: `${get_result.title}.mp3`, quoted: mek})
    }
    break
          case  'pornhub': 
                   if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} cofs*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply('Feito')
                   anu = await getBuffer(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
                   cofs.sendMessage(from, anu, image, {quoted: mek})
                   break
    case 'gfx1':
case 'gfx2':
case 'gfx5':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+comandos} Cofs`)
ini_txt = args.join(" ")
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${comandos}?apikey=hardianto&nama=${ini_txt}`)
cofs.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By Cofs Officia*'})
break
case 'gfx3':
case 'gfx4':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+comandos} Cofs OFC`)
ini_txt1 = args[0]
ini_txt2 = args[1]
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${comandos}?apikey=hardianto&text1=${ini_txt1}&text2=${ini_txt2}`)
cofs.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By Cofs Officia*'})
break
case 'gfx6':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+comandos} Cofs`)
ini_txt = args.join(" ")
gfx = await getBuffer(`https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${ini_txt}`)
cofs.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By Cofs Officia*'})
break
    case 'brainly':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + comando} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'brainly2':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + comando} siapakah sukarno`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly2?apikey=${lolkey}&query=${args.join(" ")}`)
                    lala = get_result.result
                    ini_txt = "Beberapa Pembahasan Dari Brainly :\n\n"
                    for (var x of lala) {
                        ini_txt += `==============================\n`
                        ini_txt += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
                        ini_txt += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
                        ini_txt += `==============================\n\n`
                    }
                    reply(ini_txt)
                    break
case 'spotifysearch':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} Melukis Senja`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Artists : ${x.artists}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Preview : ${x.preview_url}\n\n\n`
    }
    reply(ini_txt)}
    break
case 'nhentai':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
    ini_txt += `Title Native : ${get_result.title_native}\n`
    ini_txt += `Read Online : ${get_result.read}\n`
    get_info = get_result.info
    ini_txt += `Parodies : ${get_info.parodies}\n`
    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
    ini_txt += `Artist : ${get_info.artists}\n`
    ini_txt += `Group : ${get_info.groups}\n`
    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
    ini_txt += `Categories : ${get_info.categories}\n`
    ini_txt += `Pages : ${get_info.pages}\n`
    ini_txt += `Uploaded : ${get_info.uploaded}\n`
    reply(ini_txt)}
    break
 case 'nhentaipdf':{
 	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_buffer = await getBuffer(get_result)
    await cofs.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
    }
    break
case 'nhentaisearch':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} Gotoubun No Hanayome`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = "Result : \n"
    for (var x of get_result) {
        ini_txt += `Id : ${x.id}\n`
        ini_txt += `Title English : ${x.title_english}\n`
        ini_txt += `Title Japanese : ${x.title_japanese}\n`
        ini_txt += `Native : ${x.title_native}\n`
        ini_txt += `Upload : ${x.date_upload}\n`
        ini_txt += `Page : ${x.page}\n`
        ini_txt += `Favourite : ${x.favourite}\n\n`
    }
    reply(ini_txt)
    }
    break
//maker ephoto
case 'wetglass':case 'multicolor3d':case 'watercolor':case 'luxurygold':case 'galaxywallpaper':case 'lighttext':case 'beautifulflower':case 'puppycute':case 'royaltext':case 'heartshaped':case 'birthdaycake':case 'galaxystyle':case 'hologram3d':case 'greenneon':case 'glossychrome':case 'greenbush':case 'metallogo':case 'noeltext':case 'glittergold':case 'textcake':case 'starsnight':case 'wooden3d':case 'textbyname':case 'writegalacy':case 'galaxybat':case 'snow3d':case 'birthdayday':case 'goldplaybutton':case 'silverplaybutton':case 'freefire':{
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} Cofs`)
    ini_txt = args.join(" ")
    var po = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${comandos}?apikey=${lolkey}&text=${ini_txt}`)
    cofs.sendMessage(from, po, image, { quoted: mek, caption: "Feito" })
    }
    break
    case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, comando))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    cofs.sendMessage(from, anu1, sticker, {quoted: mek})
     .catch(e =>{
     reply('Sepertinya server xteam.xyz sedang eror / perbaikan')})
     break
    case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + comando} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${comandos}?apikey=${lolkey}&text=${ini_txt}`)
                    await cofs.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
//maker textpro
case 'blackpink':case 'neon':case 'greenneon':case 'advanceglow':case 'futureneon':case 'sandwriting':case 'sandsummer':case 'sandengraved':case 'metaldark':case 'neonlight':case 'holographic':case 'text1917':case 'minion':case 'deluxesilver':case 'newyearcard':case 'bloodfrosted':case 'halloween':case 'jokerlogo':case 'fireworksparkle':case 'natureleaves':case 'bokeh':case 'toxic':case 'strawberry':case 'box3d':case 'roadwarning':case 'breakwall':case 'icecold':case 'luxury':case 'cloud':case 'summersand':case 'horrorblood':case 'thunder':{
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} Cofs`)
    ini_txt = args.join(" ")
    let gambar = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${comandos}?apikey=${lolkey}&text=${ini_txt}`)
    cofs.sendMessage(from, gambar, image, { quoted: mek, caption: "*Feito*" })
    }
    break
//islami
case 'listsurah':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    get = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
    get_result = get.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
        ini_txt += `${x}. ${get_result[x]}\n`
    }
    reply(ini_txt)
    }
    break
case 'alquran':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length < 1) return reply(`Exemplo: ${prefix + comandos} 18 or ${prefix + comandos} 18/10 or ${prefix + comandos} 18/1-10`)
    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
    quran = await fetchJson(urls)
    result = quran.result
    ayat = result.ayat
    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
    for (var x of ayat) {
        arab = x.arab
        nomor = x.ayat
        latin = x.latin
        indo = x.indonesia
        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
    }
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    reply(ini_txt)}
    break
case 'asmaulhusna':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    reply(ini_txt)}
    break
    case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    cofs.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break
case 'kisahnabi':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} Muhammad`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    reply(ini_txt)}
    break
case 'alquranaudio':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} 18 or ${prefix + comandos} 18/10`)
    surah = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
    await cofs.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: 'audio/mpeg' })
    }
    break
case 'jadwalsholat':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Exemplo: ${prefix + comandos} Yogyakarta`)
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    reply(ini_txt)}
    break

//group
case 'daftar': case 'verify': case 'verif':
			if (isCofs) return  reply(lang.regis())
			try {
					ppregis = await cofs.getProfilePicture(sender)
				} catch {
					ppregis = 'https://telegra.ph/file/c7bccc17405c8cf338e86.jpg'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender.split('@')[0] + '@s.whatsapp.net', pushname, time, serialUser)
			await sendButImage(from, lang.daftar(sender, pushname, time, serialUser, _registered), `© ${botname}`,await getBuffer(ppregis), [{buttonId: `${prefix}cofs`,buttonText: {displayText: `MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break
case 'antilink':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Telah di aktifkan sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./basededados/grupo/antilink.json', JSON.stringify(antilink))
						reply(`✅ Berhasil mengaktifkan ${comandos}`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Udh mati')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./basededados/grupo/antilink.json', JSON.stringify(antilink))
						reply(`✅ Berhasil mematikan ${comandos}`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break		
					case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝙐𝙚́')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('𝙅𝙖́ 𝙚𝙨𝙩𝙖́ 𝙤𝙣')
						welkom.push(from)
						fs.writeFileSync('./basededados/grupo/welkom.json', JSON.stringify(welkom))
						reply('𝘼𝙩𝙞𝙫𝙖𝙙𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 𝙤 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙗𝙤𝙖𝙨-𝙫𝙞𝙣𝙙𝙖𝙨😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./basededados/grupo/welkom.json', JSON.stringify(welkom))
						reply('𝘿𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙙𝙤 𝙖 𝙛𝙪𝙣𝙘̧𝙖̃𝙤 𝙙𝙚 𝙗𝙤𝙖𝙨-𝙫𝙞𝙣𝙙𝙖𝙨 😡️')
					} else {
						reply('𝙋𝙦𝙥, 𝙥𝙖𝙧𝙖 𝙖𝙩𝙞𝙫𝙖𝙧 ??́ 𝟭 𝙚 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖 𝟬, 𝙨𝙡𝙘𝙠𝙠𝙠𝙠𝙠𝙠𝙠')
					}
                                      break
case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + comandos}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + comandos}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await cofs.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										cofs.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + comandos}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + comandos}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await cofs.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break	
									case 'bcgc':
					cofs.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(lang.owner(botname))
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await cofs.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							cofs.sendMessage(_.jid, buff, image, {caption: `*🇧🇷💛*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*ã€Œ BC GROUP ã€*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Feito')
					}
					break
					case 'bc':
					cofs.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(lang.owner(botname))
					if (args.length < 1) return reply('.......')
					anu = await cofs.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await cofs.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cofs.sendMessage(_.jid, buff, image, {caption: `*🇧🇷💛*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*🇧🇷💛*\n\n${body.slice(4)}`)
						}
						reply('Feito')
					}
					break
case 'leave':
			if (!isGroup) return reply(lang.group())
			if (!isOwner) return reply(lang.owner(botname))
			setTimeout( () => {
			cofs.groupLeave(from) 
			}, 2000)
			setTimeout( () => {
			cofs.sendMessage(from, 'Sayonara👋', text)
			}, 0)
			break
case 'hidetag':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			var value = q
			var group = await cofs.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			cofs.sendMessage(from, options, text)
			break
case 'linkgrup':case 'linkgroup': case 'linkgc':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			linkgc = await cofs.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			cofs.sendMessage(from, yeh, text, { quoted: mek })
			break  
case 'tagall':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			members_id = []
			taga = (args.length > 1) ? body.slice(8).trim() : ''
			taga += '\n\n'
			for (let mem of groupMembers) {
				taga += `➸ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(taga, members_id, true)
			break 
case 'setname':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await cofs.groupUpdateSubject(from, `${q}`)
					cofs.sendMessage(from, `Sukses Mengubah Nama Grup Menjadi ${q}`, text, { quoted: mek })
			break          
case 'setdesc': case 'setdesk':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await cofs.groupUpdateDescription(from, `${q}`)
					cofs.sendMessage(from, `Sukses Mengubah Desk Grup Menjadi ${q}`, text, { quoted: mek })
			break   
case 'kick':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
			if(!q)return reply(`*Format salah!*\n\n*Exemplo : ${prefix + comandos} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await cofs.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
break
case 'bc': case 'broadcast':
			if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
			if (args.length === 0) return reply(`Kirim perintah *${prefix + comandos}* text`)
			var bcnya = await cofs.chats.all()
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			var  bcnya2 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			var bcnya3 = await cofs.downloadMediaMessage(bcnya2)
					for (let _ of bcnya) {
						cofs.sendMessage(_.jid, bcnya3, image, { caption: `*----「  BROADCAST 」----*\n\n${q}` })
						}
						reply('Sukses broadcast')
					} else {
						for (let _ of bcnya) {
							sendButLocation(_.jid, '「 PESAN SIARAN 」\n\n' + q, '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
							}
						reply('Sukses broadcast')
					}
					break      
case 'nightcore':{
	 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await cofs.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						cofs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })}
				  break      
				case 'add':
					if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um membro?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man \n ex: +55 89981246187')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cofs.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
					case 'banir':
					if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Esse ai ja foi kkkk :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cofs.groupRemove(from, mentioned)
					} else {
						mentions(`𝙁𝙇𝙒 𝙈𝙀𝙈𝘽𝙍𝙊 𝘾𝙊𝙈𝙐𝙈𝙆𝙆𝙆𝙆𝙆𝙆🤣  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						cofs.groupRemove(from, mentioned)
					}
					break
					case 'rebaixar':
					if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Cadê a tag amigo?*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Feito, @_.split('@')[0] foi rebaixado para membro comum* :\n`
						}
						mentions(teks, mentioned, true)
						cofs.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Feito, @${mentioned[0].split('@')[0]} foi rebaixado para membro comum* `, mentioned, true)
						cofs.groupDemoteAdmin(from, mentioned)
					}
					break
case 'bass': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await cofs.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										cofs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break    
case 'slowmo': case 'slow':{
								try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await cofs.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											cofs.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
												
									break
case 'robot':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await cofs.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										cofs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
									case 'clube':
									if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
				 data = fs.readFileSync('./time/timesbr.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                cofs.sendMessage(from, hasil, image, {quoted: mek, caption: "𝙎𝙀𝙐 𝘾𝙇𝙐𝘽𝙀 𝙀́ 𝙀𝙎𝙏𝙀"})
				break
				case  'wallpaperaleatorio':
				if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
				 data = fs.readFileSync('./wallpaper/wallpaperaleatorio.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                cofs.sendMessage(from, hasil, image, {quoted: mek})
				break
				case 'wallpaperjogador':
					if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
				 data = fs.readFileSync('./wallpaper/wallpaperjogador.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                cofs.sendMessage(from, hasil, image, {quoted: mek})
				break
				case 'ttp': 
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
                    if (args.length < 1) return reply(lang.noteks(prefix, comando))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    cofs.sendMessage(from, anu1, image, {quoted: fgclink})
                    break
case 'vibra': case 'vibrato':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await cofs.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										cofs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'tupai':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await cofs.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											cofs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration: 999099})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												}
												break
case 'fast':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await cofs.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											cofs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
									case 'nulis':
									reply(`*Exemplo*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
case 'toimg':{
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await cofs.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Eror')
					buffer = fs.readFileSync(ran)
					cofs.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: 'Done'})
					fs.unlinkSync(ran)
					})
					}
					break   
case 'nuliskiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										cofs.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'nuliskanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										cofs.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										cofs.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										cofs.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
									})
									}
									break
									case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':{
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Exemplo : ${prefix + comandos} link Facebook`)
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return reply('Itu bukan link Facebook')
                await reply(lang.wait())
try{
                zee.Facebook(`${q}`).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Type :* ${data.medias[0].extension}\n`
                    txt += `*• Quality :* ${data.medias[0].quality}\n`
                    txt += `*• Size HD:* ${data.medias[1].formattedSize}\n`
					txt += `*• Url :* ${data.url}`
                    let ppfb = await getBuffer(data.medias[1].url)
                    cofs.sendMessage(from, ppfb, video, {mimetype:'video/mp4', quoted: mek, caption: txt})
             })} catch {
             	reply('Fitur sedang error')
} 
   }          
             break
   case 'soundcloud':
	if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Exemplo : ${prefix + comandos} link SoundCloud`)
                if (!q.includes('m.soundcloud.com')) return reply('Itu bukan link SoundCloud')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Titulo :* ${data.title}\n`
                    txt += `*• Duração :* ${data.duration}\n`
					txt += `*• Qualidade :* ${data.medias[1].quality}\n`
					txt += `*• Tipo :* ${data.medias[0].extension}\n`
                    txt += `*• Tamanho :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Aguarde, upando música..... *`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    cofs.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'tstiker': {
		if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!q) return reply(`Contoh: ${prefix + comandos} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('Coloque o link do pacote')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(lang.wait())
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			cofs.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
		case 'delete':
case 'del':
case 'd':
cofs.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tebakgambar':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
hx.tebakgambar().then(async data =>{
	tebakya = await getBuffer(data[0].image)
jawaban = `${data[0].jawaban.replace('Jawaban ', '')}`
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./basededados/game/tebakgambar.json", JSON.stringify(tebakgambar))
console.log(jawaban)
cofs.sendMessage(from, tebakya, image, {quoted: mek, caption: "\n\nTimeout : 120.00 seconds" })
await sleep(120000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
cofs.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./basededados/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    })
					break   
case 'semoji': case'emoji':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (!q) return reply('emojinya?')
					qes = args.join(' ')
reply(lang.wait())
	emoji.get(`${qes}`).then(async emojii => {
					teks = `${emojii.images[4].url}`
					console.log(teks)
					//cofs.sendMessage(from, await getBuffer(teks), sticker, {mimetype:'image/webp',quoted: mek})
		  sendStickerFromUrl(from,`${teks}`)	
		
		})
		
		break
case 'ytmp3': {
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Exemplo *${prefix}ytmp3* Url YouTube`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			await reply(lang.wait())
                zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`
                    txt += `*• Qualidade :* ${data.medias[7].quality}\n`
                    txt += `*• Tipo :* ${data.medias[7].extension}\n`
                    txt += `*• Tamanho :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Aguarde, upando mídia..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                })
                }
             break
             case 'play2': case 'song2':
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Exemplo *${prefix}play* Corinthians`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				zee.Twitter(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${aramas.videos[0].title}\n*Ext* : MP3\n*Filesize* : ${data.medias[7].formattedSize}\n*Link* : ${aramas.videos[0].url}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Título : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Tamanho : ${data.medias[7].formattedSize}
• Visualizações : ${aramas.videos[0].views} 
• Duração : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, ' ' + ownername, thumbyt, [{buttonId: `${prefix}ttmp4 ${mulaikah}`, buttonText: {displayText: '📽️'}, type: 1},{buttonId: `${prefix}ttmp3 ${mulaikah}`, buttonText:{displayText: '🎵'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Erro')
					}
			
             break
             case 'ttmp3': {
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Exemplo *${prefix}ttmp3* Url Twitter`)
			if(!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			await reply(lang.wait())
                zee.Twitter(mulaikah).then(async (data) => {
                    let txt = `*----「 TWITTER AUDIO 」----*\n\n`
                    txt += `*• Qualidade :* ${data.medias[7].quality}\n`
                    txt += `*• Tipo :* ${data.medias[7].extension}\n`
                    txt += `*• Tamanho :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Aguarde, upando mídia..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                })
                }
             break
             case 'ttmp4': {
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Exemplo *${prefix}ttmp4* Url Twitter`)
			if(!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply('Link invalido')
			var mulaikah = args.join(' ')
			zee.Twitter(mulaikah).then(async (data) => {
                    let txt = `*----「 TWITTER VIDEO 」----*\n\n`
                    txt += `*• Qualidade :* ${data.medias[1].quality}\n`
                    txt += `*• Tipo :* ${data.medias[1].extension}\n`
                    txt += `*• Tamanho :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Aguarde, upando mídia..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, '', mek)                    
                })
                }
             break                 
case 'ytmp4': {
if (!isCofs) return sendButMessage(from, lang.noregis(pushname), `Clique no botão`, [{buttonId: '.daftar',buttonText: {displayText: `Registrar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Exemplo *${prefix}ytmp4* Url YouTube`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link invalido')
			var mulaikah = args.join(' ')
			zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Qualidade :* ${data.medias[1].quality}\n`
                    txt += `*• Tipo :* ${data.medias[1].extension}\n`
                    txt += `*• Tamanho :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Aguarde, upando mídia..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, '', mek)                    
                })
                }
             break                         
		default:
if (budy.includes(".com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
cofs.updatePresence(from, Presence.composing)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
reply(`*🗣Sem link no grupo fdp❤*`)
}, 100)
reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
cofs.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 10)
setTimeout( () => {
}, 0)
}
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
cofs.updatePresence(from, Presence.composing)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
reply(`*🗣Sem link no grupo fdp❤*`)
}, 100)
reply(`*_「 link  detectado 」_*\n*${pushname}*\nBye Bye `)
setTimeout( () => {  
cofs.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 10)
setTimeout( () => {
}, 0)
}

if (body == `${prefix + comandos}`)  {
try {
ppimg = await cofs.getProfilePicture(sender)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let menuAjuda = await getBuffer(ppimg)
hsl = `╭────── • ◆ • ──────\n│ ⟅❗CMD NÃO ENCONTRADO❗⟆ \n╠────── • ◆ • ──────\n│♞Ξ ❯ Olá @${sender.split("@")[0]}!\n│♞Ξ ❯ O comando: ${prefix}${comandos}\n│♞Ξ ❯ Não existe ou digitou errado\n│♞Ξ ❯ Verifique usando ${prefix}menu \n╰────── • ◆ • ──────`
cofs.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()