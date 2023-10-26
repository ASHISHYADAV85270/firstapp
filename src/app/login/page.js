"use client";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  return (
    <div>
      <div>Login</div>
      <button
        onClick={() => {
          router.push("/about");
        }}
      >
        AboutPage
      </button>
    </div>
  );
};

export default Login;
