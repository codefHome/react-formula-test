import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DownloadIcon } from '../assets/icons/DownloadIcon'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PercentIcon from '@mui/icons-material/Percent';
import HashIcon from '@mui/icons-material/Tag';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FormulaHead from '../sharedcomponent/FormulaHead'
import InputCard from '../sharedcomponent/InputCard'
import DateCard from '../sharedcomponent/DateCard';
// import CardWithDatePicker from '../sharedcomponent/DateCard';
// import InputCard from '../sharedcomponent/InputCard'

const FormulaInputs = () => {
  const handleOnClick=()=>{
    console.log('Hello Input from Formula')
  }
  return (
    <div className='flex flex-col gap-4'>
     <FormulaHead
     title='Inputs (5)'
     icon={<DownloadIcon/>} 
     handleOnClick={handleOnClick}/>
<div className="flex flex-col px-6 w-full ">
<InputCard title='Loan Amount' icon={<HashIcon/>}/>
<InputCard title='APR %' icon={<PercentIcon/>} />
<InputCard title='Loan Term (MOs)' icon={<HashIcon/>}/>
<InputCard title='Payments per year' icon={<HashIcon/>}/>
<DateCard title='Payment Starting Date' icon1={<CalendarTodayIcon/>} icon2={<ArrowDropDownIcon/>}/>
{/* <DateCard/> */}
</div>


        </div>
  )
}

export default FormulaInputs