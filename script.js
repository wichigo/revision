let films = ['Titanic', 'GOT', 'Harry Potter', 'Star Wards'];
let spoils = ['Jack meurt', 'Les Starks meurent', 'C\'est mort je spoil pas', 'Dark Vador meurt']
let film = '';
let randomNum = 0;
function random(films){
    let random = Math.floor(Math.random() * films.length);
    let randomFilm = films[random];
    let filmTitre = document.getElementById('filmTitre');
    filmTitre.innerHTML=randomFilm;
    film=randomFilm;
    randomNum = random;
}

function divulguacheRandom(film, spoils, randomNum){
    let randomFilmSpoil = spoils[randomNum];
    let filmSpoil = document.getElementById('filmSpoil');
    filmSpoil.innerHTML=randomFilmSpoil;
    console.log(film);
}