type ErrorMessageType = { message: string | undefined };

const FieldErrorMessage = ({ message }: ErrorMessageType) => {
  return <p className="text-xs italic relative bottom-0 w-screen">{message}</p>;
};

export default FieldErrorMessage;
