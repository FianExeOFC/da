const chalk = require('chalk')
const fs = require('fs')

exports.simplemenu = (prefix) => {
  return`❏ ${prefix}ownermenu
❏ ${prefix}groupmenu
❏ ${prefix}storemenu
❏ ${prefix}rpgmenu
❏ ${prefix}gamemenu
❏ ${prefix}makermenu
❏ ${prefix}downloadmenu
❏ ${prefix}ephotomenu
❏ ${prefix}photooxymenu
❏ ${prefix}funmenu
❏ ${prefix}islamimenu
❏ ${prefix}randommenu
❏ ${prefix}gachamenu
❏ ${prefix}asupanmenu
❏ ${prefix}randomimagemenu
❏ ${prefix}randomanimemenu
❏ ${prefix}wallpapermenu
❏ ${prefix}nsfwmenu
❏ ${prefix}othermenu
`
}

exports.ownermenu = (prefix) => {
  return`*FianExe OFC.XD*
❏ ${prefix}addowner
❏ ${prefix}delowner
❏ ${prefix}setmenu
❏ ${prefix}restart
❏ ${prefix}react
❏ ${prefix}listprem
❏ ${prefix}backup
❏ ${prefix}banned
❏ ${prefix}unban
❏ ${prefix}banchat
❏ ${prefix}unbanchat
❏ ${prefix}sewaadd
❏ ${prefix}delsewa
❏ ${prefix}autobio
❏ ${prefix}autoreact
❏ ${prefix}anticall
❏ ${prefix}autosticker
❏ ${prefix}bc
❏ ${prefix}bcgc
❏ ${prefix}join
❏ ${prefix}join2
❏ ${prefix}leave
❏ ${prefix}block
❏ ${prefix}unblock
❏ ${prefix}setppbot
❏ ${prefix}self
❏ ${prefix}public
❏ ${prefix}eval
`
}

exports.groupmenu = (prefix) => {
  return`*Group Menu*
❏ ${prefix}ceksewa
❏ ${prefix}jeda
❏ ${prefix}antilink
❏ ${prefix}antiwame
❏ ${prefix}antivirtex
❏ ${prefix}antiasing
❏ ${prefix}antiviewone
❏ ${prefix}event
❏ ${prefix}linkgroup
❏ ${prefix}revoke
❏ ${prefix}kick
❏ ${prefix}add
❏ ${prefix}promote
❏ ${prefix}demote
❏ ${prefix}setname
❏ ${prefix}setdesk
❏ ${prefix}setppgrup
❏ ${prefix}tagall
❏ ${prefix}hidetag
❏ ${prefix}ephemeral
`
}

exports.storemenu = (prefix) => {
  return`*Store Menu*
❏ ${prefix}list
❏ ${prefix}addlist
❏ ${prefix}dellist
❏ ${prefix}updatelist
❏ ${prefix}kalkulator
❏ ${prefix}buatgc
`
}

exports.gamemenu = (prefix) => {
  return`*Game Menu*
❏ ${prefix}tebakkata
❏ ${prefix}tebakkalimat
❏ ${prefix}tebaklirik
❏ ${prefix}tebakgambar
❏ ${prefix}siapakahaku
❏ ${prefix}caklontong
❏ ${prefix}family100
`
}

exports.rpgmenu = (prefix) => {
  return`*Rpg Menu*
❏ ${prefix}profile
❏ ${prefix}daily
❏ ${prefix}weekly
❏ ${prefix}monthly
❏ ${prefix}gajian
❏ ${prefix}bansos
❏ ${prefix}mining
❏ ${prefix}nebang
❏ ${prefix}feed
❏ ${prefix}shop
❏ ${prefix}transfer
❏ ${prefix}open
❏ ${prefix}slot
❏ ${prefix}judi
❏ ${prefix}buatatm
❏ ${prefix}nabung
❏ ${prefix}bank
❏ ${prefix}tarik
❏ ${prefix}mancing
❏ ${prefix}berdagang
`
}

