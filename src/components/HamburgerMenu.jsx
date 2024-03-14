import React from "react";

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-16 left-0 bg-pink-100 z-50 w-full h-screen"
          onClick={onClose} // Close the menu when clicking anywhere on the overlay
        ></div>
      )}

      {/* Hamburger menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } z-50 absolute top-16 left-0 right-0 bg-pink-100 flex justify-center`}
      >
        {/* Add your menu items here */}
        <div className="flex flex-col gap-5 justify-between min-w-[350px] max-w-[700px]">
          <div className="flex justify-between px-8 mt-6 hover:text-pink-500 hover:bg-white hover:rounded-full">
            <p>Features</p>
            <p>v</p>
          </div>
          <div className="flex justify-between px-8 ">
            <p>Resources</p>
            <p>v</p>
          </div>
          <div className="flex justify-between px-8 ">
            <p>Life at Mettle</p>
            <p>v</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
