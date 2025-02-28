import { IconSVG, Props } from "./IconSVG";

export function ArrowLeftIcon(props: Props) {
  return (
    <IconSVG {...props}>
      <path
        fillRule="evenodd"
        d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
        clipRule="evenodd"
      />
    </IconSVG>
  );
}
