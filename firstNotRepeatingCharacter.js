function firstNotRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    //console.log(`${str[i]} ${str.charAt(i)}`)
    let char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return "-";
}

console.log(firstNotRepeatingCharacter("Shashank Chikattimala"));

function firstNotRepeatingCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    // verificando qual charactere está naquela posição "i" cada vez que passa no loop
    var char = string.charAt(i);
    // se esse caractere estiver na string setamos ele pra ser
    if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
      // se o index do caractere que estamos no momento for igual ao index ("i") no loop
      // E
      // se o caractere que estamos procurando não existe na frente dele não precisamos nos preocupar com o "d" pois ele
      // retorna o primeiro que ele encontra que nao exista a frente dele
      return char;
    }
  }
  return "_";
}

console.log(firstNotRepeatingCharacter("Shashank Chikattimala"));
