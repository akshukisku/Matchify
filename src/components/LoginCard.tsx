import  { useState } from "react";

const LoginCard = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 font-manrose ">
      <h2 className="text-xl font-semibold">Welcome Back</h2>
      <p className="text-gray-400 text-sm mb-4">
        Continue your journey in the gala.
      </p>

      {/* Google Button */}
      <button className="w-full py-2 bg-[#1a1a1a] rounded-lg mb-4 hover:bg-[#222]">
        Sign in with Google
      </button>

      <p className="text-center text-xs text-gray-500 mb-4">OR USE EMAIL</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="email" className="flex flex-col gap-3 uppercase text-[#767575] font-bold text-[14px]">Email  Address
          <input
          type="email"
          name="email"
          placeholder="julian@gala.com"
          value={form.email}
          onChange={handleChange}
          className="p-2 bg-black  rounded-md outline-none "
        />
      </label>

     <label htmlFor="" className="flex flex-col gap-3 uppercase text-[#767575] font-bold text-[14px]">Password
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          className="p-2 bg-black rounded-md outline-none"
        />
     </label>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            Keep me active
          </label>
          <a href="#" className="text-pink-400">
            Forgot Password?
          </a>
        </div>

        <button className="mt-4 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black font-bold">
          ENTER GALA
        </button>
      </form>
    </div>
  );
};

export default LoginCard;