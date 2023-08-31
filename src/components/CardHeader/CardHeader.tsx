import Button from "../Button/Button";

const CardHeader = () => {
  return (
    <div className="flex items-center justify-between max-w-screen-sm h-20 py-20">
      <span>Please click on 'Edit' to find more details of each employee.</span>
      <Button defaultBtn={false}>Add employee</Button>
    </div>
  );
};

export default CardHeader;
