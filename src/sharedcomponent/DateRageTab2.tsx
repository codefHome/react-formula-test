
import { Box, IconButton, MenuItem, Select, SelectChangeEvent, Tab, Tabs, Typography } from '@mui/material';
import { SyntheticEvent, useRef, useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DatePicker,{ReactDatePicker } from 'react-datepicker';


const DateRangeTab = () => {
    const[value,setValue]=useState(0)
  const tabsStyle = (index: number) => {
    return {
        display:'flex',
        // justifyContent:'center',
      textTransform: 'none',
      background: value === index ? 'white' : '',
      borderRadius: '5px',
    
    };
  };

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
    
  };

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
  const [selectedValue, setSelectedValue] = useState('Select a Variable');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80px] m-5 ">
      <div className="flex h-[80px]">
        <Tabs
          value={value}
          onChange={handleChange}
          className="flex w-auto  bg-[#EDF0F2] rounded-md p-2 mb-1"
          sx={{
            '.MuiTabs-indicator': {
              display: 'none',
            },
            // height:'10px'
          }}
        >
          <Tab
           className="flex h-[10px]"
            sx={tabsStyle(0)}
            label={
              <Typography >
               Auto
              </Typography>
            }
          />
          <Tab
            
            sx={tabsStyle(1)}
            label={
              <Typography >
                Month
              </Typography>
            }
          />
          <Tab
           
            sx={tabsStyle(2)}
            label={
              <Typography >
               Variable
              </Typography>
            }
          />
        </Tabs>
      </div>

      {value === 0 && (<Typography sx={{marginTop:'15px',fontSize:'12px'}}>Extends until the next segment or the end of the model.</Typography>)}
      {value === 1 && (
       
<Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
            marginTop:'15px',
            paddingX:'10px',
            borderRadius:'5px',
            marginBottom:'0px',
            border: '1px solid gray',
            height:'35px',


        }}>
         <span className="flex justify-center items-center">
         <IconButton  onClick={handleOnClick1}><CalendarTodayIcon/></IconButton>
          <DatePicker

    className="bg-transparent outline-none focus:bg-transparent hover:bg-transparent"
        ref={datePickerRef}
        popperPlacement="top-start"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM yyyy"
              showMonthYearPicker
        />
         </span>
          
          <IconButton onClick={handleOnClick2}><ArrowDropDownIcon/></IconButton>
         
       
      
        
        </Box>
        
        
      )}
      {value === 2 && (
        <div className="mt-[15px] w-full">
       <Select
        sx={{height:'35px'}}
         fullWidth
          id="selectStartDate"
          value={selectedValue}
          onChange={handleSelectChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected;
          }}
        >
           
          <MenuItem value='Payment Starting Date'>Payment Starting Date</MenuItem>
       
        </Select>
        </div>
      )}
    </div>
  );
};

export default DateRangeTab;
