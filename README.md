Projeto de Chamados (Tickets)

Sistema simples de gerenciamento de chamados, feito com React no frontend e uma API REST para manipulação de tickets.

<img width="884" height="936" alt="image" src="https://github.com/user-attachments/assets/6dbbb4d9-491a-45c4-b60a-9ce20fda9cb3" />


Requisitos

- Node.js (versão 18+ recomendada)
- npm ou yarn

Backend da API rodando em http://localhost:8081

Passo a passo para rodar
1️⃣ Clonar o repositório
git clone https://github.com/marciopsjunior/ticket-frontend.git

2️⃣ Instalar dependências do frontend
npm install

ou

yarn
3️⃣ Rodar o backend da API

O frontend depende de uma API para funcionar. Você precisa rodar o backend antes de iniciar o React.

Se você tiver o backend pronto: (https://github.com/marciopsjunior/ticket-backend-api)

Certifique-se que ele está rodando em http://localhost:8081

Rotas necessárias:

GET /tickets → listar tickets

POST /tickets → criar ticket

PUT /tickets/:id → atualizar status

DELETE /tickets/:id → deletar ticket

4️⃣ Rodar o frontend
npm start

O React vai abrir em http://localhost:3000

5️⃣ Usar o sistema

- Criar novos chamados pelo formulário

- Ver a lista de chamados

- Fechar ou excluir chamados usando os botões

Observações

Qualquer erro na API será exibido no console do navegador (console.error)

Para mudar a porta da API, atualize a constante API_URL no arquivo services/api.js
