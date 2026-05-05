import type { RefObject } from "react";

/** One cell (label + value). */
export type TableData = {
  label: string;
  value: string;
};

export type TableRows = TableData[][];

export type TableProps = {
  children?: React.ReactNode;
  className?: string;
  data?: TableRows;
  ref?: RefObject<HTMLDivElement | null>;
};

export type TableChildProps = {
  children: React.ReactNode;
  className?: string;
  props?: React.PropsWithChildren;
};
