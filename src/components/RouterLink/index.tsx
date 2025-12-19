import React from "react";
import { Link } from "react-router";

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>;

export function RouterLink({ children, href, ...props }: RouterLinkProps): React.ReactElement {
  return (
    <Link to={href} {...props}>
        {children}
    </Link>
  );
}