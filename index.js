const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
function toogleMenu(){
    menuIcon.addEventListener("click", ()=>{
        if(menu.style.display === 'block'){
            menu.style.display = 'none';
        } else{
            menu.style.display = "block"
        }
    })
}
toogleMenu();


document.addEventListener('DOMContentLoaded', () => {

});

const heart = document.querySelector('.heart');
const likes = document.querySelector('.likes');


function renderCard(){
    

}