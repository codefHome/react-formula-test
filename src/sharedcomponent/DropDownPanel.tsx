import { Button, Divider, Typography } from '@mui/material'
import DateRangeTab1 from './DateRangeTab1'
import DateRangeTab2 from './DateRageTab2'
interface DropdownProps{
    handleClose:()=>void
}
const DropDownPanel = ({handleClose}:DropdownProps) => {
  return (
    <div className="flex flex-col w-auto">
        <div className='flex h-[210px] w-full'>
        <div className="flex flex-col">
            <Typography sx={{marginTop:'20px',marginLeft:'20px'}}>Segment Start</Typography>
            <Divider sx={{ marginTop:'10px',width:'100%',marginBottom:'20px'}}/>
            <DateRangeTab1/>
        </div>
        <Divider orientation='vertical' sx={{width:'1px', height:'210px'}} />
        <div className="flex flex-col">
            <Typography sx={{marginTop:'20px',marginLeft:'20px'}}>Segment End</Typography>
            <Divider sx={{ marginTop:'10px',width:'100%',marginBottom:'20px'}}/>
            <DateRangeTab2/>
        </div>
        </div>
       
        <Divider sx={{width:'100%'}}/>
<div className="flex w-full justify-end my-2 gap-3">
<Button onClick={handleClose} sx={{textTransform:'none'}}>Cancel</Button>
<Button sx={{textTransform:'none',marginRight:'20px'}} variant='contained'>Confirm</Button>
</div>
    </div>
  )
}

export default DropDownPanel