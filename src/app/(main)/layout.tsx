
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div className="bg-backgroundColor">
    <Navbar />
    {children}
    {/* <Footer /> */}
  </div>;
}

export default layout;
