export default class Descritor{
    constructor(empresa){
        this.empresa = empresa
    }
    descrever = function(empresa){
        let texto = '-------------------------------' + '\n'
            + 'Razão Social: ' + empresa.social + '\n'
            + 'Nome fantasia: ' + empresa.fantasia + '\n'
            + 'CNPJ: ' + empresa.cnpj + '\n'
            + 'Endereço: ' + '\n'
            + 'Rua: ' + empresa.endereco.rua + '; Número: ' + empresa.endereco.numero
            + '; Bairro: ' + empresa.endereco.bairro + '; Cidade: ' + empresa.endereco.cidade + ';' + '\n'
            + '\n'
            + 'Funcionários:'
            + '\n'
        
            for(let f of empresa.funcionarios){
                texto += 'Nome: ' + f.nome + '\n'
                    + 'Matrícula: ' + f.matricula + '\n'
                    + 'CPF: ' + f.cpf + '\n'
                    + 'Rua: ' + f.endereco.rua + '; Número: ' + f.endereco.numero
                    + '; Bairro: ' + f.endereco.bairro + '; Cidade: ' + f.endereco.cidade + ';' + '\n'
                    + '\n'
            }
        
        console.log(texto)
    }
}