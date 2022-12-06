interface ICheck {
  className?: string;
}

const Card = ({ className }: ICheck) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 8.27517V6C2 5.44771 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6V8.27517M2 8.27517H22M2 8.27517V11M22 8.27517V11M22 11V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V11M22 11H2"
        stroke="#262D33"
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Card;