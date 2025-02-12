let count = 0;

function setup() {
    const gameArea = document.getElementById('gameArea');
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    button.onclick = () => {
        count++;
        button.textContent = `Clicked ${count} times!`;
    };
    gameArea.appendChild(button);
}

window.onload = setup;
