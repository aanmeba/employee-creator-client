import { useEffect, useState } from "react";
import { getAllEmployees } from "../services/fetchServices";
import Header from "../components/Header/Header";
import CardHeader from "../components/CardHeader/CardHeader";
import Card from "../components/Card/Card";
import { ReceivedInputs } from "../common/types_interfaces";

const Home = () => {
  const [employees, setEmployees] = useState<ReceivedInputs[]>();

  useEffect(() => {
    getAllEmployees().then((data) => {
      console.log(data);
      setEmployees(data);
    });
  }, []);

  return (
    <>
      <Header>Employees' list</Header>
      <section className="flex flex-col gap-8 px-16">
        <CardHeader />
        {employees?.map((employee, i) => (
          <Card employee={employee} key={i} />
        ))}
      </section>
    </>
  );
};

export default Home;
