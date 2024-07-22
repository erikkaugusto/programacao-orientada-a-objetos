const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user); // primeiro parâmetro é o objeto que vai herdar propriedades e o segundo é o que vai ceder propriedades
admin.criarCurso();
admin.exibirInfos();