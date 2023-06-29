import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../utils";

const Payment = () => {
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setCardData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleInputFocus = ({ target }) => {
    setCardData((prev) => ({ ...prev, focus: target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div
      className="relative container bg-cover my-0 mx-auto rounded-2xl"
      style={{ backgroundImage: "url('/assets/image 1.png')" }}
    >
      <div className="bg-gradient-to-r from-surface via-surface to-surface-50 rounded-2xl py-[3rem]">
        <div className="grid grid-cols-2">
          <div className="col-span-1 px-[5rem] text-textWhite flex flex-col gap-10">
            <div>
              <Cards
                number={cardData.number}
                expiry={cardData.expiry}
                cvc={cardData.cvc}
                name={cardData.name}
                focused={cardData.focus}
              />
            </div>
            <form
              method="POST"
              action="submit"
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label for="name" className="text-[18px]">
                  Name of credit card owner
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={cardData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="px-3 w-full h-[50px] rounded-lg bg-black outline-none focus-visible:outline-button"
                  required
                />
              </div>
              <div>
                <label for="number" className="text-[18px]">
                  card number
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  pattern="[\d| ]{16,22}"
                  placeholder="**** **** **** ****"
                  value={cardData.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="px-3 w-full h-[50px] rounded-lg bg-black outline-none focus-visible:outline-button"
                  required
                />
              </div>
              <div>
                <label for="expiry" className="text-[18px]">
                  expiration date
                </label>
                <input
                  type="tel"
                  id="expiry"
                  name="expiry"
                  pattern="\d\d/\d\d"
                  placeholder="MM/YY"
                  value={cardData.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="px-3 w-full h-[50px] rounded-lg bg-black outline-none focus-visible:outline-button"
                  required
                />
              </div>
              <div>
                <label for="cvc" className="text-[18px]">
                  cvc
                </label>
                <input
                  type="number"
                  id="cvc"
                  name="cvc"
                  pattern="\d{3,4}"
                  placeholder="123"
                  value={cardData.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="px-3 w-full h-[50px] rounded-lg bg-black outline-none focus-visible:outline-button"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-button self-center px-5 py-3 text-surface font-semibold text-2xl rounded-lg mt-6"
              >
                Pay Now
              </button>
            </form>
          </div>
          <div className="col-span-1 px-[4rem] relative">
            <h3 className="text-center font-Roboto text-4xl text-white mb-[60px] mt-36">
              Title
            </h3>
            <p className="text-textWhite text-justify text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="absolute bottom-0 right-16 text-white text-6xl">CF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
