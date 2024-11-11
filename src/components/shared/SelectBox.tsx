import React from 'react';
import styled from 'styled-components';

// Styled components
const SelectContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  cursor: pointer;

  &:focus {
    border-color: #000;
  }
`;

interface SelectBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  label: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ value, onChange, options, placeholder, label }) => (
  <SelectContainer>
    <Label>{label}</Label>
    <Select value={value} onChange={onChange}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </SelectContainer>
);

export default SelectBox;
