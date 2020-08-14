const API = 'https://api.spaceXdata.com/v3/launches?';

export async function fetchAPI(queryParam) {
  const res = await fetch(`${API}${queryParam}`);

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json;
}
