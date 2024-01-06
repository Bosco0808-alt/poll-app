"use client";
import { useState } from "react";
import { FC } from "react";

interface FormSkeletonProps {
  login: boolean;
}

const FormSkeleton: FC<FormSkeletonProps> = (props: FormSkeletonProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="form-group">
        <label htmlFor="username" className="m-2">
          Username:{" "}
        </label>
        <input
          type="text"
          className="form-control m-2"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="m-2">
          Password:{" "}
        </label>
        <input
          type="password"
          className="form-control m-2"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary m-2" type="submit">
        {props.login ? "Login" : "Sign up"}
      </button>
    </>
  );
};

export default FormSkeleton;
