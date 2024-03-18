import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
interface InputFieldProp {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;

}
const InputField = ({
  id,
  control,
  onChange,
  value,

}: InputFieldProp) => {

 

  return (
    <div className="flex flex-col space-y-3 w-auto">
    
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <TextField
            value={value}
            id={id}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                  background: 'transparent',
                },
                '&:not(.Mui-focused)': {
                  '& fieldset': {
                    boxShadow: 'none',
                  },
                },
              },
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(event);
              if (onChange) {
                onChange(event);
              }
            }}
          />
        )}

      />
    </div>
  );
};

export default InputField;
