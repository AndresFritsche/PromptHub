const Register = () => {
  return (
    <section className="h-screen text-white flex justify-center items-center">
      <form action="" className="w-1/4 h-3/4  flex flex-col items-center justify-center bg-white/10 border border-white/10 rounded-xl shadow-2xl ">
        <label htmlFor="" className="w-1/2 mr-40 text-3xl">
          First Name
        </label>
        <input type="text" placeholder="Enter text..." className="w-1/2 border rounded-lg mr-40 px-2"/>
      </form>
    </section>
  );
};
export default Register;
