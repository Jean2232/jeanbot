let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
      case 'interacoes':
        chat.interacoes = isEnable
        break
    case 'delete':
      chat.delete = isEnable
      break
     case 'antidelete':
      chat.delete = !isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    default:
      return m.reply(`
Opções: welcome | delete | interacoes

Exemplo:
${usedPrefix}ativar welcome
${usedPrefix}desativar welcome
`.trim())
  }
  m.reply(`Feito!`.trim())
}
handler.help = ['ativar welcome', 'desativar welcome', 'ativar interacoes', 'desativar interacoes']
handler.tags = ['interruptores', 'owner']
handler.command = /^((a|desa)tivar|(turn)?o(n|ff))$/i

module.exports = handler
