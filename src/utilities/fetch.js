export async function getItems() {
  let response = await fetch("http://134.209.138.34/items");
  response = await response.json();
  return response;
}

export async function getItem(id) {
  let response = await fetch(`http://134.209.138.34/item/${id}`);
  response = await response.json();
  return response;
}
