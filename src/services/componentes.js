export async function getComponentes() {
  const url = "/api/componentes";
  let result = []
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


