import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// novoUser.#nome = 'Márcia'; // erro - não tem como trocar uma variável private
// novoUser.#email = 'x@x.com';

// console.log(novoUser.#montaObjUser()); // ao chamar uma função privada também dá erro 

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.nome); // GET
novoAdmin.nome = 'Erik'; // SET
console.log(novoAdmin.nome); 


