import { useLocation } from "react-router-dom";
import AddForm from "../components/Form/AddForm";
import Header from "../components/Header/Header";
import EditForm from "../components/Form/EditForm";

const FormPage = () => {
  const { pathname } = useLocation();
  const isAddForm = pathname.includes("add");
  return (
    <>
      <Header>Employee details</Header>
      <div className="p-16">{isAddForm ? <AddForm /> : <EditForm />}</div>
    </>
  );
};

export default FormPage;
