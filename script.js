// Função para enviar a mensagem do chat
document.getElementById("send-btn").addEventListener("click", function() {
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value.trim();

    if (message) {
        const chatBox = document.getElementById("chat-box");

        // Criando um novo elemento de mensagem
        const newMessage = document.createElement("p");
        newMessage.textContent = message;

        // Adicionando a nova mensagem no chat
        chatBox.appendChild(newMessage);

        // Rolando o chat para o final
        chatBox.scrollTop = chatBox.scrollHeight;

        // Limpando o campo de entrada
        chatInput.value = "";
    }
});

// Função para permitir que pressione Enter para enviar a mensagem
document.getElementById("chat-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("send-btn").click();
    }
});
