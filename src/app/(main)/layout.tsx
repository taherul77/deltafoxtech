


import NavBar from "@/components/shared/NavBar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-backgroundColor">
    <NavBar/>
    
    {children}
    
  </div>
  )
}

export default layout;
