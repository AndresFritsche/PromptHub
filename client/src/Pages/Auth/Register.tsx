import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1, 'Name is required'),
  lastName:z.string().min(1, 'Last name is required'),
  email: z.string().email(),
  password: z.string().min(12),

})

type FormProps = z.infer<typeof schema>

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <section className="h-screen  text-white flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8  border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg space-y-8"
      >
        <h1 className="w-full flex justify-center text-4xl font-bold">
          Register!
        </h1>
        <div>
          <label
            htmlFor="firstName"
            className="block text-xl font-semibold mb-2"
          >
            First Name
          </label>
          <input
            {...register("firstName", { required: true })}
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-xl font-semibold mb-3"
          >
            Last Name
          </label>
          <input
            {...register("lastName", { required: true })}
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <div>
          <label htmlFor="email" className="block text-xl font-semibold mb-2">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <div>
          <label
            htmlFor="password"
            className="block text-xl font-semibold mb-2"
          >
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-3 mt-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>
    </section>
  );
};
export default Register;
