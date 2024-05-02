import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" py-2 px-3 w-full flex justify-between items-center bg-cyan-950">
      <div className="w-[40px]">
        <img
          className=" object-cover rounded-full"
          src="https://source.unsplash.com/200x200/?logo"
          alt="Logo"
        />
      </div>
      <div className="flex gap-2">
        <div className="flex ">
          <div className="relative rounded-s-full">
            <button
              className=" rounded-s-full px-4 py-2 flex items-center gap-1 bg-slate-300 text-gray-600 font-medium focus:outline-none focus:text-white focus:bg-gray-700"
              onClick={toggleDropdown}
            >
              <span>Patients</span>
              <span class="material-symbols-rounded">keyboard_arrow_down</span>
            </button>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg">
                <ul>
                  <li
                    onClick={toggleDropdown}
                    className="py-2 px-4 cursor-default hover:bg-gray-100"
                  >
                    Option 1
                  </li>
                  <li
                    onClick={toggleDropdown}
                    className="py-2 px-4 cursor-default hover:bg-gray-100"
                  >
                    Option 2
                  </li>
                  <li
                    onClick={toggleDropdown}
                    className="py-2 px-4 cursor-default hover:bg-gray-100"
                  >
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center bg-white rounded-e-full">
            <input className="p-2 outline-none" type="text" />
            <span className="material-symbols-rounded text-[30px] px-1 text-gray-400 rounded-e-full cursor-pointer">
              search
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 cursor-pointer rounded-full p-2 text-white font-normal bg-green-700">
          <span class="material-symbols-rounded">add</span>
          <span className="text-nowrap">Add New</span>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className="p-2 bg-slate-400 rounded-full flex items-center">
          <span class="material-symbols-rounded">notifications</span>
        </div>
        <div className="w-[40px]">
          <img
            className=" object-cover rounded-full"
            src="https://source.unsplash.com/200x200/?user"
            alt="Logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
