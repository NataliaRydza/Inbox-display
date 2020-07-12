import Handlebars from 'handlebars';
import './index.html';
import './style.css';

const inboxElm = document.querySelector('h1');
inboxElm.textContent = 'Inbox funguje';

const message = {
  sender: 'Milan Kouhoutek',
  subject: 'Nabídka spolupráce',
  date: 'po 13. března',
  time: '8:45',
};

const messageTemplate = Handlebars.compile(document.querySelector('#inboxMessage').innerHTML);

const renderMessage = (message) => {
  let messageElm = document.createElement('div');
  messageElm.innerHTML = messageTemplate(message);
  return messageElm.children[0]
}

const detailsElm = document.querySelector('.messageDetails');
const detailsRendered = renderMessage(message)
console.log(detailsElm)
detailsElm.appendChild(detailsRendered)

