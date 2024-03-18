
import FormulaHead from '../sharedcomponent/FormulaHead'
import SquareRootIcon from '../assets/icons/SquareRootIcon'
import FormulaBodyInput from '../sharedcomponent/FormulaBodyInput'

const FormulBody = () => {
  const handleOnClick=()=>{
    console.log("hello body of formula")
  }
  return (
    <div className='flex flex-col gap-4'>
      <FormulaHead
      title='Formulas (7)' 
      icon={<SquareRootIcon/>}
      handleOnClick={handleOnClick}
      />
      <div className="flex flex-col px-6 w-full gap-4 overflow-scroll ">
      <FormulaBodyInput title="Loan Disbursement"/>
      <FormulaBodyInput title="Running Balance"/>
      <FormulaBodyInput title="Principal Payment"/>
      <FormulaBodyInput title="Monthly Payment"/>
      </div>
      </div>
  )
}

export default FormulBody