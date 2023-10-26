"use client";
import { useRouter } from "next/navigation";
const Student = () => {
  const router = useRouter();
  return (
    <div>
      <div>Student</div>
      <button
        onClick={() => {
          router.push("/profile");
        }}
      >
        Profile
      </button>
    </div>
  );
};

export default Student;
