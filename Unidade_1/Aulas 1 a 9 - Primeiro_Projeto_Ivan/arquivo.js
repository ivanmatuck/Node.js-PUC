const fs = require('fs');

const fileName = 'arquivo.txt';

fs.writeFileSync(fileName, 'conteúdo a ser gravado');
fs.appendFileSync(fileName, 'Novo conteúdo adicionado');
//se o arquivo não existe, cria-se o arquivo com o conteúdo

// se o arquivo já existe
    //manter o conteúdo do arquivo existente
    //adicionar o novo conteúdo [contatenar]