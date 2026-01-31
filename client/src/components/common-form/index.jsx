import { Button } from "../ui/button";

function CommonForm({ handleSubmit, buttonText }) {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <Button type="submit" className="mt-5 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
