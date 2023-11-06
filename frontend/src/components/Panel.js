import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

export default function Panel() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Panel</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          ></input>
          <label for="name">Name</label>
          <input
            {...register("name")}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          ></input>
          <label for="name">Description of Problem</label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter problem"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
