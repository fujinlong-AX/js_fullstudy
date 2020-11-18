module.exports = {
  index: async (ctx) => {
    ctx.body = 'Ctrl Index'
  },
  detail: async () => {
    ctx.body = 'Ctrl Detail'
  }
}