export default class Funcionario {
    #cpf
    constructor(nome, matricula, cpf, endereco, telefones){
        this.nome = nome
        this.matricula = matricula
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = telefones
    }
    get cpf(){
        return this.#cpf
    }
}