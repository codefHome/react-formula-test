import {IconButton } from "@mui/material"
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
IconButton
interface PlusButtonProps{
    onClick: ()=>void;

}
const RectIconButton = styled(IconButton)({
    borderRadius: '5px',
    width: '25px',
    height: '25px',
    backgroundColor: 'blue',
    color: 'white',
    padding:'2px'
  });
  const PlusButton=({onClick}:PlusButtonProps)=>{
    return(
        <RectIconButton 
        
        onClick={onClick}
       
        >
<AddIcon/>
        </RectIconButton>
    )
}
export default PlusButton