const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) 
    {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() 
    {
        const combinado = [...this.civilImages];
        return combinado[Math.floor(Math.random() * combinado.length)];
    }
    
    getRandomMilitary() 
    {
        const combinado = [...this.militaryImages];
        return combinado[Math.floor(Math.random() * combinado.length)];
    }
    
    getAll() 
    {
        return [...this.civilImages, ...this.militaryImages];
    }
}

class Painter {
    constructor() 
    {
        this.createGallery();
    }

    createGallery() 
    {
        this.gallery = document.createElement('section');
        this.gallery.id = "gallery";
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        const picture = document.createElement('picture');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Vehicle";
        picture.appendChild(img);
        return picture;
    }

    paintSingleImage(imageUrl) {
        const imageElement = this.createImageTag(imageUrl);
        this.gallery.appendChild(imageElement);
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(img => this.paintSingleImage(img));
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

