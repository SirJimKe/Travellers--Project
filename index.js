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