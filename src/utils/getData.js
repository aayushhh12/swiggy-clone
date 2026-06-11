async function getData(url) {
  try {
    const response = await fetch(url);
    console.log("Response1:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Response JSON:", await response.clone().json());
    console.log("Response JSON:2", await response.clone().json());
    console.log("Response JSON:3", await response.clone().json());
    console.log("Response JSON:4", await response.clone().json());

    

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default getData;
