import { ReactNode } from "react";
import ViewIcon from "../common/ViewIcon";
import Billing from "../icons/Billing";
import Check from "../icons/Check";
import Delivery from "../icons/Delivery";
import Dollar from "../icons/Dollar";
import Info from "../icons/Info";

const Header = () => {
  const content = (icon: ReactNode, title: string, body: string) => (
    <>
      <ViewIcon
        className="h-12 w-12 flex justify-center items-center bg-dark-02 rounded-full"
        content={icon}
      />
      <div className="hidden lg:block">
        <p className="uppercase text-fs-10 text-dark-01 leading-lh-01">
          {title}
        </p>
        <p className="capitalize text-fs-40 text-dark-02 leading-lh-04">
          {body}
        </p>
      </div>
    </>
  );

  const items = [
    content(<Info />, "first step", "information"),
    content(<Delivery />, "second step", "delivery"),
    content(<Billing />, "third step", "billing"),
    content(<Dollar />, "fourth step", "payment"),
  ];

  return (
    <div className="py-5">
      <ul className="flex items-center justify-between">
        {items.map((item, index) => (
          <li
            className="flex items-center gap-5 relative after:content-[''] after:h-[2px] md:after:-right-[150%]
            after:w-[25%] after:bg-dark-02 after:absolute after:-right-[60%] last:after:w-0 lg:after:w-0"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
