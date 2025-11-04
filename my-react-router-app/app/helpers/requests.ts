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

export async function getCounter() {
  const url = "http://localhost:3000/counter";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.counter;
  } catch (error: any) {
    if (error && error.message)
    console.error(error.message);
  }
}

export async function postCounter(counter: number) {
  const url = "http://localhost:3000/counter";
  try {
    const response = await fetch(url,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ counter: counter }),
    });
 
    const result = await response.json();
    return result.counter;
  } catch (error: any) {
    if (error && error.message)
    console.error(error.message);
  }
}