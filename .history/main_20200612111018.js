const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');
// changeColor.addEventListener('click', function(){
//     text.classList.toggle("change");
// })
const listInput = document.querySelector('.list-input');
const userList = document.querySelectorAll('.name-list li');
    console.log(userList);
for(user of userList){
    user.addEventListener('click',function(){
        this.style.color = 'red';
    });
}

console.log(listInput.value)
text.style.color = 'red';
text.style.backgroundColor = 'blue';
text.classList.add("change");