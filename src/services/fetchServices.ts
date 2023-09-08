import { Inputs } from "../common/types_interfaces";

const BASE_URL = `http://localhost:8080`;
const PARAM = `employees`;

export const getAllEmployees = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${PARAM}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("🚨 ERROR while fetching all employees: ", err);
    throw err;
  }
};

export const getEmployeeById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${PARAM}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("🚨 ERROR while fetching an employee: ", err);
    throw err;
  }
};

export const createNewEmployee = async (employeeData: Inputs) => {
  try {
    const response = await fetch(`${BASE_URL}/${PARAM}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });
    const data = await response.json();

    return data;
  } catch (err) {
    console.error("🚨 ERROR while adding an employee: ", err);
    throw err;
  }
};

export const removeEmployeeById = async (id?: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${PARAM}/${id}`, {
      method: "DELETE",
    });

    return response.status;
  } catch (err) {
    console.error("🚨 ERROR while removing an employee: ", err);
    throw err;
  }
};

export const updateEmployeeById = async (id: number, updatedData: Inputs) => {
  try {
    const response = await fetch(`${BASE_URL}/${PARAM}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    return response.ok;
  } catch (err) {
    console.error("🚨 ERROR while updating an employee: ", err);
    throw err;
  }
};
