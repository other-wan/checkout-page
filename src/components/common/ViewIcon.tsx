import { ReactNode } from "react";

interface IViewIcon {
  content: ReactNode;
  className?: string;
}

const ViewIcon = ({ content, className }: IViewIcon) => {
  return <div className={className}>{content}</div>;
};

export default ViewIcon;
