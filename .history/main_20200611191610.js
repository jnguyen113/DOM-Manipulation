const container = document.querySelector('#container');//references the container id
const content = document.createElement('div');//create a new div and store it into content
content.classList.add('content');//add class and some text to content div
content.createElement('p');
var node = document.createTextNode("This is a paragraph");
content.appendChild(node);
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);//append that div to container

/*
<div id = "div1>
    <p id="p1"> This is paragraph.</p>
</div>
*/
const container = document.querySelector('#container');
var para = document.createElement('p');
var node = document.createTextNode("this is new.");
para.appendChild(node);

var element = document.getElementById('container');
element.appendChild(para);


