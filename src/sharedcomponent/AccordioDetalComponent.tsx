import {
  Divider,
  IconButton,
  Typography,
  Button,
  Popover,
  Box,

} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import { LinkingIcon } from "../assets/icons/LinkingIcon";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EastIcon from "@mui/icons-material/East";
import AddIcon from "@mui/icons-material/Add";
import InputField from "./InputField";
import { useFieldArray, useForm } from "react-hook-form";
import DropDownPanel from "./DropDownPanel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface dataType {
  name: string;
  category: string;
  id: number;
  value: number;
}

const AccordioDetalComponent = () => {

  const { control, } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "timeSheet",
  });
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const { data } = useQuery({
    queryKey: ["placeHolder"],
    queryFn: () =>
      axios
        .get("https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete")
        .then((res) => res.data),
  });
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [selectedInput, setSelectedInput] = useState<string[]>([]);
  const [inputString, setInputString] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [temp, setTemp] = useState<any[]>([])
  const handleChange = (category: string, value: number) => {
    setSelectedInput([...selectedInput, category]);
    setInputString("");
    setTemp([...temp, value])
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInputString = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
    if (["+", "-", "*", "/"].includes(event.target.value)) {
      setSelectedInput([...selectedInput, event.target.value]);
      setTemp([...temp, event.target.value])
      setInputString('')
    }
  };
  const handleDelete = (index: number) => {
    setSelectedInput((prevSelectedInput) => {
      const updatedSelectedInput = [...prevSelectedInput];
      updatedSelectedInput.splice(index, 2);
      return updatedSelectedInput;
    });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log(temp)
  return (
    <>
      {fields.map((_, index) => {
        return (
          <div className="flex w-full">
            <div className="mt-3">
              <span className="flex flex-start ml-[-7px]">
                <LinkingIcon />
              </span>
              <Divider
                orientation="vertical"
                sx={{
                  width: "1px",
                  height: "100px",
                  border: "1px solid #D1D8E0",
                  marginRight: "15px",
                }}
              />
            </div>

            <div className="flex w-full flex-col">
              <div className="flex w-full  justify-between h-[30px] border border-gray-400] mt-1 bg-[#F6F8FA] p-1">
                <div
                  onClick={handleClick}
                  className="flex w-full cursor-pointer "
                >
                  <IconButton
                    sx={{
                      padding: 0,
                      paddingTop: "-5px",
                      marginRight: "10px",
                    }}
                  >
                    <CalendarTodayIcon
                      sx={{
                        width: "15px",
                        height: "15px",
                        paddingTop: "-10px",
                      }}
                    />
                  </IconButton>
                  <Typography>Nov 2023</Typography>
                  <EastIcon
                    sx={{
                      marginX: "15px",
                    }}
                  />
                  <Typography>Nov 2023</Typography>
                  <ArrowDropDownIcon />
                </div>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <DropDownPanel handleClose={handleClose} />
                </Popover>
                <IconButton onClick={() => remove(index)}>
                  {" "}
                  <CloseIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                    }}
                  />
                </IconButton>
              </div>
              <Divider sx={{ width: "100%" }} />
              <div className="flex flex-col">
                <Box className="flex flex-wrap border rounded-md items-center">
                  {selectedInput.map((item, index) => (
                    <span
                      className="flex justify-center items-center border h-8 gap-2 p-2 bg-gray-500 rounded-md"
                      key={index}
                    >
                      {item}

                      {!["+", "-", "*", "/"].includes(item) && (
                        <>
                          <Divider orientation="vertical" className="w-[1px] h-full m-[-20px] bg-white" />
                          <IconButton className="text-[8px] w-4 h-4 bg-transparent" onClick={() => handleDelete(index)}>
                            <CloseIcon sx={{ height: '15px' }} />
                          </IconButton></>

                      )}
                    </span>
                  ))}

                  <div className="flex flex-col">
                    <InputField
                      id={`{timeSheet.${index}.price}`}
                      control={control}
                      onChange={handleInputString}
                      value={inputString}
                    />
                  </div>
                </Box>
                {inputString && (
                  <Box className="flex flex-col w-auto">
                    {data
                      .filter((category: dataType) =>
                        category.category.toLowerCase().includes(inputString.toLowerCase())
                      )
                      .map((item: dataType) => (
                        <span
                          className="cursor-pointer"
                          onClick={() => handleChange(item.category, item.value)}
                          key={item.id}
                        >
                          {item.category}
                        </span>
                      ))}
                  </Box>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <Button
        onClick={() => append({})}
        sx={{
          textTransform: "none",
        }}
        startIcon={<AddIcon sx={{ marginRight: "10px" }} />}
      >
        Add Time Segment
      </Button>
    </>
  );
};

export default AccordioDetalComponent;
