// HamburgerMenu.jsx
import React from "react";

const HamburgerMenu = ({ isOpen, toggleMenu, onClose }) => {
  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-pink-100 z-50"
          onClick={onClose} // Close the menu when clicking anywhere on the overlay
        ></div>
      )}

      {/* Hamburger menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } z-50 absolute top-0 left-0 right-0 bg-pink-100`}
      >
        <button
          className="absolute top-4 right-4 text-4xl"
          onClick={toggleMenu}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        {/* Add your menu items here */}
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
