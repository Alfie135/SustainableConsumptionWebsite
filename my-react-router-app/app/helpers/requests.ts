export async function getText(reqLanguage?:string) {
  const params = new URLSearchParams({ language: reqLanguage || ""});
  const url = `http://localhost:3000/Text?${params}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    if (error && error.message)
    console.error(error.message);
  }
}