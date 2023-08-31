const BASE_URL = `http://localhost:8080`;

export const getAllEmployees = async () => {
  const response = await fetch(`${BASE_URL}/employees`);
  const data = await response.json();
  return data;
};
