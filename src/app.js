
const name = 'world';
console.log(`Hello ${name}`);
if (!!document.getElementById('disco')) {
    document.getElementById("disco").onclick = function () {
        console.log("Carátula del disco");
    }
}

// Añadimos a app.js el lazy loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
    });

} else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
}

