import React from "react";

const SideMenu = () => {
  return (
    <nav className="flex flex-col items-start justify-start bg-slate-100 px-3 w-56">
      <div className="w-full">
        <h4 className="text-gray-400 font-bold my-2">Dashboards</h4>
        <div className="flex flex-col items-center justify-center shadow bg-gray-100 rounded-lg ml-2">
          <div className="grid place-items-center hover:bg-green-800 hover:text-white hover:rounded-t-md border-b-2 w-full text-base px-10 py-2">
            <span class="material-symbols-rounded text-[25px]">
              account_circle
            </span>
            <h5>Patients</h5>
          </div>
          <div className="grid place-items-center bg-green-800 text-white border-b-2 w-full text-base px-10 py-2">
            <span class="material-symbols-rounded text-[25px]">database</span>
            <h5>HR</h5>
          </div>
          <div className="grid place-items-center hover:bg-green-800 hover:text-white border-b-2 w-full text-base px-10 py-2">
            <span class="material-symbols-rounded text-[25px]">filter_alt</span>
            <h5>Labs</h5>
          </div>
          <div className="grid place-items-center hover:bg-green-800 hover:rounded-b-md hover:text-white w-full text-base px-10 py-2">
            <span class="material-symbols-rounded text-[25px]">
              home_health
            </span>
            <h5>Pharma</h5>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h4 className="text-gray-400 font-bold my-2">Processes</h4>
        <div className="flex flex-col items-center justify-center shadow bg-gray-100 rounded-lg ml-2">
          <div className="grid place-items-center hover:bg-green-800 hover:text-white hover:rounded-t-md border-b-2 w-full text-base px-8 py-2">
            <span class="material-symbols-rounded text-[25px]">
              lab_profile
            </span>
            <h5>Registration</h5>
          </div>
          <div className="grid place-items-center hover:bg-green-800 hover:text-white border-b-2 w-full text-base px-8 py-2">
            <span class="material-symbols-rounded text-[25px]">
              description
            </span>
            <h5>Conslutation</h5>
          </div>
          <div className="grid place-items-center hover:bg-green-800 hover:text-white border-b-2 w-full text-base px-8 py-2">
            <span class="material-symbols-rounded text-[25px]">labs</span>
            <h5 className="text-nowrap">Tests & Reports</h5>
          </div>
          <div className="grid place-items-center hover:bg-green-800 hover:text-white hover:rounded-b-md border-b-2 w-full text-base px-8 py-2">
            <span class="material-symbols-rounded text-[25px]">payments</span>
            <h5>Billing</h5>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
