document.addEventListener('DOMContentLoaded', () => {

    function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.fontSize = Math.random() * 14 + 9 + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);

    }

    setInterval(createSnowflake, 125);
});
