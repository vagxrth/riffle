// Importing ChatHandler and chat_names from external module
import { ChatHandler, chat_names } from './ChatHandler.js';

// Function to authenticate user
function authenticateUser() {
    const password = prompt("Please enter the password:");
    // Add your authentication logic here
    if (password === "dsaproject") {
        // Call the function to generate chat messages after successful authentication
        generateChatMessages();
    } else {
        alert("Invalid password. Please try again.");
    }
}

// Function to generate chat messages after successful authentication
function generateChatMessages() {
    const chatlist = document.getElementById('chat-list');
    const add = document.getElementById('generate-step');
    const text = document.getElementById('temptext');

    const templates = document.getElementsByTagName('template')[0];
    const chat_item = templates.content.querySelector("li");

    const chatHandler = new ChatHandler(chat_item, chatlist);
    let chats = [];

    add.onclick = function () {
        if(Math.random()>0.75 && chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            let idToDelete = chats[index];
            chatHandler.deleteMsg(idToDelete);
            text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
                chats.splice(index, 1);
        } else{
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            chatHandler.newMsg(idOfMsg);
            text.innerHTML = "New message from "+chat_names[idOfMsg] + "<br>" + text.innerHTML;
        }
    };
}

// Call the authenticateUser function when the page loads
window.onload = function() {
    authenticateUser();
};
