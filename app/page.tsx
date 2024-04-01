import { useState } from 'react';
import { sendMessageToDatabase } from '../app/lib/data'; // Importando a função sendMessageToDatabase

export default function Page() {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      await sendMessageToDatabase(message);
      setMessage('');
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-blue-500 p-4 md:h-52">
        <h1 className="text-white text-3xl md:text-5xl font-bold">Mensageiro</h1>
      </div>
      <div className="mt-4 flex-grow flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button
            className="bg-blue-500 text-white rounded-md py-2 px-4 font-semibold transition-colors hover:bg-blue-400"
            onClick={handleSendMessage}
          >
            Enviar
          </button>
        </div>
      </div>
    </main>
  );
}
