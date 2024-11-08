let count = 0;

document.getElementById('increment').addEventListener('click', () => {
    count+=2;
    document.getElementById('count').innerHTML = count;
});

document.getElementById('decrement').addEventListener('click', () => {
    count--;
    document.getElementById('count').innerHTML = count;
});

document.getElementById('restart').addEventListener('click', () => {
    count = 0;
    document.getElementById('count').innerHTML = count;
});