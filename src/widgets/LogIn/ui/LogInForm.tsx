import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputBase } from "../../../shared/ui";

export const LogInForm = () => {
  const { handleSubmit, control, formState } = useForm();

  console.log("formState", formState);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>E-mail</label>
        <Controller
          name="e-mail"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputBase {...field} />}
        />
        <label>password</label>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputBase {...field} />}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
