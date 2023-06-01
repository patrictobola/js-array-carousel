// Recupero dal DOM l'elemento dove voglio inserire le foto
const gallery = document.getElementById('gallery')
// Recupero i bottoni da cliccare nel DOM 
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
// Creo una lista di immagini
const pictures = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]

// Mettiamo le immagini nel DOM 
for (i = 0; i < pictures.length; i++){
    const imageElement = document.createElement('img');
    imageElement.src = pictures[i];
    imageElement.alt = `Foto numero ${i + 1}`
    gallery.appendChild(imageElement)
}

// Mi aiuto con un index 0 per visualizzare la prima foto ed eventualmente cambiare le altre
let currentIndex = 0;

// Recupero tutte le immagini così da averle dentro un array 
const images = document.querySelectorAll('img');

// Permetto alla (prima foto in questo caso) di essere visualizzata aggiungendo la classe active  
images[currentIndex].classList.add('active');