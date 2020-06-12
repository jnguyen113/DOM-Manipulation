const container = document.querySelector('#container');//references the container id
const content = document.createElement('div');//create a new div and store it into content
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);