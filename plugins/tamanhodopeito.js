let handler = async (m, { conn, command, text }) => {
    random = `${Math.floor(Math.random() * 32)}`
    conn.reply(m.chat, `
    😏😏😏 tamanho do peito de ${text}: ${random}cm 😏😏😏
    `.trim(), m, m.mentionedJid ? {
        contextInfo: {
          mentionedJid: m.mentionedJid
        }
      } : {})
    }
    handler.help = ['tamanhodopeito <@membro>']
    handler.tags = ['kerang']
    handler.command = /^tamanhodopeito$/i
    handler.owner = false
    handler.mods = false
    handler.premium = false
    handler.group = false
    handler.private = false
    
    handler.admin = false
    handler.botAdmin = false
    
    handler.fail = null
    
    module.exports = handler
    
    function pickRandom(list) {
      return list[Math.floor(Math.random() * list.length)]
    }
    