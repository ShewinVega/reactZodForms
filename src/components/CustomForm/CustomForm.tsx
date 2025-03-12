import { SubmitHandler, useForm } from "react-hook-form";
import { FormSchema, FormValues } from "../../models/schema/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { InputForm } from "../CustomInputs";

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name="name"
        label="Name"
        control={control}
        type="text"
        error={errors.name}
      />
      <InputForm
        name="email"
        label="Email"
        control={control}
        type="email"
        error={errors.email}
      />
      <InputForm
        name="password"
        label="Password"
        control={control}
        type="password"
        error={errors.password}
      />
      <InputForm
        name="confirmPassword"
        label="confirmPassword"
        control={control}
        type="password"
        error={errors.confirmPassword}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
