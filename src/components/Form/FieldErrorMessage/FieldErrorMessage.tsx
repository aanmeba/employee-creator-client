type ErrorMessageType = { message: string | undefined };

const FieldErrorMessage = ({ message }: ErrorMessageType) => {
  return <p className="text-xs italic">{message}</p>;
};

export default FieldErrorMessage;
