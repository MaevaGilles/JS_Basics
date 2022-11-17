alert('BIENVENUE SUR LE BOT DES ADOS');
let blaze = prompt('Quel est ton prénom ?');

console.log(`Ouech ouech ${blaze}! Bien ou quoi ?`);

let user_answer = "";
let exit = false;
while((exit === false))
{
  function acne_bot(answer)
  {
    switch (true){
     case answer === "EXIT": case answer === "Exit": case answer === "exit":
        exit = true;
        alert ("Bye!");
      case answer.slice(-1) === '?':
        alert ("T'en a d'autres des questions de merde ?");
      case answer!=="" && answer === answer.toUpperCase():
        alert ("Hé ho, calmos-débilos...");
      case answer.includes('fortnite'): case answer.includes('Fortnite'):
        alert("C'est pour les gogols ce jeu ! Il va falloir grandir !");
      case answer === "":
        alert ("Je dois appeler tes parents ?");
      default :
        alert ("balek!");
    }
  }

  user_answer = prompt("Tu veux quoi ?")
  let message = acne_bot(user_answer);
  console.log(message);
}
