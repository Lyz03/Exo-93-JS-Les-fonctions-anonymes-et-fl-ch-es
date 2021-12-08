const alertButton = document.getElementById('alert');
const somme = document.getElementById('somme');


window.addEventListener("keypress", event => {
    if (event.key === 'Enter') {
        alert('Hello world');
        alertButton.className = 'pink'
    }
})

alertButton.addEventListener("click", (event) => {
    alert('Hello world');
    event.target.className = 'pink'
});

somme.addEventListener("click", event => {
    let newDiv = document.createElement('div');
    newDiv.innerText = (5 + 6).toString();
    document.querySelector('div').appendChild(newDiv)
    event.target.className = 'pink';
});

alertButton.addEventListener('mouseenter', event => {
    event.target.className = 'violet';
});

somme.addEventListener('mouseenter', event => {
    event.target.className = 'violet';
});

alertButton.addEventListener('mouseleave', event => {
    event.target.className = 'blue';
});

somme.addEventListener('mouseleave', event => {
    event.target.className = 'blue';
});