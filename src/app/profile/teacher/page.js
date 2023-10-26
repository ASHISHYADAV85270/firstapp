"use client";
import { useRouter } from "next/navigation";
const Teacher = () => {
  const router = useRouter();
  return (
    <div>
      <div>Teacher</div>
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

export default Teacher;
