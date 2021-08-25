let films = ['Titanic', 'Harry Potter', 'Star Wards', 'Tenet'];
let series = ['GOT', 'Limitless', 'The Boys', 'The expanse'];
let livres = ['Lotr', 'Cyrano De Bergerac', 'Comment paraître plus intelligent', 'Twilight'];
let pick = '';

let spoilsFilms = ['Jack meurt', 'C\'est mort je spoil pas', 'Dark Vador meurt', 'Robert meurt']
let spoilsSeries = ['Les Starks meurent', 'Un gars dedans meurt', 'La nazi meurt', 'ça meurt beaucoup']
let spoilsLivres = ['Gandalf meurt', 'Big Nose meurt', 'ça ne marche pas', 'Les méchants meurts']
let spoil = '';


let randomNum = 0;
function random(pick, spoilPick){
    let random = Math.floor(Math.random() * pick.length);
    let randomFilm = pick[random];
    let filmTitre = document.getElementById('filmTitre');
    let filmSpoil = document.getElementById('filmSpoil');
    filmSpoil.innerHTML='';
    filmTitre.innerHTML=randomFilm;
    pick=randomFilm;
    spoil = spoilPick;
    randomNum = random;
}

function divulguacheRandom(pick, spoil, randomNum){
    let randomFilmSpoil = spoil[randomNum];
    let filmSpoil = document.getElementById('filmSpoil');
    filmSpoil.innerHTML=randomFilmSpoil;
    console.log(film);
}