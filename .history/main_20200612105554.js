const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');
changeColor.addEventListener('click', function(){
    text.classList.add("change");
})

text.style.color = 'red';
text.style.backgroundColor = 'blue';
text.classList.add("change");