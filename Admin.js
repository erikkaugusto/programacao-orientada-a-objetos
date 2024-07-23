import User from "./User.js";

class Admin extends User { // Classe admin herda/se estende de User
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo); // User é um superclasse de Admin e Admin é uma subclasse de User
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.criarCurso('JS', 20));
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());