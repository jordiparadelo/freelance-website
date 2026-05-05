"use client";

import { useRef } from "react";
import { Table } from "@/components/ui";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/Table";
import type { Experience } from "@/lib/db/types";
import { animateTableScroll } from "./animations";
import { useExperience } from "./ExperienceProvider";
import styles from "./styles.module.css";

export const ExperienceTable = ({ data }: { data: Experience[] }) => {
  const componentRef = useRef(null);
  const headTitles = Object.keys(data[0]).filter(
    (entry) => entry !== "id" && entry !== "documentId",
  );
  const { activeExperience } = useExperience();

  animateTableScroll(componentRef);

  return (
    <Table className={styles["experience_table"]} ref={componentRef}>
      <TableHead>
        {headTitles.map((title) => (
          <TableCell key={title} data-category={title}>
            {" "}
            {title}
          </TableCell>
        ))}
      </TableHead>
      <TableBody data-target="body">
        {data.map((experience, index) => {
          const { id, company, industry, role, year } = experience;
          const rowCells = [role, company, industry, year];

          return (
            <TableRow
              key={id}
              data-target="row"
              data-selected={index === activeExperience}
            >
              {rowCells.map((value, index) => (
                <TableCell
                  key={value}
                  data-target="cell"
                  data-category={headTitles[index]}
                >
                  {!index ? (
                    <h3 className="heading-style-h4">{value}</h3>
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
