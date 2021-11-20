import { db_menu } from '../lib/db_menu.js';
import { stickers } from './stickers.js';
import fs from 'fs-extra';
import srk from 'wa-sticker-formatter'


export const sticker_menu = {

    async exec({ from, client, pushname, messages, MessageType }) {

        const body = messages.conversation

        if (body === '1'){

            let fs_json = await fs.readJson(`./db/name_sticker/${from}.json`)
            .catch(err => {

                fs.writeJsonSync(`./db/name_sticker/${from}.json`, `${pushname}`)
                console.log(`The ${from}.json file has been created`)
          
            });
            let name_sticker = fs_json ? fs_json : pushname
            let liststicker = stickers[Math.floor(Math.random() * stickers.length)]
            let sticker = new srk.Sticker(liststicker, { type: 'full', pack: name_sticker });
            await sticker.build();
            let bufferImage = await sticker.get();
      
            await client.sendMessage(from, bufferImage, MessageType.sticker).catch((erro) => console.log(erro));
      
        }

        else if (body === '2'){

            let fs_json = await fs.readJson(`./db/name_sticker/${from}.json`)
            .catch(err => {

                fs.writeJsonSync(`./db/name_sticker/${from}.json`, `${pushname}`)
                console.log(`The ${from}.json file has been created`)
          
            });
            let name_sticker = fs_json ? fs_json : pushname
            let sticker_gm3h = [

                'http://bot.rn0x.com/media/sticker/gm3h/1.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/2.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/3.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/4.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/5.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/6.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/7.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/8.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/9.webp',
                'http://bot.rn0x.com/media/sticker/gm3h/10.webp'

            ]


            for (let lop of sticker_gm3h){

                let sticker = new srk.Sticker(lop, { type: 'full', pack: name_sticker });
                await sticker.build();
                let bufferImage = await sticker.get();
                await client.sendMessage(from, bufferImage, MessageType.sticker).catch((erro) => console.log(erro));

            }

            await client.sendMessage(from, 'استمتع بالملصقات الخاصة بك 🎁', MessageType.text);

        }

        else if (body === '3'){

            let fs_json = await fs.readJson(`./db/name_sticker/${from}.json`)
            .catch(err => {

                fs.writeJsonSync(`./db/name_sticker/${from}.json`, `${pushname}`)
                console.log(`The ${from}.json file has been created`)
          
            });
            let name_sticker = fs_json ? fs_json : pushname
            let sticker_sbah = [

                'http://bot.rn0x.com/media/sticker/sbah/1.webp',
                'http://bot.rn0x.com/media/sticker/sbah/2.webp',
                'http://bot.rn0x.com/media/sticker/sbah/3.webp',
                'http://bot.rn0x.com/media/sticker/sbah/4.webp',
                'http://bot.rn0x.com/media/sticker/sbah/5.webp',
                'http://bot.rn0x.com/media/sticker/sbah/6.webp',
                'http://bot.rn0x.com/media/sticker/sbah/7.webp',
                'http://bot.rn0x.com/media/sticker/sbah/8.webp',
                'http://bot.rn0x.com/media/sticker/sbah/9.webp',
                'http://bot.rn0x.com/media/sticker/sbah/10.webp'

            ]

            for (let lop of sticker_sbah){

                let sticker = new srk.Sticker(lop, { type: 'full', pack: name_sticker });
                await sticker.build();
                let bufferImage = await sticker.get();
                await client.sendMessage(from, bufferImage, MessageType.sticker).catch((erro) => console.log(erro));

            }

            await client.sendMessage(from, 'استمتع بالملصقات الخاصة بك 🎁', MessageType.text);

        }

        else if (body === '4'){

            let fs_json = await fs.readJson(`./db/name_sticker/${from}.json`)
            .catch(err => {

                fs.writeJsonSync(`./db/name_sticker/${from}.json`, `${pushname}`)
                console.log(`The ${from}.json file has been created`)
          
            });
            let name_sticker = fs_json ? fs_json : pushname
            let sticker_msa2 = [

                'http://bot.rn0x.com/media/sticker/msa2/1.webp',
                'http://bot.rn0x.com/media/sticker/msa2/2.webp',
                'http://bot.rn0x.com/media/sticker/msa2/3.webp',
                'http://bot.rn0x.com/media/sticker/msa2/4.webp',
                'http://bot.rn0x.com/media/sticker/msa2/5.webp',
                'http://bot.rn0x.com/media/sticker/msa2/6.webp',
                'http://bot.rn0x.com/media/sticker/msa2/7.webp',
                'http://bot.rn0x.com/media/sticker/msa2/8.webp',
                'http://bot.rn0x.com/media/sticker/msa2/9.webp',
                'http://bot.rn0x.com/media/sticker/msa2/10.webp'
            ]

            for (let lop of sticker_msa2){

                let sticker = new srk.Sticker(lop, { type: 'full', pack: name_sticker });
                await sticker.build();
                let bufferImage = await sticker.get();
                await client.sendMessage(from, bufferImage, MessageType.sticker).catch((erro) => console.log(erro));

            }

            await client.sendMessage(from, 'استمتع بالملصقات الخاصة بك 🎁', MessageType.text);

        }

        else if (body === '5'){

            db_menu[from].menu_name = 8;

            let sticker_menu = ' بإنتظار الصورة 🖼️ لتحويلها لملصق 🪧 \n\n\n'
            sticker_menu += '*【 للرجوع للخلف أرسل * 】* \n'
            sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
           
            await client.sendMessage(from, sticker_menu, MessageType.text).catch((erro) => console.log(erro));
        }

        else if (body.startsWith('me') || body.startsWith('Me')){
      
            let name_sticker = body.slice(3)
            let mesg = `تم تغير الحقوق الى ${name_sticker} ✅`
            fs.writeJsonSync(`./db/name_sticker/${from}.json`, name_sticker)
            await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));
            
      
        }

        else if (body === 'hi' || body === 'Hi' || body === 'خدمة' || body === 'خدمه' || body === '#'){

            db_menu[from].menu_name = 0;

            let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
            mesg += 'من فضلك قم بكتابة *رقم* الخدمة ✉️ \n\n\n'
            mesg += '1- قائمة القرآن الكريم 📖 \n'
            mesg += '2- قائمة الأذكار 📿 \n'
            mesg += '3- فيديو عشوائي 🎥 \n'
            mesg += '4- صورة عشوائية 🖼️ \n'
            mesg += '5- قائمة الملصقات 🪧 \n\n\n\n'
            mesg += 'إحصائيات البوت \n'
            mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
            mesg += `عدد جهات الإتصال : ${Object.keys(client.contacts).length}\n\n`
            mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
            mesg += 'يمكنك متابعة البوت على تيليجرام عبر الرابط https://t.me/adhk2r_bot 🤖'  
     
            await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));
     
        }

    }

}
