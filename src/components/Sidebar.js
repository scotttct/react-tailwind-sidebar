import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#0B5345"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[20vw] bg-seafoam-900  p-10  pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className=" absolute left-5 mt-10 text-sm-4xl font-semibold text-white ">
          <h2>Navigation</h2>
          <ul>
            <li className="mt-5">
              Page 1
            </li>
            <li className="mt-2">Page 2</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;