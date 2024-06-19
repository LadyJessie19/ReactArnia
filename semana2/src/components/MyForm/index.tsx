import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const formSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label>
        Nome
        <input type="text" {...register("name", { required: true })} />
      </label>

      <label>
        Email
        <input type="email" {...register("email", { required: true })} />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForm;
