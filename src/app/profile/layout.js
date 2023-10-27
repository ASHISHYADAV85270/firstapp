"use client";
import { usePathname } from "next/navigation";
const layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        NAVBAR
      </div>
      {children}
    </div>
  );
};

export default layout;
