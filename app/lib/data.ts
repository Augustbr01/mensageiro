import { sql } from '@vercel/postgres';
import { MessageTable } from './definitions'; // Importando o tipo MessageTable

export async function sendMessage(text: string) {
  try {
    // Insere a mensagem na tabela de mensagens, não incluindo o campo id
    await sql<MessageTable>`INSERT INTO messages (text) VALUES (${text})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to send the message.');
  }
}

export async function fetchMessages() {
  try {
    // Retorna todas as mensagens da tabela de mensagens
    const data = await sql<MessageTable>`SELECT * FROM messages ORDER BY id`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch messages.');
  }
}

export async function fetchMessageById(id: string) {
  try {
    // Retorna uma mensagem específica baseada no ID
    const data = await sql<MessageTable>`SELECT * FROM messages WHERE id = ${id}`;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch message.');
  }
}
