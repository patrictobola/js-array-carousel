// Recupero dal DOM l'elemento dove voglio inserire le foto
const gallery = document.getElementById('gallery')
// Recupero dal DOM l'elemento dove voglio inserire le foto del thumbnails
const thumbnails = document.getElementById('thumbnails')

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

// Mettiamo le immagini nel DOM in gallery
for (i = 0; i < pictures.length; i++){
    const imageElement = document.createElement('img');
    imageElement.src = pictures[i];
    imageElement.alt = `Foto numero ${i + 1}`
    gallery.appendChild(imageElement)
}

// Mi aiuto con un index 0 per visualizzare la prima foto ed eventualmente cambiare le altre
let currentIndex = 0;

// Recupero tutte le immagini così da averle dentro un array 
const images = gallery.querySelectorAll('img');

// Permetto alla (prima foto in questo caso) di essere visualizzata aggiungendo la classe active  
images[currentIndex].classList.add('active'); 

// Al click del bottone 'avanti'
nextBtn.addEventListener('click', function(){
    if (currentIndex === pictures.length - 1) {
        images[currentIndex].classList.remove('active');
        currentIndex = 0;
        images[currentIndex].classList.add('active');
    }
    else if (currentIndex < pictures.length){
        images[currentIndex].classList.remove('active'); 
        currentIndex ++;
        images[currentIndex].classList.add('active'); 
    }
})
// Al click del bottone 'indetro'
prevBtn.addEventListener('click', function(){
    if (currentIndex === 0) {
        images[currentIndex].classList.remove('active');
        currentIndex = images.length - 1;
        images[currentIndex].classList.add('active');
    }
    else if (currentIndex > 0){
        images[currentIndex].classList.remove('active'); 
        currentIndex -- ;
        images[currentIndex].classList.add('active'); 
    }
})



// Mettiamo le immagini nel DOM in thumbnails
for (i = 0; i < pictures.length; i++){
    const imageElement = document.createElement('img');
    imageElement.src = pictures[i];
    imageElement.alt = `Foto numero ${i + 1}`
    imageElement.classList.add('active')
    thumbnails.appendChild(imageElement)
}