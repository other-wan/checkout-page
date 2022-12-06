import { Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";
import classNames from "classnames";
import ViewIcon from "src/components/common/ViewIcon";
import Card from "src/components/icons/Card";
import Check from "src/components/icons/Check";
import Header from "src/components/views/header";
import Section from "src/layouts/Section";

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
        "flex items-center justify-between relative py-5 px-4\
        border border-transparent shadow-lg",
        { ["!border-dark-02"]: active }
      )}
    >
      <label
        htmlFor={inputId}
        className="flex-1 flex items-center gap-3 text-fs-20 
        font-semibold leading-lh-03"
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

  return (
    <div className="w-[90%] mx-auto text-dark-02 font-urban text-fs-30 font-bold">
      <header>
        <Header />
      </header>
      <main className="">
        <Section
          content={
            <>
              <Section
                className="py-12"
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
                content={
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
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
                      content={
                        <div className="text-fs-40 font-normal leading-lh-04 text-dark-01">
                          <p className="mb-3">Pristia Candra Arum</p>
                          <p className="mb-3">
                            Banyumanik Street no 14, Central Java Semarang
                            Indonesia
                          </p>
                          <p className="mb-3">pristia@gmail.com</p>
                          <p>0809210301002</p>
                        </div>
                      }
                    />

                    <Section
                      className="py-8"
                      header="Shipping"
                      content={
                        <div className="text-fs-40 font-normal leading-lh-04 text-dark-01">
                          <p className="mb-3">Pristia Candra Arum</p>
                          <p className="mb-3">
                            Banyumanik Street no 14, Central Java Semarang
                            Indonesia
                          </p>
                          <p className="mb-3">pristia@gmail.com</p>
                          <p>0809210301002</p>
                        </div>
                      }
                    />

                    <Section
                      className="py-8"
                      header="Billing"
                      content={
                        <div className="text-fs-40 font-normal leading-lh-04 text-dark-01">
                          <p className="mb-3">Pristia Candra Arum</p>
                          <p className="mb-3">
                            Banyumanik Street no 14, Central Java Semarang
                            Indonesia
                          </p>
                          <p className="mb-3">pristia@gmail.com</p>
                          <p>0809210301002</p>
                        </div>
                      }
                    />
                  </form>
                }
              />
            </>
          }
        />
      </main>
    </div>
  );
}
