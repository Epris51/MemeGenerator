const form = document.querySelector('#meme-form');
const memeContainer = document.querySelector('#meme-container');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const topText = document.querySelector('#top-text').value;
    const bottomText = document.querySelector('#bottom-text').value;
    const imageUrl = document.querySelector('#image-url').value;

    if (!topText || !bottomText || !imageUrl) {
        alert('Please fill out all fields');
        return;
    }

    const memeWrapper = document.createElement('div');
    memeWrapper.classList.add('meme-wrapper');

    const memeImage = document.createElement('img');
    memeImage.src = imageUrl;

    const memeTopText = document.createElement('div');
    memeTopText.classList.add('meme-text', 'top-text');
    memeTopText.innerText = topText;

    const memeBottomText = document.createElement('div');
    memeBottomText.classList.add('meme-text', 'bottom-text');
    memeBottomText.innerText = bottomText;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'X';
    removeButton.addEventListener('click', function() {
        memeWrapper.remove();
    });

    memeWrapper.appendChild(memeImage);
    memeWrapper.appendChild(memeTopText);
    memeWrapper.appendChild(memeBottomText);
    memeWrapper.appendChild(removeButton);

    memeContainer.appendChild(memeWrapper);

    form.reset();
});



