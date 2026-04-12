import React from "react";

function Login() {
  return (
    <div>
      <section className="h-screen grid place-items-center">
        <form
          action=""
          className="card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
          <h4 className="text-center text-3xl font-bold">Login</h4>
          <div className="flex flex-col">
            <label className="label px-2">
              <p className="label-text capitalize">Email</p>
            </label>
            <input type="text" className="input input-bordered undefined" />
          </div>
          <div className="flex flex-col">
            <label className="label px-2">
              <p className="label-text capitalize">Password</p>
            </label>
            <input type="text" className="input input-bordered undefined" />
          </div>
          <button className="btn btn-primary btn-block mt-4 uppercase">login</button>
          <button className="btn btn-secondary btn-block uppercase">Sign up</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
