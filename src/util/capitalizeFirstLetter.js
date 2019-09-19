/*
Função que transforma primeira letra da palavra em maiúsculo
*/

const capitalizeFisrtLetter = string =>{
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizeFisrtLetter;