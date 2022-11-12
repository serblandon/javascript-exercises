const p1 = document.createElement('p');

p1.textContent = "Hey, i'm red!";

p1.style.color = 'red';

const element = document.querySelector('#container');

element.appendChild(p1);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
element.appendChild(h3);

const div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
div.classList.add('newdiv');

const h1 = document.createElement("h1");
h1.textContent = "i'm a div";

const p2 = document.createElement("p");
p2.textContent = "ME TOO";

div.appendChild(h1);
div.appendChild(p2);

//adding div after adding those 2 to it
element.appendChild(div);
