const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');
changeColor.addEventListener('click', function(){
    text.classList.toggle("change");
})
const userList = document.querySelectorAll('.name-list li');
for(user of userList){
    user.addEventListener('click',function(){

    });
});
text.style.color = 'red';
text.style.backgroundColor = 'blue';
text.classList.add("change");