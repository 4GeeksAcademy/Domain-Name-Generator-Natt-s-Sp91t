let pronombre = ["la", "el", "nuestra", "tu"];
let adjetivo = ["mejor", "nueva", "lujosa", "profesional"];
let nombre = ["ropa", "cafe", "musica", "libros"];
let dominio = [".com", ".net", ".es", ".org"];
let hackDomain = ["restaurant.es"];

for (let pron of pronombre) {
  for (let adj of adjetivo) {
    for (let nom of nombre) {
      for (let dom of dominio) {
        console.log(pron + adj + nom + dom);
      }
    }
  }
}

for (let pron of pronombre) {
  for (let adj of adjetivo) {
    for (let hack of hackDomain) {
      console.log(pron + adj + hack);
    }
  }
}
