async function getData(url) {
  try {
    const response = await fetch(url);
    console.log("Response:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Response of JSON:", await response.clone().json());

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default getData;
