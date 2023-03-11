# Api de Usuários

A api de usuários foi feita utilizando nodejs, para fixar aprendizado.

 * Nessa Api de as seguinte funções:
    * Criar Usuário
    * Deletar Usuário 
    * Atualizar Usuário
    * Pesquisar todos os usuários
    
## Utilização: 

**OBS**: **FOI UTILIZADO O BANCO MYSQL**

    1 - Faça um git clone do projeto
    2 - Entre na pasta raiz do projeto e coloque o seguinte comando:
        - "npm install" 
        
    3 - Crie uma pasta ".env"
        Adicione "DATABASE_URL= <ENDEREÇO DO SEU BANCO DE DADOS>"
    4 - Crie uma migrate:
        "npm run prisma migrate dev"
    5 - Para rodar a api, basta colocar no terminal o seguinte comando:
        npm start
    
### Bibliotecas utilizadas
    - nodemon
    - express
    - prisma
    