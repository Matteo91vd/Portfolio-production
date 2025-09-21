const nodemailer = require("nodemailer");
// const fs = require('fs');
// const path = require('path');
require("dotenv").config();
const { createEmailTemplate, createConfirmationTemplate } = require("./templateEmail");

// Configurazione Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verifica configurazione email all'avvio
// transporter.verify((error, success) => {
//     if (error) console.log('❌ Errore configurazione email:', error);

//     else console.log('✅ Server email pronto per inviare messaggi');
// });

// Funzione principale per gestire il form
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
        console.log('📧 Nuovo messaggio da:', nome, '(' + email + ')');
        
        // Salva messaggio 
        // await saveMessage({ nome, email, messaggio });
        
        // Invia email a te
        await sendEmailToYou({ nome, email, messaggio });
        
        // Invia conferma al mittente
        // await sendConfirmationEmail({ nome, email });
        
        return {
            success: true,
            message: 'Messaggio inviato con successo! Ti risponderò presto.'
        };
        
    } catch (error) {
        console.error('❌ Errore nel processare il form:', error);
        return {
            success: false,
            message: 'Errore del server. Riprova più tardi.'
        };
    };
};

// Validazione dati form
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
};

// Invia email a te
async function sendEmailToYou({ nome, email, messaggio }) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.YOUR_EMAIL,
        subject: `💼 Nuovo messaggio dal Portfolio - ${nome}`,
        html: createEmailTemplate({ nome, email, messaggio })
    };
    
    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Email inviata alla tua casella');
    } catch (error) {
        console.error('❌ Errore invio email:', error);
        throw error;
    }
};

// Invia email di conferma al mittente
// async function sendConfirmationEmail({ nome, email }) {
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: '✅ Messaggio ricevuto - Matteo Portfolio',
//         html: createConfirmationTemplate(nome)
//     };
    
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('✅ Email di conferma inviata a:', email);
//     } catch (error) {
//         console.error('❌ Errore invio conferma:', error);
//         // Non bloccare il processo per questo errore
//     }
//};

module.exports = {handleContactForm};