import type { SVGProps } from "react-html-props";

export const VerifiedLogo = ({ ...props }: SVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
      <path d="m13.7 5-.8.2.3 1.8c0 3.4-2.8 6.1-6.2 6.1S.8 10.4.8 7a6.1 6.1 0 0 1 9.4-5.2l.4-.8C9.5.3 8.3 0 7 0a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7a7 7 0 0 0 6.7-9zm-8.8.4-.6.6 2.8 2.8 6.7-6.7-.6-.6-6.1 6.1-2.2-2.2z" />
    </svg>
  );
};
