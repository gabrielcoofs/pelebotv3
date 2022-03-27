exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Ops ${pushname} o limite diário se foi. Ele é resetado diariamente`
}
exports.noregis = (pushname) =>{
	return`Olá ${pushname}, tudo bem? Se registre .daftar`
	}
exports.regis = () =>{
	return` Já está registrado 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *REGISTRO BEM-SUCEDIDO*

🎅 Nick : ${pushname}
🎅 Number : ${sender.split("@")[0]}
🎅 Time : ${time}
🎅 Serial : ${serialUser}

Obrigado por se registrar, agora clique em .menu para visualizar recursos do bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Aguarde...`
	}
exports.ok = () =>{
	return`🎅 Feito, Tmj mano. `
	}
exports.welcome = (pushname) =>{
	return`
`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`*Olá ${pushname}, tudo bem?*

`
	}