const container = document.querySelector('#container');//references the container id
const content = document.createElement('div');//create a new div and store it into content
content.classList.add('content');//add class and some text to content div
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);//append that div to container

const anything = document.querySelector("Container");
const inmy = document.createElement('div');
inmy.classList.add('yo');
content.textContent = 'yo this is sick';
container.appendChild(inmy);

