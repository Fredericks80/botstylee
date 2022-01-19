let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Indosat [085658333893]
│ • Gopay [085658333893]
│ • Dana [085658333893]
│ • Saweria [https://saweria.co/mangtaf]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6289512339018
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
