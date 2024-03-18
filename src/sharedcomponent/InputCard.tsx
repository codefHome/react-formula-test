

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, InputAdornment, Popover, TextField } from "@mui/material";

import InfoIcon from '@mui/icons-material/Info';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ChangeEvent, ReactNode, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import createStyles from "@mui/styles/createStyles";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
        '& .MuiInputBase-input': {
          height: '35px',
          padding: '0',
          fontSize: '15px'
        }
      }
  }),
);

interface InputCardProps{
  icon:ReactNode
  title:string
}
 const InputCard=({icon,title}:InputCardProps) =>{
    const classes = useStyles();
    const[value,setValue]=useState<number>(0)
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
     setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;

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
            
            <IconButton onClick={handleClick} sx={{ padding: 0 }}><InfoIcon sx={{ width: '15px', height: '15px' }} /></IconButton>
            <Popover

              id={id}
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',

              }}
            >

              <Button variant='contained' startIcon={<AddIcon />} sx={{
                textTransform: 'none',

              }}>Add Description </Button>


            </Popover>
           <IconButton sx={{padding:0}}><MoreHorizIcon sx={{width:'25px',height:'25px'}}/></IconButton>
          </CardActions>
        </Box>
        <Box sx={{
            marginTop:'10px',
            paddingX:'10px',
            borderRadius:'5px',
            marginBottom:'0px'

        }}>
        <TextField classes={{
          
          root: classes.root,
        }} 
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
          endAdornment: <InputAdornment position="start">{value}</InputAdornment>,
       
        }}
        onChange={(event:ChangeEvent<HTMLInputElement>)=>setValue(parseInt(event.target.value))}
       />
        </Box>
       
      </CardContent>
    </Card>
  );
}

export default InputCard