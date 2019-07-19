import io from 'socket.io-client';
import './styles.css';

const refs = {
  nametag: document.querySelector('.nametag'),
  editor: document.querySelector('.message-editor'),
  feed: document.querySelector('.message-feed'),
};

const socket = io('ws://localhost:3000');
const userName = prompt('Username?', '') || 'Anonymous';

appendJoinedMessage(userName);

socket.on('connected', chatHistory => {
  const markup = chatHistory
    .map(entry => `<li><b>${entry.userName}</b>: ${entry.message}</li>`)
    .join('');

  refs.feed.insertAdjacentHTML('beforeend', markup);
});

socket.on('chat-message', appendMessageToFeed);
refs.editor.addEventListener('submit', editorSubmitHandler);

function editorSubmitHandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.message;

  if (input.value.trim() === '') {
    alert('Введи сообщение, животное!');
    return;
  }

  const payload = {
    userName,
    message: input.value,
  };

  socket.emit('chat-message', payload);
  appendMessageToFeed(payload);
  form.reset();
}

function appendJoinedMessage(name) {
  refs.nametag.insertAdjacentHTML(
    'afterbegin',
    `<span>Joined chat as <b>${name}</b></span>`,
  );
}

function appendMessageToFeed({ userName, message }) {
  refs.feed.insertAdjacentHTML(
    'beforeend',
    `<li><b>${userName}</b>: ${message}</li>`,
  );
}
