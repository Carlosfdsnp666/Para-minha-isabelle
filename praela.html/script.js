const gallery = document.getElementById('gallery');
const phraseContainer = document.getElementById('phrase-container');
const showPhraseButton = document.getElementById('show-phrase-btn');

const photoNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const phrases = [
    'Cada momento contigo é um sonho realizado.',
    'Você é a razão do meu sorriso todos os dias.',
    'Nossas histórias se entrelaçam como um conto de fadas, e eu mal posso esperar para descobrir os capítulos futuros ao seu lado.',
    'Você me faz sentir vivo, mesmo estando morto por dentro.',
    'Em seus olhos, eu encontro conforto e nos seus braços, encontro meu lar.',
    'Seu amor é o presente mais precioso que já recebi. Não há palavras para descrever o quanto você significa para mim.',
    'Com você, descobri o verdadeiro significado do amor, e cada dia é uma nova página desse livro incrível que estamos escrevendo juntos.'

];

let currentPhotoIndex = 0;

function getPhotoUrl(photoName) {
    // Construa a URL completa da imagem com base no nome do arquivo na pasta "imagens"
    return `images/${photoName}`;
}

function showPhoto(index) {
    const imageUrl = getPhotoUrl(photoNames[index]);
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Imagem romântica';
    gallery.innerHTML = ''; // Limpa a galeria antes de adicionar uma nova imagem
    gallery.appendChild(img);
}

function showRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseContainer.textContent = phrases[randomIndex];
}

// Mostra a primeira imagem e frase ao carregar o site
showPhoto(currentPhotoIndex);
showRandomPhrase();

// Altera a imagem quando o botão é clicado
showPhraseButton.addEventListener('click', function() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoNames.length;
    showPhoto(currentPhotoIndex);
    showRandomPhrase();
});
