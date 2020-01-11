(() => {
    let lightIcon, buttonA, buttonB;

    window.addEventListener('load', () => {
        lightIcon = document.getElementById('lightIcon');
        buttonA = document.getElementById('buttonA');
        buttonB = document.getElementById('buttonB');

        buttonA.addEventListener('click', updateLight);
        buttonB.addEventListener('click', updateLight);
    });

    const updateLight = () => {
        const valueA = buttonA.checked,
            valueB = buttonB.checked;

        lightIcon.className = valueA ^ valueB ? 'far fa-lightbulb' : 'fas fa-lightbulb';
    }
})();
