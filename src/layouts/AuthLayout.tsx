import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex  h-screen">
      <section className="lg:flex hidden  bg-brand flex-col gap-5 w-2/5 items-center py-8 space-y-12">
        <div>
          <img className="w-[14rem] h-[5rem]" src="/Logo.svg" alt="auth" />
        </div>
        <div className="space-y-8 w-[25rem]">
          <h1 className="h1 text-[#ffffff]  font-poppins ">
            Manage your files the best way
          </h1>
          <p className="body-1 text-[#ffffff]">
            Awesome, we've created the perfect place for you to store all your
            documents.
          </p>
        </div>
        <div className=" mt-[20rem]">
          <img
            src="Illustration.png"
            alt=""
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="lg:hidden mb-16 ">
          <img
            className="w-[14rem] h-auto "
            src="/logo-full-brand.svg"
            alt="auth"
          />
        </div>

        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;
