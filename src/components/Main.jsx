import { useState } from "react";

const Main = () => {
  const [onOpen, setOnOpen] = useState(false);
  const toggleDropdown = () => {
    setOnOpen(!onOpen);
  };
  return (
    <div className="w-full bg-slate-100 p-2 flex flex-col gap-2">
      <div className="w-full bg-white rounded flex">
        <div className="flex items-center p-2 border-b-2 text-green-800 gap-3 border-green-700">
          <span class="material-symbols-rounded">groups</span>
          <div className="font-medium">Consultants</div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-start rounded">
        <div className="flex items-center gap-4">
          <div className="relative after:content-[''] after:absolute after:top-[15px] after:right-[-5px] after:bg-green-800 after:size-3 after:rotate-[45deg] bg-green-800 p-2 rounded-s-lg text-white">
            Fliters
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex gap-2 items-center border p-[3px] px-4 rounded-full"
            >
              <div>Select Range</div>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </button>
            {onOpen && (
              <div className="absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg">
                <ul>
                  <li
                    onClick={toggleDropdown}
                    className="py-2 px-4 cursor-default hover:bg-gray-100"
                  >
                    0 - 20
                  </li>
                  <li
                    onClick={toggleDropdown}
                    className="py-2 px-4 cursor-default hover:bg-gray-100"
                  >
                    20 - 40
                  </li>
                  <li
                    onClick={toggleDropdown}
                    className="py-2 px-4 cursor-default hover:bg-gray-100"
                  >
                    40 - 60
                  </li>
                  <li
                    onClick={toggleDropdown}
                    className="py-2 px-4 cursor-default hover:bg-gray-100"
                  >
                    60 - 100
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div class="flex items-center">
            <input
              id="checkbox-id"
              type="checkbox"
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-neutral-900 focus:ring-neutral-900"
            />
            <label
              for="checkbox-id"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Summary
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="checkbox-id"
              type="checkbox"
              class="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-neutral-900 focus:ring-neutral-900"
            />
            <label
              for="checkbox-id"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Branch Wise
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex justify-between min-w-[200px] flex-grow items-center gap-3 border-l-4 px-3 bg-white rounded border-orange-200">
          <div>
            <h5 className="text-green-800 font-bold text-lg">
              Consultant Count
            </h5>
            <span className="text-xl">
              <b>90 / 900</b>
            </span>
            <p className="text-slate-500">Today/Period</p>
          </div>
          <div className="bg-orange-200 p-3 w-18 h-18 flex items-center justify-center rounded-full">
            <span class="material-symbols-rounded">groups</span>
          </div>
        </div>
        <div className="flex justify-between min-w-[200px] flex-grow items-center gap-3 border-l-4 px-3 bg-white rounded border-indigo-200">
          <div>
            <h5 className="text-green-800 font-bold text-lg">Consultations</h5>
            <span className="text-xl">
              <b>11 / 25</b>
            </span>
            <p className="text-slate-500">Today/Period</p>
          </div>
          <div className="bg-indigo-200 p-3 w-18 h-18 flex items-center justify-center rounded-full">
            <span class="material-symbols-rounded">align_horizontal_left</span>
          </div>
        </div>
        <div className="flex justify-between min-w-[200px] flex-grow items-center gap-3 border-l-4 px-3 bg-white rounded border-green-200">
          <div>
            <h5 className="text-green-800 font-bold text-lg">Labs</h5>
            <span className="text-xl">
              <b>25 / 560</b>
            </span>
            <p className="text-slate-500">Today/Period</p>
          </div>
          <div className="bg-green-200 p-3 w-18 h-18 flex items-center justify-center rounded-full">
            <span class="material-symbols-rounded">local_activity</span>
          </div>
        </div>
        <div className="flex justify-between min-w-[200px] flex-grow items-center gap-3 border-l-4 px-3 bg-white rounded border-violet-200">
          <div>
            <h5 className="text-green-800 font-bold text-lg">DietPlans</h5>
            <span className="text-xl">
              <b>25 / 250</b>
            </span>
            <p className="text-slate-500">Today/Period</p>
          </div>
          <div className="bg-violet-200 p-3 w-18 h-18 flex items-center justify-center rounded-full">
            <span class="material-symbols-rounded">local_atm</span>
          </div>
        </div>
      </div>

      <div className="grid gap-2 bg-white rounded-lg p-2">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Consultants</div>
          <div className="flex gap-3">
            <div className="border-2 rounded-full flex items-center justify-center p-2 h-10 w-10">
              <span class="material-symbols-rounded">redo</span>
            </div>
            <div className="border-2 rounded-full flex items-center justify-center p-2 h-10 w-10">
              <span class="material-symbols-rounded">arrow_downward</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full">
              <div class="overflow-hidden border rounded-sm">
                <table class="min-w-full divide-y">
                  <thead>
                    <tr class="text-neutral-800">
                      <th class="px-5 py-3 text-xs font-medium text-left uppercase">
                        NAME
                      </th>
                      <th class="px-5 py-3 text-xs font-medium text-left uppercase">
                        PATIENT COUNT
                      </th>
                      <th class="px-5 py-3 text-xs font-medium text-left uppercase">
                        LABS
                      </th>
                      <th class="px-5 py-3 text-xs font-medium text-right uppercase">
                        DIET PLANS
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-neutral-200/70">
                    <tr class="text-neutral-600 bg-neutral-50">
                      <td class="px-5 py-4 text-sm font-medium whitespace-nowrap">
                        John Smith
                      </td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">12</td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">3</td>
                      <td class="px-5 py-4 text-sm font-medium text-right whitespace-nowrap">
                        6
                      </td>
                    </tr>
                    <tr class="text-neutral-800">
                      <td class="px-5 py-4 text-sm font-medium whitespace-nowrap">
                        Jane Doe
                      </td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">8</td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">2</td>
                      <td class="px-5 py-4 text-sm font-medium text-right whitespace-nowrap">
                        4
                      </td>
                    </tr>
                    <tr class="text-neutral-800 bg-neutral-50">
                      <td class="px-5 py-4 text-sm font-medium whitespace-nowrap">
                        Mark Jhonson
                      </td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">6</td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">1</td>
                      <td class="px-5 py-4 text-sm font-medium text-right whitespace-nowrap">
                        2
                      </td>
                    </tr>
                    <tr class="text-neutral-800">
                      <td class="px-5 py-4 text-sm font-medium whitespace-nowrap">
                        Mary Lee
                      </td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">10</td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">4</td>
                      <td class="px-5 py-4 text-sm font-medium text-right whitespace-nowrap">
                        8
                      </td>
                    </tr>
                    <tr class="text-neutral-800 bg-neutral-50">
                      <td class="px-5 py-4 text-sm font-medium whitespace-nowrap">
                        David Chen
                      </td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">14</td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">5</td>
                      <td class="px-5 py-4 text-sm font-medium text-right whitespace-nowrap">
                        9
                      </td>
                    </tr>
                    <tr class="text-neutral-800">
                      <td class="px-5 py-4 text-sm font-medium whitespace-nowrap">
                        Emaily Wana
                      </td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">5</td>
                      <td class="px-5 py-4 text-sm whitespace-nowrap">2</td>
                      <td class="px-5 py-4 text-sm font-medium text-right whitespace-nowrap">
                        3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
