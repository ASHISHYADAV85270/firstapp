"use client";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();

  return (
    <div>
      <div>About</div>
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        LoginPage
      </button>
    </div>
  );
};

export default About;
