# J.AFinance-api
### Para conferir descrição e tecnologias acesse https://github.com/kethllen/J.AFinance

## Como executar

### Clone este repositório
```bash
$ git clone https://github.com/kethllen/J.AFinance-api.git
```
### Acesse o diretório onde você o clonou
```bash
$ cd back-end
```
### Instale as depencias do back-end
```bash
npm i
```
### Crie um arquivo de variáveis de ambiente na raiz do projeto (.env) e configure uma variável com o nome 'PORT' que recebe a porta que deseja usar, outra chamada 'DATABASE_URL' com a url do banco e outra chamada 'JWT_SECRET' que sera sua chave secreta, Exemplo:
```bash
DATABASE_URL = "postgres://postegres:senhasupersecreta@localhost:5432/jafinance";
PORT=5000
JWT_SECRET= kdnfoidahfoahoifioewufakdjclkdaj
```
### Execute o back-end
```bash
npm start
```
### Clone e siga as instruções para o repositório front-end em https://github.com/kethllen/J.AFinance
