const API_URL = "http://localhost:8081/tickets";

export async function getTickets() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createTicket(ticket) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
  return response.json();
}

export async function updateStatus(id, status) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  return response.json();
}

export async function deleteTicket(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}