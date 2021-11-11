  const misiones = [
    { "id": 1, "titulo": "Ahorrar dinero", "descripcion": "Ahorrar el 10% de tu sueldo", "puntaje": 200},
    { "id": 2, "titulo": "Ordenar tu casa" , "descripcion": "Ordena tu casa, empezando por tu habiacion" , "puntaje": 300},
    { "id": 3, "titulo": "Ejercitarse", "descripcion": "Salir a caminar 20 minutos", "puntaje": 100},
    { "id": 4, "titulo": "Cocinar una comida elaborada", "descripcion": "Cocinar una comida con al menos 5 ingredientes", "puntaje": 100}
  ]

export const promesa = new Promise( (res, rej) => {
    let condicion = true
    if (condicion == true){
      setTimeout(() => {
        res(misiones)
      }, 2000);
    }
  })

export default "promesa"