import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

interface OptionProps {
  value: string;
  label: string;
}
interface DropDownProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  error: string | undefined;
  options: string[] | OptionProps[];
  label: string;
  optional?: string;
}
const DropDown = ({
  id,
  control,
  error,
  options,
  label,
  optional,
}: DropDownProps) => {
  return (
    <div className="flex flex-col space-y-3">
      <Typography>
        {label}
        <span className="text-gray-300">{optional}</span>
      </Typography>
      <FormControl fullWidth>
        <Controller
          name={id}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} error={!!error} id={id} displayEmpty>
              <MenuItem disabled value="">
                <div style={{ color: '#717886', padding: '0px' }}>
                  Choose One
                </div>
              </MenuItem>
              {options?.map((option) => (
                <MenuItem
                  key={typeof option === 'string' ? option : option?.value}
                  value={typeof option === 'string' ? option : option?.value}
                >
                  {typeof option === 'string' ? option : option?.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </div>
  );
};

export default DropDown;
