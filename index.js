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
    getAllPlaces();
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
            <p class="likes">
                <span id="count">${place.likes} likes</span>
                <span class="heart">&nbsp  ❤️</span></p>
            <a href="#"><i id="share" class="fa fa-share-nodes fa-lg"></i></a>

            <form>
                <input class="comments" name="comment" value="" type="text" placeholder="Add a review...">
                <button type="submit" class="submit">Post</button>
            </form>
        </div>
        <div class="review-holder">
            
        </div>
    `   
    const div = card.querySelector('.review-holder')

    place.reviews.forEach((review)=>{
        const p = document.createElement('p');
        p.textContent = review;
        div.appendChild(p);

    })

    card.querySelector('form').addEventListener('submit', (e)=> {
        e.preventDefault();
      
        const p = document.createElement('p');
        const btn = document.createElement ('button');
    
        p.textContent = `${e.target.comment.value} `;
        btn.innerText = 'x';
    
        p.appendChild(btn);
        div.appendChild(p);
    
        btn.addEventListener('click', ()=>p.remove())
        
        card.querySelector('form').reset();
    });

    card.querySelector('.heart').addEventListener('click', ()=>{
        place.likes += 1;
        card.querySelector('#count').textContent = `${place.likes} likes`;
        updateLikes(place);
    })

    columns.appendChild(card);

}

function getAllPlaces(){
    fetch("http://localhost:3000/places")
    .then(res => res.json())
    .then(data=>{
        console.log(data);
        data.forEach(place => {
            renderCard(place);
        });
    })
}

function updateLikes(place){
    fetch(`http://localhost:3000/places/${place.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(place)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
}

document.querySelector('#create-place').addEventListener('submit', (e)=>{
    e.preventDefault();


})

let placeObj = {
    name: e.target.name.value,
    description: e.target.description.value,
    images: e.target.image.value,
    reviews:[],
    likes:0
}

function createPlace(placeObj){
    fetch('http://localhost:3000/places', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(placeObj)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}