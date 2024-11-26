export async function getProductos() {
  const url = "/api/productos";
  let result = []
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
  return result
}


export async function getProducto(id) {
  const url = `/api/productos/${id}`;
  let result = {}
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    result = await response.json();
  } catch (error) {
    console.error(error.message);
  }
  return result
}

export async function getFabricantesDeProducto(id) {
  const url = `/api/productos/${id}/fabricantes/`;
  let result = {}
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    result = await response.json();
    result = result.Fabricantes
  } catch (error) {
    console.error(error.message);
  }
  return result
}

export async function getComponentesDeProducto(id) {
  const url = `/api/productos/${id}/componentes/`;
  let result = {}
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    result = await response.json();
    result = result.Componentes
  } catch (error) {
    console.error(error.message);
  }
  return result
}