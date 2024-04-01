// Armazenando apenas dados de mensagens
const messages = [
  {
    id: '1',
    text: 'Primeira mensagem enviada',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    text: 'Segunda mensagem enviada',
    timestamp: new Date().toISOString(),
  },
  {
    id: '3',
    text: 'Terceira mensagem enviada',
    timestamp: new Date().toISOString(),
  },
  // Adicione mais mensagens conforme necessário
];

module.exports = {
  messages,
};
