import React, { useState } from "react";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonsVisible, setIsButtonsVisible] = useState(true);
  const [isLoginButtonVisible, setIsLoginButtonVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleButtons();
    toggleLoginButton();
  };

  const toggleButtons = () => {
    setIsButtonsVisible(!isButtonsVisible);
  };

  const toggleLoginButton = () => {
    setIsLoginButtonVisible(!isLoginButtonVisible);
  };

  function handleClick() {
    toggleButtons();
  }

  return (
    <div className="bg-pink-100 py-2 px-4 flex justify-between">
      <img
        src="public/Logo-Natwest-Colour.png"
        className="w-auto h-12 "
        alt="Mettle by Natwest Logo"
      />

      <div className="flex justify-between gap-4">
        <div
          className={`hidden lg:flex items-center space-x-4 ${
            isButtonsVisible ? "block" : "hidden"
          }`}
        >
          {/* Desktop menu items go here */}
          <button onClick={handleClick}>Desktop Item 1</button>
          <button onClick={handleClick}>Desktop Item 2</button>
          <button onClick={handleClick}>Desktop Item 3</button>
        </div>
        {/* OPEN ACCOUNT BUTTON */}
        <Button
          className={`bg-red-400 text-white bold py-2 px-8 rounded-full font-bold transform hover:bg-red-500 hover:scale-x-105 hover:scale-y-105 transition-transform duration-300 ease-in-out ${
            isButtonsVisible ? "block" : "hidden"
          }`}
          onclick={handleClick}
          label="Open account"
        ></Button>
        {/* LOG IN BUTTON */}
        <Button
          className={`hidden sm:block border-red-400 border-2 text-red-500 bold py-2 px-8 rounded-full font-bold transform hover:bg-red-500 hover:scale-x-105 hover:scale-y-105 hover:text-white transition-transform duration-300 ease-in-out ${
            isLoginButtonVisible ? "block" : "hidden"
          }`}
          onclick={handleClick}
          label="Log in"
        ></Button>

        <div className="lg:hidden">
          {/* Hamburger menu button */}
          <button onClick={toggleMenu} className="text-4xl">
            {isMenuOpen ? "✕" : "☰"}
          </button>
          {/* Hamburger menu component */}
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
