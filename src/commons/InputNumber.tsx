import React from 'react';

type InputNumberProps = {
  placeholder?: string;
  width?: string;
  name?: string;
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly?: boolean;
  min?: number;
  step?: string | number;
  unit?: string; // Unidad opcional, como "cm" o "kg"
};

function InputNumber({
  placeholder,
  width,
  name,
  value,
  onChange,
  readonly,
  min = 0, 
  step = "0.01",
  unit,
}: InputNumberProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <div className={`relative w-${width}`}>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
        className={`w-full bg-white text-black rounded-xl h-[3rem] pl-3 pr-10 border border-[#304c5e] outline-none`}
        readOnly={readonly}
        disabled={readonly}
        min={min}
        step={step}
      />
      {unit && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {unit}
        </span>
      )}
    </div>
  );
}

export default InputNumber;
