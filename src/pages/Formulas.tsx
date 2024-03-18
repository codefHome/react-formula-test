import FormulBody from "./FormulBody";
import FormulaInputs from "./FormulaInputs";
import FormulaOutputs from "./FormulaOutputs";

const Formulas = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-0 bg-[#F6F8FA] pt-10 px-4 w-full h-[100%] overflow-hidden">
      <div className="w-full lg:w-[30%] bg-[#FFFFFF] border h-auto py-4">
        <FormulaInputs />
      </div>
      <div className="w-full lg:w-[40%]  bg-[#FFFFFF]  border h-auto py-4 overflow-auto">
        <FormulBody />
      </div>
      <div className="w-full lg:w-[30%]  bg-[#FFFFFF]  border h-auto py-4">
        <FormulaOutputs />
      </div>
    </div>
  );
};

export default Formulas;
