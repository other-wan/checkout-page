interface IDollar {
  className?: string;
}

const Dollar = ({ className }: IDollar) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="11.9999" cy="12" r="10" stroke="white" stroke-width="1.2" />
      <path
        d="M14.9999 9.55C14.9999 8.1969 13.6568 7.1 11.9999 7.1M11.9999 7.1C10.3431 7.1 8.99994 8.1969 8.99994 9.55C8.99994 10.9031 10.4329 11.6344 11.9999 12C13.4999 12.35 14.9999 13.0969 14.9999 14.45C14.9999 15.8031 13.6568 16.9 11.9999 16.9M11.9999 7.1V5M11.9999 16.9C10.3431 16.9 8.99994 15.8031 8.99994 14.45M11.9999 16.9V19"
        stroke="white"
        stroke-width="1.2"
      />
    </svg>
  );
};

export default Dollar;
