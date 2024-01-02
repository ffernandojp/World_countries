export async function fetchData() {
  const API = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