exports.makermenu = (prefix) => {
  return`*Maker Menu*
❏ ${prefix}sticker
❏ ${prefix}toimg
❏ ${prefix}tovideo
❏ ${prefix}toaudio
❏ ${prefix}tomp3
❏ ${prefix}tovn
❏ ${prefix}togif
❏ ${prefix}tourl
❏ ${prefix}emojimix
❏ ${prefix}smeme
❏ ${prefix}smeme2
❏ ${prefix}swm
❏ ${prefix}take
❏ ${prefix}semoji
`
}

exports.downloadmenu = (prefix) => {
  return`*Download Menu*
❏ ${prefix}instagram
❏ ${prefix}gitclone
❏ ${prefix}twitter
❏ ${prefix}tiktok
❏ ${prefix}tiktokaudio
❏ ${prefix}instagram
❏ ${prefix}mediafire
❏ ${prefix}play
❏ ${prefix}yts
❏ ${prefix}ytmp3
❏ ${prefix}ytmp4
❏ ${prefix}umma
❏ ${prefix}ringtone
`
}

exports.textpromenu = (prefix) => {
  return`*Textpro Menu*
❏ ${prefix}candy 
❏ ${prefix}christmas 
❏ ${prefix}3dchristmas 
❏ ${prefix}sparklechristmas
❏ ${prefix}deepsea 
❏ ${prefix}scifi 
❏ ${prefix}rainbow 
❏ ${prefix}waterpipe 
❏ ${prefix}spooky 
❏ ${prefix}pencil 
❏ ${prefix}circuit 
❏ ${prefix}discovery 
❏ ${prefix}metalic 
❏ ${prefix}fiction 
❏ ${prefix}demon 
❏ ${prefix}transformer 
❏ ${prefix}berry 
❏ ${prefix}thunder 
❏ ${prefix}magma 
❏ ${prefix}3dstone 
❏ ${prefix}neonlight 
❏ ${prefix}glitch 
❏ ${prefix}harrypotter 
❏ ${prefix}brokenglass 
❏ ${prefix}papercut 
❏ ${prefix}watercolor 
❏ ${prefix}multicolor 
❏ ${prefix}neondevil 
❏ ${prefix}underwater 
❏ ${prefix}graffitibike
❏ ${prefix}snow 
❏ ${prefix}cloud 
❏ ${prefix}honey 
❏ ${prefix}ice 
❏ ${prefix}fruitjuice 
❏ ${prefix}biscuit 
❏ ${prefix}wood 
❏ ${prefix}chocolate 
❏ ${prefix}strawberry 
❏ ${prefix}matrix 
❏ ${prefix}blood 
❏ ${prefix}dropwater 
❏ ${prefix}toxic 
❏ ${prefix}lava 
❏ ${prefix}rock 
❏ ${prefix}bloodglas 
❏ ${prefix}hallowen 
❏ ${prefix}darkgold 
❏ ${prefix}joker 
❏ ${prefix}wicker
❏ ${prefix}firework 
❏ ${prefix}skeleton 
❏ ${prefix}blackpink 
❏ ${prefix}sand 
❏ ${prefix}glue 
❏ ${prefix}1917 
❏ ${prefix}leaves
`
}

exports.ephotomenu = (prefix) => {
  return`*Ephoto Menu*
❏️ ${prefix}3dnature
❏️ ${prefix}bevel
❏️ ${prefix}burnpaper
❏️ ${prefix}quotesgrass
❏️ ${prefix}stars
❏️ ${prefix}flaming
❏️ ${prefix}romance
❏️ ${prefix}gerbang
❏️ ${prefix}fur
❏️ ${prefix}funnycup
`
}

