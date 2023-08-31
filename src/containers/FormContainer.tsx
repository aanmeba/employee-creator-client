import { useState } from "react";
import Form from "../components/Form/Form";

const FormContainer = () => {
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  return (
    <>
      <Form />
      {formSuccess && <p>Successfully submitted form</p>}
    </>
  );
};

export default FormContainer;
