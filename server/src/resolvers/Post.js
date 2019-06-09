const op = (parent, args, context) => context.prisma.post({id: parent.id}).op()

const likes = (parent, args, context) =>
  context.prisma.post({id: parent.id}).likes()

module.exports = {
  op,
  likes,
}
