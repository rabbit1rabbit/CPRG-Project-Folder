let currentNumber = 0;

        function updateNumber() {
            currentNumber++;
            updateButton();
        }

        function updateButton() {
            const button = document.getElementById('btn-counter');
            button.textContent = currentNumber;

            if (currentNumber % 2 === 0) {
                button.className = 'even';
            } else {
                button.className = 'odd';
            }}

document.getElementById('footer').textContent = new Date().getFullYear();

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText ='GET OFF OF ME';
}

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText ='HOVER OVER ME';
}