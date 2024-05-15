

//Creo un array con gli elementi della lista della spesa

const listaSpesa = [ 'latte', 'pasta', 'cioccolato', 'scalogno', 'melanzane'];

//Creo una variabile per richiamare il contenitore nel DOM

const UlElement = document.querySelector('ul');

//Inserisco la variabile con l'indice

let i = 0;


//Creo il ciclo while per portare tutti gli elementi come <li> nell'html

while (i < listaSpesa.length) {
    const LiElement = document.createElement('li');
    LiElement.append(listaSpesa[i]);
    UlElement.appendChild(LiElement);
    i = i + 1;
}