exports.photooxymenu = (prefix) => {
  return`*Photooxy Menu*
❏️ ${prefix}3d-underwater  
❏️ ${prefix}3dtext-pig  
❏️ ${prefix}3dvalentine-cards  
❏️ ${prefix}anonymous-neon  
❏️ ${prefix}advanced-glow  
❏️ ${prefix}art-shader  
❏️ ${prefix}angels-wings
`
}

exports.islamimenu = (prefix) => {
  return`*Islami Menu*
❏ ${prefix}ayatkursi
❏ ${prefix}kisahnabi
❏ ${prefix}bacaansolat
❏ ${prefix}niatsolat
❏ ${prefix}ceramah
❏ ${prefix}alquran
❏ ${prefix}tafsirsurah
❏ ${prefix}qislam
`
}

exports.randommenu = (prefix) => {
  return`*Random Menu*
❏ ${prefix}pinterest
❏ ${prefix}quotesanime
❏ ${prefix}wikimedia
❏ ${prefix}styletext
❏ ${prefix}fiersa
❏ ${prefix}katabucin
❏ ${prefix}katasenja
❏ ${prefix}dilan
❏ ${prefix}darkjokes
❏ ${prefix}quotesjawa
❏ ${prefix}katailham
❏ ${prefix}bacot
❏ ${prefix}taugasih
❏ ${prefix}motivasi
❏ ${prefix}gombal
❏ ${prefix}galau
❏ ${prefix}ngawur
❏ ${prefix}nyindir
❏ ${prefix}cerpen
❏ ${prefix}couple
❏ ${prefix}truth
❏ ${prefix}dare
`
}

exports.searchmenu = (prefix) => {
	return`*Search Menu*
❏ ${prefix}google
❏ ${prefix}lirik
❏ ${prefix}kbbi
❏ ${prefix}gimage
❏ ${prefix}kbbi
❏ ${prefix}stalkgh
❏ ${prefix}npmsearch
❏ ${prefix}infocovid
❏ ${prefix}infogempa
❏ ${prefix}carigroup
`
}

exports.gachamenu = (prefix) => {
  return`*Gacha Menu*
❏ ${prefix}cecan
❏ ${prefix}cecan2
❏ ${prefix}cogan
❏ ${prefix}china
❏ ${prefix}indonesia
❏ ${prefix}japan
❏ ${prefix}korea
❏ ${prefix}malaysia
❏ ${prefix}thailand
❏ ${prefix}vietnam
`
}

exports.asupanmenu = (prefix) => {
  return`*Asupan Menu*
❏ ${prefix}asupan
❏ ${prefix}euni
❏ ${prefix}natajadeh
❏ ${prefix}geayubi
❏ ${prefix}rikagusriani
`
}

exports.randomimagemenu = (prefix) => {
  return`*Random Image Menu*
❏ ${prefix}aesthetic
❏ ${prefix}ryujin
❏ ${prefix}kpop
❏ ${prefix}pubg
❏ ${prefix}rose
❏ ${prefix}hekel
`
}

exports.randomanimemenu = (prefix) => {
  return`*Random Anime Menu*
❏ ${prefix}akira
❏ ${prefix}akiyama
❏ ${prefix}asuna 
❏ ${prefix}elaina 
❏ ${prefix}kurumi 
❏ ${prefix}loli 
❏ ${prefix}miku 
❏ ${prefix}nezuko 
❏ ${prefix}tsunade 
❏ ${prefix}waifu 
❏ ${prefix}waifu2 
❏ ${prefix}yuki
`
}

exports.wallpapermenu = (prefix) => {
  return`*Wallpaper Menu*
❏ ${prefix}wallpaper
❏ ${prefix}cyberspace
❏ ${prefix}mountain
❏ ${prefix}technology
❏ ${prefix}programming
`
}

