import  { useState } from "react";

const SignupCard = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Signup Data:", form);
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 font-manrose">
      <span className="text-xs  bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">
        LIMITED INVITATIONS
      </span>

      <h2 className="text-xl font-semibold mt-3 tracking-[1px]">
        Create Identity
      </h2>
      <p className="text-gray-400 text-sm mb-4">
        Begin your curated experience.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Name Fields */}
        <div className="flex gap-2">
          <label className="flex flex-col gap-1 w-1/2">
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="Julian"
              value={form.firstName}
              onChange={handleChange}
              className="w-full p-4 bg-black rounded-md"
            />
          </label>
          <label className="flex flex-col gap-1 w-1/2">
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Vane"
              value={form.lastName}
              onChange={handleChange}
              className="w-full p-4 bg-black rounded-md"
            />
          </label>
        </div>

        <label htmlFor="" className="flex flex-col gap-3">
          Email Address
          <input
            type="email"
            name="email"
            placeholder="julian@gala.com"
            value={form.email}
            onChange={handleChange}
            className="p-5 bg-black  rounded-md"
          />
        </label>

        <label htmlFor="" className="flex flex-col gap-3">
          Create Password
          <input
            type="password"
            name="password"
            placeholder="Min. 8 characters"
            value={form.password}
            onChange={handleChange}
            className="p-5 bg-black  rounded-md"
          />
        </label>

        <div className="last-section flex flex-col gap-6 text-center mt-6">
          <p className="text-xs text-gray-500">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>

          <button className="mt-4 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500">
            REQUEST ACCESS
          </button>

          <p className="text-sm text-center text-gray-400 flex items-center justify-center gap-2">
            Already an attendee?
            <span className="text-purple-400 cursor-pointer">Sign In</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupCard;
