const container = document.getElementById('container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    for (let i = 1; i <= 905; i++) {
        const div = document.createElement('div');
        div.classList.add('pokemon');
        const newImg = document.createElement('img');
        newImg.src = (`${baseURL}${i}.png`);
        const span = document.createElement('span');
        span.innerText = `#${i}`;

        container.appendChild(div);
        div.appendChild(newImg);
        div.appendChild(span);
    }
