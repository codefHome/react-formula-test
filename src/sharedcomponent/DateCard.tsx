

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, IconButton, } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ReactNode, useRef, useState } from "react";
import DatePicker,{ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface InputCardProps{
  icon1:ReactNode
  title:string
  icon2:ReactNode
}
const InputCard = ({ icon1, icon2, title }: InputCardProps) => {
    const datePickerRef = useRef<ReactDatePicker>(null);

    const[selectedDate,setSelectedDate]=useState<Date>(new Date())
    const handleOnClick1=()=>{
      if (datePickerRef.current) {
        datePickerRef.current.setFocus();
      }
      
    }
    const handleOnClick2=()=>{
      if (datePickerRef.current) {
        datePickerRef.current.setFocus();
      }
    }
    const handleDateChange = (date:Date | null) => {
      setSelectedDate(date!);
    };
   
  return (
    <Card sx={{ maxWidth: "100%",marginBottom:'15px' }}>
      <CardContent
        sx={{
          width: "100%",
          padding: "0px",
          height:'100px'
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
           {title}
          </Typography>
          <CardActions >

            <IconButton sx={{ padding: 0 }}><InfoIcon sx={{ width: '15px', height: '15px' }} /></IconButton>
            <IconButton sx={{ padding: 0 }}><MoreHorizIcon sx={{ width: '25px', height: '25px' }} /></IconButton>
          </CardActions>
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
            marginTop:'10px',
            paddingX:'10px',
            borderRadius:'5px',
            marginBottom:'0px',
            border: '1px solid gray',
            height:'35px'


        }}>
         <span className="flex justify-center items-center">
         <IconButton  onClick={handleOnClick1}>{icon1}</IconButton>
          <DatePicker
    className="bg-transparent outline-none focus:bg-transparent hover:bg-transparent"
        ref={datePickerRef}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
        />
         </span>
          
          <IconButton onClick={handleOnClick2}>{icon2}</IconButton>
         
       
      
        
        </Box>
       
      </CardContent>
    </Card>
  );
}

export default InputCard

