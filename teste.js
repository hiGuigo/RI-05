import Descritor from './modulos/descritor.js'
import Empresa from './modulos/empresa.js'
import Endereco from './modulos/endereco.js'
import Funcionario from './modulos/funcionario.js'
import Telefone from './modulos/telefone.js'

let endereco = new Endereco('Av. Paulista', 123, 'Jardim Paulista', 'São Paulo')
let telefone = new Telefone('011', '9-9999-9999')
let funcionario = new Funcionario('Guilherme', '123456789', '999.999.999-99', endereco, telefone)
let funcionario2 = new Funcionario('Gabriel', '987654321', '999.999.999-88', endereco, telefone)

let funcionarios = [funcionario, funcionario2]
let telefones = [telefone]

let empresa = new Empresa('Mercado Online', 'ABC LTDA', '999-999-999-999-99', endereco, telefones, funcionarios)

let descritor = new Descritor
descritor.descrever(empresa)
