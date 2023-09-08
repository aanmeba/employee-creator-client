import { Inputs } from "../common/types_interfaces";

const BASE_URL = `http://localhost:8080`;
const PARAM = `employees`;

export const getAllEmployees = async () => {
  const response = await fetch(`${BASE_URL}/${PARAM}`);
  const data = await response.json();
  return data;
};

export const getEmployeeById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${PARAM}/${id}`);
  const data = await response.json();
  return data;
};

export const createNewEmployee = async (employeeData: Inputs) => {
  const response = await fetch(`${BASE_URL}/${PARAM}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(employeeData),
  });
  const data = await response.json();
  console.log(data, " --- data ---- ");
  return data;
};

export const removeEmployeeById = async (id?: number) => {
  console.log(id, "-- remove id");
  const response = await fetch(`${BASE_URL}/${PARAM}/${id}`, {
    method: "DELETE",
  });
  console.log(response.status, " --- status");
  return response.status;
};

// export const updateEmployeeById = async (id: number, data: Inputs) => {
//   const response = await fetch(`${BASE_URL}/${PARAM}/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// };
