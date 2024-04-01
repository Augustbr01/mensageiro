import { sql } from '@vercel/postgres';
import { MessageTable } from './definitions'; // Importando o tipo MessageTable
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const client = new sql.Client({ connectionString: process.env.POSTGRES_URL });

export async function sendMessageToDatabase(text: string): Promise<void> {
  try {
    await sql<MessageTable>`INSERT INTO messages (text) VALUES (${text})`;
    console.log('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message.');
  }
}

export async function fetchMessagesFromDatabase(): Promise<MessageTable[]> {
  try {
    const data = await sql<MessageTable>`SELECT * FROM messages ORDER BY id`;
    return data.rows;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw new Error('Failed to fetch messages.');
  }
}

export async function fetchMessageById(id: string): Promise<MessageTable> {
  try {
    const data = await sql<MessageTable>`SELECT * FROM messages WHERE id = ${id}`;
    return data.rows[0];
  } catch (error) {
    console.error('Error fetching message:', error);
    throw new Error('Failed to fetch message.');
  }
}
