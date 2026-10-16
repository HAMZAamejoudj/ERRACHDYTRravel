"use client";

import type { ReactNode } from "react";

type PartnersMarqueeProps = {
  children: ReactNode;
};

export function PartnersMarquee({ children }: PartnersMarqueeProps) {
  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className="partners-marquee-track"
        style={{ animation: "partners-marquee 26s linear infinite" }}
      >
        <ul className="flex shrink-0 items-start gap-10 px-4 sm:gap-14 sm:px-6">
          {children}
        </ul>
        <ul
          className="flex shrink-0 items-start gap-10 px-4 sm:gap-14 sm:px-6"
          aria-hidden
        >
          {children}
        </ul>
      </div>
    </div>
  );
}
