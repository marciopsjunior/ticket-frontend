import { useEffect, useState } from "react";
import { getTickets, createTicket, updateStatus, deleteTicket } from "./services/api";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function loadTickets() {
    try {
      const response = await getTickets();
      setTickets(response.data);
    } catch (error) {
      console.error("Erro ao carregar tickets:", error);
    }
  }

  async function handleCreateTicket() {
    if (!title || !description) return alert("Preencha todos os campos!");
    const newTicket = { title, description, status: "OPEN" };
    try {
      await createTicket(newTicket);
      setTitle("");
      setDescription("");
      loadTickets();
    } catch (error) {
      console.error("Erro ao criar ticket:", error);
    }
  }

  async function handleUpdateStatus(id, status) {
    try {
      await updateStatus(id, status);
      loadTickets();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  async function handleDeleteTicket(id) {
    try {
      await deleteTicket(id);
      loadTickets();
    } catch (error) {
      console.error("Erro ao deletar ticket:", error);
    }
  }

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <div className="container">
      <h1>Criar novos Chamados</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="create-btn" onClick={handleCreateTicket}>Criar Chamado</button>
      </div>

      <h1>Lista de Chamados</h1>
      <ul className="ticket-list">
        {tickets?.map((ticket) => (
          <li key={ticket.id} className="ticket-item">
            <p><strong>Título:</strong> {ticket.title}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <p><strong>Descrição:</strong> {ticket.description}</p>
            <p><strong>Data de Criação:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
            <div className="button-group">
              <button onClick={() => handleUpdateStatus(ticket.id, "CLOSED")}>Fechar Chamado</button>
              <button onClick={() => handleDeleteTicket(ticket.id)}>Excluir Chamado</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;