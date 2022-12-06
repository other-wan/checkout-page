import { FunctionComponent, ReactNode } from "react";

interface ISection {
  content: ReactNode;
  header?: string;
  className?: string;
}

const Section: FunctionComponent<ISection> = ({
  header,
  content,
  className,
}) => {
  return (
    <section className={className}>
      {header && <h2 className="text-[28px] capitalize mb-5">{header}</h2>}
      {content}
    </section>
  );
};

export default Section;
