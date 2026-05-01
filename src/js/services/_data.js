export async function getProducts() {
  try {
    const response = await fetch("./products.json");

    if (!response.ok) {
      throw new Error("Não foi possível carregar os produtos.");
    }

    const data = await response.json();
    return data;
  } catch (erro) {
    console.log("Erro na requisição: ", erro);
    return []; // retorna array vazio pro site não quebrar
  }
}
