import { useAuthStore } from "../store/auth";

const Login = () => {
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    const fakeUser = {
      name: "John Doe",
      email: "john@example.com",
    };
    login(fakeUser);  // Simulate login
    window.location.href = "/";  // Redirect after login
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Sign In with Test Account
      </button>
    </div>
  );
};

export default Login;
