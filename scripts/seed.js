const { db } = require('@vercel/postgres');
const { messages } = require('../app/lib/placeholder-data.js');

async function seedMessages(client) {
  try {
    // Create the "messages" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log(`Created "messages" table`);

    // Insert data into the "messages" table
    const insertedMessages = await Promise.all(
      messages.map(
        (message) => client.sql`
          INSERT INTO messages (text, timestamp)
          VALUES (${message.text}, ${message.timestamp})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedMessages.length} messages`);

    return {
      createTable,
      messages: insertedMessages,
    };
  } catch (error) {
    console.error('Error seeding messages:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedMessages(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
