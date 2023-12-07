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