exports.nsfwmenu = (prefix) => {
  return`*Nsfw Menu*
❏ ${prefix}ahegao
❏ ${prefix}ass
❏ ${prefix}bdsm
❏ ${prefix}blowjob
❏ ${prefix}cuckold
❏ ${prefix}cum
❏ ${prefix}femdom
❏ ${prefix}foot
❏ ${prefix}gifs
❏ ${prefix}glasses
❏ ${prefix}hentai
❏ ${prefix}manga
❏ ${prefix}megumin
❏ ${prefix}neko
❏ ${prefix}neko2
❏ ${prefix}nekonime
❏ ${prefix}orgy
❏ ${prefix}panties
❏ ${prefix}tentacles
`
}

exports.othermenu = (prefix) => {
  return`*Other Menu*
❏ ${prefix}menfes
❏ ${prefix}cekdatabase
❏ ${prefix}register
❏ ${prefix}ceksn
❏ ${prefix}unreg
❏ ${prefix}tagme
❏ ${prefix}getpp
❏ ${prefix}request
❏ ${prefix}report
❏ ${prefix}creator
❏ ${prefix}delete
❏ ${prefix}donasi
❏ ${prefix}sewa
❏ ${prefix}sc
❏ ${prefix}owner
❏ ${prefix}ping
❏ ${prefix}q
❏ ${prefix}menu / ${prefix}help / ${prefix}?
`
}

exports.funmenu = (prefix) => {
  return`*Fun Menu*
❏ ${prefix}apakah
❏ ${prefix}bisakah
❏ ${prefix}cantikcek
❏ ${prefix}gantengcek
❏ ${prefix}tololcek
❏ ${prefix}wibucek
❏ ${prefix}ceksifat
❏ ${prefix}dimanakah
❏ ${prefix}kapankah
❏ ${prefix}masadepan
❏ ${prefix}kerangajaib
❏ ${prefix}jadian`
}

exports.donasi = () => {
  return`Jika Ingin Melakukan Donasi ( pulsa : 085803570952 )

Rental Bot WhatsApp :
📆 10k/25hari
📆 50k/60hari
🍒 Permanen? Buat Bot Sendiri
`
}

exports.rules = () => {
	return`*R U L E S 🚀*
	
1. Jangan Pernah Spam Bot ❎
2. Jangan Call Nomer Bot ❎
3. Jangan Mengeksploitasi Bot ❎
        *>FianExe OFC.XD<*
Sanksi : *Warn/Soft Block 🚧*

*About Questions ⁉️*
 
👦 : Bot nya Slow Respon 😒
🤖 : Mohon Bersabar, Mungkin Kendala Dari Jaringan, Signal, Atau Bahkan Terbanned Dari Pihak WhatsApp

👦 : Boleh Masukin Ke Grup Saia Tidak? 😁
🤖 : Untuk Masalah Memasukkan Bot Ke Dalam Grup Bisa Menghubungi Owner

👦 : Apakah Bot Ini Masih Menyimpan File Yang Saya Kirim?
🤖 : Data WhatsApp Anda Hanya Tersimpan Saat Bot Aktif, Dan Bot Tidak Pernah Menyimpan File-file Yang Anda Kirim

👦 : Min, Ada Fitur Yang Error 😔
🤖 : Jika Menemukan Bug/Error Silahkan Langsung Hubungi Owner/Creator Agar Segera Di Fix 


Tetap Patuhi Rules Agar Tetap Bisa Menikmati Bot 😁

*⚠️ Note :* Segala Ketentuan Dan Kebijakan Yang Berlaku Di Pegang Oleh Owner Bot, Sewaktu-Waktu Owner Berhak Memakai Ataupun Mengubah Kebijakan Dan Ketentuan Yang Berlaku
 
*Thanks To 🙏* Buat Kalian User-User Yang Sudah Memakai Script Ini Dan Pengguna Bot Yang Sudah Mau Mematuhi Rules, Serta Para Constributor Yang Sudah Membantu Dalam Pembuatan Bot Ini 🙏😁
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})