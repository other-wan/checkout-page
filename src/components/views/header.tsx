import { ReactNode } from "react";
import ViewIcon from "../common/ViewIcon";
import Check from "../icons/Check";
import Dollar from "../icons/Dollar";

const Header = () => {
  const content = (icon: ReactNode, title: string, body: string) => (
    <>
      <ViewIcon
        className="h-12 w-12 flex justify-center items-center bg-dark-02 rounded-full"
        content={icon}
      />
      <div>
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
    content(<Check />, "first step", "information"),
    content(<Check />, "second step", "delivery"),
    content(<Check />, "third step", "billing"),
    content(<Dollar />, "fourth step", "payment"),
  ];

  return (
    <div className="py-5">
      <ul className="grid grid-cols-fluid gap-5">
        {items.map((item, index) => (
          <li className="flex items-center gap-5" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
