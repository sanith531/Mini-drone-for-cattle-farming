
document.getElementById('pastRecordsBtn').addEventListener('click', function() {
    window.location.href = 'past_records.html';
});
// script.js
document.getElementById('aboutBtn').addEventListener('click', function() {
    window.location.href = 'About.html';
});
// script.js
document.getElementById('chatbotButton').addEventListener('click', function() {
    document.getElementById('chatbotContainer').classList.toggle('hidden');
});

document.getElementById('closeChatbot').addEventListener('click', function() {
    document.getElementById('chatbotContainer').classList.add('hidden');
});
// script.js (continued)

// Example function to send a message to the chatbot API
function sendMessage(message) {
    fetch('https://your-chatbot-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        displayMessage('Chatbot', data.reply);
    })
    .catch(error => console.error('Error:', error));
}

// Function to display messages in the chatbot window
function displayMessage(sender, message) {
    const chatbotBody = document.getElementById('chatbotBody');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the bottom
}

// Event listener for sending a message
document.getElementById('sendMessageButton').addEventListener('click', function() {
    const userMessage = document.getElementById('userMessageInput').value;
    if (userMessage.trim()) {
        displayMessage('You', userMessage);
        sendMessage(userMessage);
        document.getElementById('userMessageInput').value = '';
    }
});
