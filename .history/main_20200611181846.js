const container = document.querySelector('#container');//references the container id
const content = document.createElement('div');//create a new div and store it into content
content.classList.add('content');//add class and some text to content div
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);//append that div to container

/*
<div id = "div1>"


