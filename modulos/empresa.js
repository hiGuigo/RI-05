export default class Empresa {
    #cnpj
    constructor(social, fantasia, cnpj, endereco, telefones, funcionarios){   
        this.social = social
        this.fantasia = fantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.telefones = telefones
        this.funcionarios = funcionarios
    }
    get cnpj(){
        return this.#cnpj
    }
}