import React, { useState } from "react";
import { TextField } from "../components";
import { GoogleLogin } from "react-google-login";
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

  const errorGoogle = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  // console.log("import.meta.env.VITE_GOOGLE_ID", import.meta.env.VITE_GOOGLE_ID);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("account, password", account, password);
  };

  return (
    <div className="text-cente bg-slate-200">
      <div className="mx-auto w-20">
        <GoogleLogin
          clientId={import.meta.env.VITE_GOOGLE_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
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
