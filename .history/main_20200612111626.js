const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');
// changeColor.addEventListener('click', function(){
//     text.classList.toggle("change");
// })
const addListButton = document.querySelector(".addListButton");
const listInput = document.querySelector('.list-input');
const userList = document.querySelector('.name-list');
    console.log(userList);
for(user of userList){
    user.addEventListener('click',function(){
        this.style.color = 'red';
    });
}

addListButton.addEventListener('click',function(){
    //create an li out of thin air
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);

    //add the input value inside that new li
    newLi.appendChild(liContent);
    //attaching the li to the user list
    userList.appendChild(newLi)
});
console.log(listInput.value);
text.style.color = 'red';
text.style.backgroundColor = 'blue';
text.classList.add("change");