import { Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";
import classNames from "classnames";
import ViewIcon from "src/components/common/ViewIcon";
import Card from "src/components/icons/Card";
import Check from "src/components/icons/Check";
import Header from "src/components/views/header";
import Section from "src/layouts/Section";
import { PaystackButton } from "react-paystack";

export default function Home() {
  const [active, setActive] = useState(0);

  const checkbox = (
    label: ReactNode,
    inputId: string,
    active: boolean,
    setActive: Dispatch<SetStateAction<number>>,
    index: number
  ) => (
    <div
      className={classNames(
        "flex items-center justify-between relative\
        border border-transparent shadow-lg px-4",
        { ["!border-dark-02"]: active }
      )}
    >
      <label
        htmlFor={inputId}
        className="flex-1 flex items-center gap-3 text-fs-20 
        font-semibold leading-lh-03 py-5"
      >
        {label}
      </label>
      <input
        type="checkbox"
        name="npayment"
        id={inputId}
        className="check w-8 h-8 opacity-0 absolute right-0 z-20"
        onChange={() => setActive(index)}
      />
      <ViewIcon
        className={classNames(
          "h-8 w-8 flex justify-center items-center bg-dark-02 rounded-full",
          {
            ["!opacity-0"]: !active,
          }
        )}
        content={<Check />}
      />
    </div>
  );

  const input = (
    id: string,
    type: string,
    label: string,
    placeholder: string
  ) => (
    <>
      <label htmlFor={id} className="font-semibold text-fs-20 leading-lh-02">
        {label}
      </label>
      <input
        type={type}
        className="w-full py-4 border-0 shadow-lg focus:ring-dark-02 
        text-fs-20 leading-lh-02 font-semibold tracking-wider"
        placeholder={placeholder}
      />
    </>
  );

  const checkboxItems = [
    (checked: boolean, index: number) =>
      checkbox(
        <>
          <ViewIcon content={<Card />} />
          Credit or Debit Card
        </>,
        "card",
        checked,
        setActive,
        index
      ),
    (checked: boolean, index: number) =>
      checkbox(
        <>
          <div className="w-6 h-6 rounded-full bg-blue-01"></div>
          Paystack
        </>,
        "paystack",
        checked,
        setActive,
        index
      ),
  ];

  const inputItems = [
    {
      content: input("fname", "text", "Name on card", "Muhammed Ridwan"),
      className: "row-start-1 row-end-2 col-span-2 flex flex-col gap-2",
    },
    {
      content: input(
        "fcard-number",
        "number",
        "Card number",
        "0002010210201030"
      ),
      className: "row-start-2 row-end-3 col-span-2 flex flex-col gap-2",
    },
    {
      content: input("fmonth", "number", "MM/YY", "06/23"),
      className:
        "row-start-3 row-end-4 col-start-1 col-end-2 flex flex-col gap-2",
    },
    {
      content: input("fcvv", "number", "CVV", "567"),
      className:
        "row-start-3 row-end-4 col-start-2 col-end-3 flex flex-col gap-2",
    },
  ];

  const componentProps = {
    email: "Tahir@example.com",
    amount: 21930,
    publicKey: "pk_test_7855c4793eb080701d744733022b21ca13370b90",
    text: "Place Order",
    onSuccess: () => console.log("Payment Sucessfull"),
    onClose: () => console.log("Order cancelled"),
  };

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-dark-02 font-urban text-fs-30 font-bold">
      <header>
        <Header />
      </header>
      <main className="">
        <Section
          content={
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="lg:grid lg:auto-cols-auto lg:auto-rows-auto lg:grid-flow-dense lg:gap-x-10"
            >
              <Section
                className="py-8"
                header="Choose payment"
                content={
                  <ul className="grid gap-5">
                    {checkboxItems.map((item, index) => (
                      <li key={index}>{item(active === index, index)}</li>
                    ))}
                  </ul>
                }
              />
              <Section
                className="py-8"
                header="Payment details"
                content={
                  <ul className="grid auto-cols-auto auto-rows-auto gap-4">
                    {inputItems.map((item, index) => (
                      <li
                        className={item.className}
                        key={item.className + index}
                      >
                        {item.content}
                      </li>
                    ))}
                  </ul>
                }
              />

              <Section
                className="py-8"
                header="Delivery"
                edit={true}
                content={
                  <div className="text-fs-40 font-normal leading-lh-04 text-dark-01">
                    <p className="mb-3">Pristia Candra Arum</p>
                    <p className="mb-3">
                      Banyumanik Street no 14, Central Java Semarang Indonesia
                    </p>
                    <p className="mb-3">pristia@gmail.com</p>
                    <p>0809210301002</p>
                  </div>
                }
              />

              <Section
                className="py-8"
                header="Shipping"
                edit={true}
                content={
                  <div className="text-fs-40 font-normal leading-lh-04 text-dark-01">
                    <p className="mb-3">Pristia Candra Arum</p>
                    <p className="mb-3">
                      Banyumanik Street no 14, Central Java Semarang Indonesia
                    </p>
                    <p className="mb-3">pristia@gmail.com</p>
                    <p>0809210301002</p>
                  </div>
                }
              />

              <Section
                className="py-8"
                header="Billing"
                edit={true}
                content={
                  <div className="text-fs-40 font-normal leading-lh-04 text-dark-01">
                    <p className="mb-3">Pristia Candra Arum</p>
                    <p className="mb-3">
                      Banyumanik Street no 14, Central Java Semarang Indonesia
                    </p>
                    <p className="mb-3">pristia@gmail.com</p>
                    <p>0809210301002</p>
                  </div>
                }
              />

              <Section
                className="py-8 col-start-2"
                header="Order summary"
                content={
                  <>
                    <div className="text-fs-40 font-normal leading-lh-04 text-dark-01">
                      <div className="w-full text-fs-30 leading-lh-05">
                        <div className="flex items-center justify-between mb-5">
                          <p className="">Subtotal</p>
                          <p className=" text-dark-02 font-bold">$119,32</p>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                          <p>Duties & Tax</p>
                          <p className="text-dark-02 font-bold">$90</p>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                          <p>Delivery</p>
                          <p className=" text-dark-02 font-bold">$10</p>
                        </div>
                        <div className="flex items-center justify-between mb-5">
                          <p className="text-fs-40 text-dark-02 font-bold">
                            Total
                          </p>
                          <p className=" text-fs-40 text-dark-02 font-bold">
                            $219,32
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 py-5 text-dark-02 font-bold">
                        <div className="w-[120px] h-[133px] bg-dark-01 shadow-lg"></div>
                        <div className="flex flex-col justify-between">
                          <h3>Liverpool F.C. 21/22 Home Kit Goalkeeper</h3>
                          <p className="text-dark-01 font-normal">
                            Football . Size L . QTY 1
                          </p>
                          <p>$59,66</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 py-5 text-dark-02 font-bold">
                        <div className="w-[120px] h-[133px] bg-dark-01 shadow-lg"></div>
                        <div className="flex flex-col justify-between">
                          <h3>Liverpool F.C. 21/22 Home Kit Goalkeeper</h3>
                          <p className="text-dark-01 font-normal">
                            Football . Size L . QTY 1
                          </p>
                          <p>$59,66</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-5 pb-12 self-start py-5">
                      <button className="py-5 px-10 shadow-lg">Back</button>
                      <PaystackButton
                        {...componentProps}
                        className="py-5 px-10 bg-dark-02 text-white"
                      />
                    </div>
                  </>
                }
              />
            </form>
          }
        />
      </main>
    </div>
  );
}
