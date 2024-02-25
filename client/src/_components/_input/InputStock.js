import { Input } from "@chakra-ui/react";

export default function InputStock({ field, type, onChange }) {
  let inputType;

  if (type === "int") {
    inputType = "number";
  }
  if (type === "varchar(255)") {
    inputType = "text";
  }
  if (type === "datetime") {
    inputType = "date";
  }

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(field, value);
  };

  return (
    <Input
      type={inputType}
      name={field}
      autoComplete="off"
      id={field}
      onChange={handleChange}
    />
  );
}
