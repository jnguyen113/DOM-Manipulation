const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');
changeColor.addEventListener('click', function(){
    text.classList.toggle("change");
})
const userList = document.querySelectorAll('.name')
text.style.color = 'red';
text.style.backgroundColor = 'blue';
text.classList.add("change");