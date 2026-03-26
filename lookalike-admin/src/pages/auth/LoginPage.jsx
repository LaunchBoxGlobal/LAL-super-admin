import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main
      className="w-full h-screen relative px-5 py-20 flex flex-col items-center justify-center gap-5 overflow-hidden"
      style={{
        backgroundImage: "url('/auth-bg.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        src="/lookalike-logo.png"
        alt="lookalike logo"
        className="w-full max-w-[209px] object-contain bg-transparent"
      />

      <div className="text-center space-y-2">
        <h1 className="text-[32px] font-semibold leading-none">Welcome Back</h1>
        <p className="text-[var(--secondary-text)] font-medium">
          Please enter details to continue
        </p>
      </div>

      <LoginForm />
    </main>
  );
};

export default LoginPage;
