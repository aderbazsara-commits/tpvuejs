// Petit module d'accès à json-server (évite de répéter l'URL partout)
export const API_URL = 'http://localhost:3000/jobs'

async function request(url, options) {
  const res = await fetch(url, options)
  if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`)
  // DELETE renvoie un objet vide : on le lit quand même sans planter
  return res.json()
}

const JSON_HEADERS = { 'Content-Type': 'application/json' }

export const api = {
  getAll: () => request(API_URL),
  getOne: id => request(`${API_URL}/${id}`),
  create: job => request(API_URL, { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify(job) }),
  update: (id, job) => request(`${API_URL}/${id}`, { method: 'PATCH', headers: JSON_HEADERS, body: JSON.stringify(job) }),
  remove: id => request(`${API_URL}/${id}`, { method: 'DELETE' })
}
