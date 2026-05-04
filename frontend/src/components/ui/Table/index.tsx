/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { createContext, useContext } from "react";
import styles from "./styles.module.css";
import type { TableChildProps, TableProps } from "./types";

const TableContext = createContext<boolean | null>(null);

const Table = ({ children, className, data, ref }: TableProps) => {
	const composedClassName = className
		? `${styles.table} ${className}`
		: `${styles.table}`;

	const NestedTable = () => (
		<div className={composedClassName} ref={ref}>
			{children}
		</div>
	);
	const DataTable = ({ data }: { data: TableProps["data"] }) => (
		<div className={composedClassName} ref={ref}>
			<TableHead>
				{data
					?.slice(0, 1)
					.map((head) =>
						head.map(({ label }) => <TableCell key={label}>{label}</TableCell>),
					)}
			</TableHead>
			<TableBody>
				<ul className={styles["list"]}>
					{data?.map((row, index) => (
						<li key={index} className={styles["list_item"]}>
							<TableRow>
								{row.map(({ label, value }, index) => (
									<TableCell key={label}>
										{!index ? (
											<h3 className="heading-style-h4">{value}</h3>
										) : (
											<p>{value}</p>
										)}
									</TableCell>
								))}
							</TableRow>
						</li>
					))}
				</ul>
			</TableBody>
		</div>
	);
	return (
		<TableContext.Provider value={true}>
			{data ? <DataTable data={data} /> : <NestedTable />}
		</TableContext.Provider>
	);
};

function useTableContext(component: string) {
	const context = useContext(TableContext);
	if (!context) {
		throw new Error(`<Table.${component}> must be used within a <Table>`);
	}
}

const TableHead = ({ children, className, ...props }: TableChildProps) => {
	useTableContext("Head");
	const composedClassName = className
		? `${styles.head} ${className}`
		: `${styles.head}`;
	return (
		<div className={`${composedClassName}`} {...props}>
			<div className={styles["list_row"]}>{children}</div>
		</div>
	);
};

const TableBody = ({ children, className, ...props }: TableChildProps) => {
	useTableContext("Body");
	const composedClassName = className
		? `${styles.body} ${className}`
		: `${styles.body}`;
	return (
		<div className={composedClassName} {...props}>
			{children}
		</div>
	);
};

const TableRow = ({ children, className, ...props }: TableChildProps) => {
	useTableContext("Row");
	const composedClassName = className
		? `${styles["list_row"]} ${className}`
		: `${styles["list_row"]}`;
	return (
		<div className={composedClassName} {...props}>
			{children}
		</div>
	);
};

const TableCell = ({ children, className, ...props }: TableChildProps) => {
	useTableContext("Cell");
	const composedClassName = className
		? `${styles.cell} ${className}`
		: `${styles.cell}`;
	return (
		<div className={composedClassName} {...props}>
			{children}
		</div>
	);
};

export default Table;
export { TableHead, TableBody, TableRow, TableCell };
