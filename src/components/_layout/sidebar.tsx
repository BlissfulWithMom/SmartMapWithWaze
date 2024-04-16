import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed h-full w-60 overflow-hidden bg-secondary transition-all duration-500 md:w-16">
      <nav className="h-full">
        <ul>
          <li>
            <a className="toggle" onClick={() => setIsOpen(!isOpen)}>
              <span className="icon">
                <i className="fas fa-bars" />
              </span>
              <span className="title">Menu</span>
            </a>
          </li>
          {/* Add other list items here */}
        </ul>
      </nav>
      <Transition
        show={isOpen}
        enter="transition-all transform duration-500 ease-in-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-all transform duration-500 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {/* Add your sidebar content here */}
      </Transition>
    </div>
  );
}
