const BASE_URL = `http://localhost:8080`;
const PARAM = `employees`;

export const getAllEmployees = async () => {
  const response = await fetch(`${BASE_URL}/${PARAM}`);
  const data = await response.json();
  return data;
};

export const removeEmployeeById = async (id?: number) => {
  console.log(id, "-- remove id");
  const response = await fetch(`${BASE_URL}/${PARAM}/${id}`, {
    method: "DELETE",
  });
  console.log(response.status, " --- status");
};
