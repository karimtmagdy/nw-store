import { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react";

export type TableProps = HTMLAttributes<HTMLTableElement>;
export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
