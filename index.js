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

const columns = document.querySelector('.columns');
const heart = document.querySelector('.heart');
const likes = document.querySelector('.likes');


function renderCard(place){
    let card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
        <h4>${place.description}</h4>
        <div class="card-image">
            <img class="image" src="${place.images}">
        </div>
        <div class="reviews">
            <p class="likes">${place.likes} likes<span class="heart">&nbsp  ❤️</span></p>
            <a href="#"><i id="share" class="fa fa-share-nodes fa-lg"></i></a>

            <form>
                <input class="comments" name="comment" value="" type="text" placeholder="Add a review...">
                <button type="submit" class="submit">Post</button>
            </form>
        </div>
        <div class="review-holder">
            <p>${place.reviews}</p>
        </div>
    `   
    columns.appendChild(card);
}

