// Importa solo la funzione di gestione form
const { handleContactForm } = require('../form'); // o il percorso corretto

export default async function handler(req, res) {
  // Vercel gestisce automaticamente CORS e parsing JSON
  
  if (req.method === 'POST') {
    try {
      const result = await handleContactForm(req.body);
      
      if (result.success) {
        console.log('✅ Form processato con successo');
        res.status(200).json(result);
      } else {
        console.log('⚠️ Errore validazione:', result.message);
        res.status(400).json(result);
      }
    } catch (error) {
      console.error('❌ Errore server:', error);
      res.status(500).json({ success: false, message: 'Errore interno server' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}