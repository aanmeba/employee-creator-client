type ErrorMessageType = { message: string | undefined };

const FieldErrorMessage = ({ message }: ErrorMessageType) => {
  return (
    <p className="text-xs italic absolute bottom-0 left-0 right-0 w-100">
      {message}
    </p>
  );
};

export default FieldErrorMessage;
