import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-19">
            <Outlet />
          </section>

          <img src="/images/auth_bg.jpg" />
        </>
      )}
    </>
  );
};

export default AuthLayout;
