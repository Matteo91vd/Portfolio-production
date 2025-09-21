import nodemailer from "nodemailer";
import { createEmailTemplate, createConfirmationTemplate } from "./templateEmail.js";

// Configurazione Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Funzione principale per Vercel (DEVE essere export default)
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const result = await handleContactForm(req.body);
        
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        console.error('Errore nella funzione Vercel:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Errore del server' 
        });
    }
}

// Funzione per gestire il form (ora NON export default)
async function handleContactForm(formData) {
    const { nome, email, messaggio } = formData;
    
    try {
        // Validazione
        const validation = validateFormData({ nome, email, messaggio });
        if (!validation.isValid) {
            return {
                success: false,
                message: validation.error
            };
        }
        
        // Log del messaggio ricevuto
        console.log('Nuovo messaggio da:', nome, '(' + email + ')');
        
        // Invia email a te
        await sendEmailToYou({ nome, email, messaggio });
        
        return {
            success: true,
            message: 'Messaggio inviato con successo! Ti risponderò presto.'
        };
        
    } catch (error) {
        console.error('Errore nel processare il form:', error);
        return {
            success: false,
            message: 'Errore del server. Riprova più tardi.'
        };
    }
}

// Validazione dati form (ora function normale)
function validateFormData({ nome, email, messaggio }) {
    if (!nome || !email || !messaggio) {
        return {
            isValid: false,
            error: 'Tutti i campi sono obbligatori'
        };
    }
    
    if (nome.length < 2) {
        return {
            isValid: false,
            error: 'Il nome deve avere almeno 2 caratteri'
        };
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            error: 'Email non valida'
        };
    }
    
    if (messaggio.length < 10) {
        return {
            isValid: false,
            error: 'Il messaggio deve avere almeno 10 caratteri'
        };
    }
    
    return { isValid: true };
}

// Invia email a te (ora function normale)
async function sendEmailToYou({ nome, email, messaggio }) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.YOUR_EMAIL, // Assicurati di aver aggiunto questa variabile in Vercel
        subject: `Nuovo messaggio dal Portfolio - ${nome}`,
        html: createEmailTemplate({ nome, email, messaggio })
    };
    
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email inviata alla tua casella');
    } catch (error) {
        console.error('Errore invio email:', error);
        throw error;
    }
}