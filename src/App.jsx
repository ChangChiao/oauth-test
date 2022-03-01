import React, { useState } from "react";
import { TextField } from "../components";
import clsx from "clsx";
function App() {
  const [{ account, password }, setForm] = useState({
    account: "",
    password: "",
  });

  const onChange = (target) => {
    const form = Object.fromEntries(new FormData(target).entries());
    setForm({
      account: form.account,
      password: form.password,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("account, password", account, password);
  };

  return (
    <div className="text-cente bg-slate-200">
      <form
        className="items mx-auto flex w-96 flex-1 flex-col gap-2 p-10"
        onChangeCapture={(event) => onChange(event.currentTarget)}
        onSubmit={handleFormSubmit}
      >
        <TextField id="account" label="account" value="" error={!account} />
        <TextField id="password" label="password" value="" error={!password} />
        <button className=" mt-4 rounded-md bg-slate-800 p-2  text-white">
          login
        </button>
      </form>
    </div>
  );
}

export default App;
