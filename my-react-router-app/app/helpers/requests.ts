export async function getData() {
  const url = "http://localhost:3000";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.message;
  } catch (error: any) {
    if (error && error.message)
    console.error(error.message);
  }
}