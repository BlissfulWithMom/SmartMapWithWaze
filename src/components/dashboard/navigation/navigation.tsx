"use client";

import { useState } from "react";
import Navbar from "./navbar";
import DropMenu from "./dropmenu";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <DropMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  );
}

export default Navigation;
