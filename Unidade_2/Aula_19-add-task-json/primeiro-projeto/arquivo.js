const fs = require('fs');

const fileName = 'arquivo.txt';

fs.writeFileSync(fileName, 'Novo Conteúdo');
fs.appendFileSync(fileName, ' Conteúdo adicionado');

// se o arquivo não existe, cria-se o arquivo com o conteúdo
// se o arquivo já existe 
    // manter o conteúdo do arquivo existente
    // adicionar o novo conteúdo [contact]
