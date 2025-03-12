import { Control, Controller, FieldError } from "react-hook-form";
import "./customInput.css";
import { FormValues } from "../../models/schema/CustomForm";

interface Props {
  name: keyof FormValues;
  label: string;
  type?: string;
  control: Control<FormValues>;
  error?: FieldError;
}

export const InputForm = ({ label, name, type, control, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? "is-invalid" : ""}`}
          />
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};
