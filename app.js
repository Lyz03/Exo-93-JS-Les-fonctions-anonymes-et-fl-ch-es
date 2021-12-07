const alertButton = document.getElementById('alert');
const somme = document.getElementById('somme');

alertButton.addEventListener("click", (event) => {
    alert('Hello world');
    event.target.style.color = 'red'
});

somme.addEventListener("click", event => {
    let newDiv = document.createElement('div');
    newDiv.innerText = (5 + 6).toString();
    document.querySelector('div').appendChild(newDiv)
    event.target.style.color = "red";
});

alertButton.addEventListener('mouseenter', event => {
    event.target.style.color = 'green'
});

somme.addEventListener('mouseenter', event => {
    event.target.style.color = 'green'
});

alertButton.addEventListener('mouseleave', event => {
    event.target.style.color = 'blue'
});

somme.addEventListener('mouseleave', event => {
    event.target.style.color = 'blue'
});