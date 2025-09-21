// Template email principale
function createEmailTemplate({ nome, email, messaggio }) {
    
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                💼 Nuovo Messaggio dal Portfolio
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p><strong>👤 Nome:</strong> ${nome}</p>
                <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>🕐 Data:</strong> ${new Date().toLocaleString('it-IT')}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">💬 Messaggio:</h3>
                <p style="line-height: 1.6; color: #555;">${messaggio}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}?subject=Re: Messaggio dal Portfolio" 
                   style="background-color: #007bff; color: white; padding: 12px 25px; 
                          text-decoration: none; border-radius: 5px; display: inline-block;">
                    📩 Rispondi Direttamente
                </a>
            </div>
            
            <hr style="border: 1px solid #eee; margin: 30px 0;">
            <p style="color: #888; font-size: 12px; text-align: center;">
                Messaggio ricevuto dal portfolio matteo91vd.com
            </p>
        </div>
    `;
}

// Template email di conferma
function createConfirmationTemplate(nome) {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #28a745;">✅ Messaggio Ricevuto!</h2>
            
            <p>Ciao <strong>${nome}</strong>,</p>
            
            <p>Grazie per avermi contattato tramite il mio portfolio! 🎉</p>
            
            <div style="background-color: #d4edda; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745;">
                <p><strong>Il tuo messaggio è stato ricevuto con successo.</strong></p>
                <p>Ti risponderò al più presto a questo indirizzo email.</p>
            </div>
            
            <p>Nel frattempo, puoi:</p>
            <ul>
                <li>📱 Contattarmi su <a href="https://linkedin.com/in/tuoprofilo">LinkedIn</a></li>
                <li>📧 Scrivermi direttamente a: matteo91vd@gmail.com</li>
                <li>👨‍💻 Vedere i miei progetti su <a href="https://github.com/tuoprofilo">GitHub</a></li>
            </ul>
            
            <p>Grazie ancora per l'interesse!</p>
            
            <p>
                Cordiali saluti,<br>
                <strong>Matteo</strong>
            </p>
            
            <hr style="border: 1px solid #eee; margin: 30px 0;">
            <p style="color: #888; font-size: 12px;">
                Questa è una conferma automatica. Non rispondere a questa email.
            </p>
        </div>
    `;
};

module.exports = { createEmailTemplate, createConfirmationTemplate };
