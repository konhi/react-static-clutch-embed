import { SVGProps } from "react-html-props";

export const StarIconFilled = ({ ...props }: SVGProps) => {
  return (
    <svg className="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" {...props}>
      <g data-name="Layer 2">
        <path
          className="cls-1"
          d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
};

export const StarIconEmpty = ({ ...props }: SVGProps) => {
  return (
    <svg className="star-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" {...props}>
      <g data-name="Layer 2">
        <path
          className="cls-1"
          d="M5.94 1.78 6.89 4l.24.55.6.06 2.43.2-1.85 1.63-.45.39.14.59.55 2.37-2.09-1.27-.52-.31-.52.31-2.09 1.27.55-2.37.12-.59-.46-.39-1.82-1.61 2.43-.2.6-.06L5 4l1-2.24M5.94 0a.48.48 0 0 0-.46.3L4.06 3.63l-3.6.31a.5.5 0 0 0-.29.87l2.74 2.38-.83 3.53a.5.5 0 0 0 .49.62.52.52 0 0 0 .26-.08l3.11-1.88 3.11 1.88a.49.49 0 0 0 .74-.54L9 7.19l2.7-2.38a.49.49 0 0 0-.28-.87l-3.61-.31L6.4.3a.5.5 0 0 0-.46-.3Z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
};
