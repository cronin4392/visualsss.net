import { useState, useEffect, SyntheticEvent } from "react";
import Link, { LinkProps } from "next/link";
import { resolveHref } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import { isLocalUrl } from "@/utils/urls";

type LinkWrapperProps = {
  children: React.ReactNode;
  href: LinkProps["href"] | undefined;
  linkProps?: {
    [key: string]: string | boolean | (() => void) | undefined;
  };
};

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  href = "",
  children,
  linkProps,
}) => {
  const router = useRouter();
  const resolvedHref = resolveHref(router, href);
  const isLocalLink = isLocalUrl(resolvedHref);

  if (!isLocalLink) {
    return (
      <a {...linkProps} href={resolvedHref} target="_BLANK" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...linkProps}>
      {children}
    </Link>
  );
};

export default LinkWrapper;
