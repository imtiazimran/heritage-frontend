/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/utils/Container";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

const breakpoints = [
  { value: 0, label: "$0" },
  { value: 20000, label: "$20K" },
  { value: 40000, label: "$40K" },
  { value: 60000, label: "$60K" },
  { value: 80000, label: "$80K" },
  { value: 100000, label: "$100K" }
];

const AskingForLoan = () => {
  const [value, setValue] = useState([20000]);

  console.log(value);
  return (
    <Container className="py-10">
      <div className="flex justify-between items-center bg-accent px-4 py-5">
        <div className="flex flex-col w-[30%]">
          <h1 className="text-3xl font-semibold">Need Home Loan?</h1>
          <p className="text-[#667085]">Select how much Home loan you can take</p>
        </div>
        <div className="w-[70%] px-5">
          <Slider.Root
            className="relative flex items-center"
            defaultValue={[40000]}
            max={100000}
            onValueChange={(newValue) => setValue(newValue)}
          >
            <Slider.Track className="relative flex-grow h-2 bg-gray-200 rounded-full">
              <Slider.Range className="absolute bg-primary h-full rounded-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-4 h-4 bg-primary rounded-full" />
          </Slider.Root>
          <div className="flex justify-between mt-2">
            {breakpoints.map((bp) => (
              <div key={bp.value} className="text-center">
                <p className="text-sm">{bp.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AskingForLoan;
