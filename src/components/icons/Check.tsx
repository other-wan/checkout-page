interface ICheck {
  className?: string;
}

const Check = ({ className }: ICheck) => {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 6L6.5 11.5L17 1" stroke="white" stroke-width="1.2" />
    </svg>
  );
};

export default Check;
