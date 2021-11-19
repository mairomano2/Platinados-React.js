const misiones = [
  { "id": "1", categoria: "finanzas", "titulo": "Ahorrar dinero", "descripcion": "Ahorrar el 10% de tu sueldo", "puntaje": 200 },
  { "id": "2", categoria: "cuidado-personal", "titulo": "Ordenar tu casa", "descripcion": "Ordena tu casa, empezando por tu habiacion", "puntaje": 300 },
  { "id": "3", categoria: "fisico", "titulo": "Ejercitarse", "descripcion": "Salir a caminar 20 minutos", "puntaje": 100 },
  { "id": "4", categoria: "cocina", "titulo": "Cocinar una comida elaborada", "descripcion": "Cocinar una comida con al menos 5 ingredientes", "puntaje": 100 }
]

export const promesa = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(misiones)
    }, 2000);
  })
}

export default "promesa"