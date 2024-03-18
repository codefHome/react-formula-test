
import FormulBody from './FormulBody'
import FormulaInputs from './FormulaInputs'
import FormulaOutputs from './FormulaOutputs'



const Formulas = () => {
  return (
    <div className="grid grid-rows-12 grid-flow-col gap-0 bg-[#F6F8FA] pt-10 px-4 w-full h-[100%] overflow-hidden">
        <div className="col-span-2 bg-[#FFFFFF] border h-full py-4"
        >
           <FormulaInputs/>
           </div>
           <div className='col-span-8  bg-[#FFFFFF]  border h-full py-4 overflow-auto'><FormulBody/></div>
           <div className="col-span-2  bg-[#FFFFFF]  border h-full py-4"><FormulaOutputs/></div>
      
       
         </div>
  )
}

export default Formulas