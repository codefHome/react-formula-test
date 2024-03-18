import { Divider, Typography } from '@mui/material'


import PlusButton from '../sharedcomponent/PlusButton'
import { ReactNode } from 'react';

interface FormulaHeadProps{
    title:string;
    icon:ReactNode;
    handleOnClick:()=>void;

}

const FormulaHead = ({title,icon,handleOnClick}:FormulaHeadProps) => {
 
  return (
    <div className='flex flex-col'>
 <div className='flex w-full justify-between mb-6 px-4 '>
      <div className="flex justify-center items-center gap-2">
     {icon}
      <Typography className="font-bold text-3xl">
   {title}
        </Typography>
      </div>
      <PlusButton onClick={handleOnClick}/>
        </div>
        <Divider sx={{
            width:'full'
        }} />
    </div>
   
        
  )
}

export default FormulaHead