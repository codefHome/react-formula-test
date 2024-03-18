
import FormulaHead from '../sharedcomponent/FormulaHead'
import { UploadIcon } from '../assets/icons/uploadIcon'
import { Box, Card, CardActions, CardContent, IconButton, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import SquareRootIcon from '../assets/icons/SquareRootIcon';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import { BendingArrow } from '../assets/icons/BendingArrow';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'


interface ListInterface{
  name:string;
  value:number;
  category:number;
  id:string
}
const FormulaOutputs = () => {
  const [selectedValue, setSelectedValue] = useState('Select a Variable');
  const [selectedValue1, setSelectedValue1] = useState('Select a Variable');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };
  const handleSelectChange1 = (event: SelectChangeEvent) => {
    setSelectedValue1(event.target.value as string);
  };

  const handleOnClick=()=>{
    console.log('hello from out put')
  }

  const{data}=useQuery({
      queryKey:['placeHolder'],
      queryFn:()=> axios.get('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete').then(res=>res.data)
  })
  return (

    <div>
      <FormulaHead
      title='Outputs (1)'
      icon={<UploadIcon/>}
      handleOnClick={handleOnClick}
       />
       <div className="flex flex-col px-6 w-full mt-[20px]">
       <Card sx={{ maxWidth: "100%",marginBottom:'15px' }}>
      <CardContent
        sx={{
          width: "100%",
          padding: "0px",
          height:'150px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F6F8FA",
            width: "100%",
            padding: "10px",
            height:'40px'

          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Principal Payment
          </Typography>
              <CardActions>
           <IconButton sx={{padding:0}}><MoreHorizIcon sx={{width:'25px',height:'25px'}}/></IconButton>
          </CardActions>
        </Box>
        <Box sx={{
            marginTop:'10px',
            paddingX:'10px',
            borderRadius:'5px',
            marginBottom:'0px'

        }}>
          <span className='flex gap-2 '>
          <span className='flex justify-center items-center'>
          <SquareRootIcon/>
          </span>
          <Select
        sx={{height:'35px',backgroundColor:'#E5E7EA'}}
         fullWidth
          id="loanMethods"
          value={selectedValue}
          onChange={handleSelectChange}
        >
         {data?.map((item:ListInterface)=>(
          <MenuItem value={item?.id}>{item?.category}</MenuItem>
         ))
         }
        </Select>
          </span>
         
          <span className="flex justify-between mt-2 pl-2">
         
          <BendingArrow/>
      
            <span className='flex justify-center  items-center'>
              <ViewCompactIcon sx={{width:'25px',height:'25px'}}/>
            </span>
          <Select
        sx={{display:'flex', justifyContent:'end', height:'35px',width:'80%'}}
        
          id="loanMethods"
          value={selectedValue1}
          onChange={handleSelectChange1}
        >
         {data?.map((item:ListInterface)=>(
          <MenuItem value={item?.value}>{item?.name}</MenuItem>
         ))}  
          
       
        </Select>
          </span>
      
       
        </Box>
       
      </CardContent>
    </Card>

       </div>

    </div>

  )
}

export default FormulaOutputs