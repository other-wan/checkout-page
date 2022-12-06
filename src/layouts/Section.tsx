import { FunctionComponent, ReactNode } from "react";

interface ISection {
  content: ReactNode;
  header?: string;
  edit?: boolean;
  className?: string;
}

const Section: FunctionComponent<ISection> = ({
  header,
  content,
  edit,
  className,
}) => {
  return (
    <section className={className}>
      {header && (
        <h2 className="text-[28px] capitalize mb-5 flex items-center justify-between">
          {header}
          {edit && (
            <small className="ml-auto text-fs-30 font-normal text-dark-01 leading-lh-05">
              Edit
            </small>
          )}
        </h2>
      )}
      {content}
    </section>
  );
};

export default Section;
