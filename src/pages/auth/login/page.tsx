const LoginPage = () => {
  return (
    <div className="clea">
      <section>
        <h1 className="font-bold text-3xl ">Login</h1>

        <div className="flex flex-col">
          <label className="fold-bold text-2xl">Email</label>
          <input
            type="text"
            className="border-2 py-4  w-[25rem] text-2xl px-2 "
            placeholder="hey"
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
