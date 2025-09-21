document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", async function(e) {
        e.preventDefault();
        
        //recupero dati da form
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        //messaggi di invio ed errore
        const okMessage = document.querySelector("span.message-form-ok");
        const errorMessage = document.querySelector("span.message-form-error");

        try {
            const response = await fetch("api/contact", {  
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                okMessage.style.display = "inline";
                this.reset();
            } else {
                // alert("Errore: " + result.message);
                errorMessage.style.display = "inline";
            }
        } catch (error) {
            alert("Errore di connessione");
        }
        
        //pulizia messaggio form
        setTimeout( () => {
            okMessage.style.display = "none";
            errorMessage.style.display = "none";
        }, 5000);
    });
});