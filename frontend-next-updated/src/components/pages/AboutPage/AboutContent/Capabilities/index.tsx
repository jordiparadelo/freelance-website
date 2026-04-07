"use client";

import { useState } from "react";
// Components
import { TagsList } from "@/components/ui";
// Context
import { useCapability } from "@/context/CapabilityContext";
// Types
import type { Capability, Tags } from "@/types";
// Styles
import styles from "../styles.module.scss";

const TAGS = [
  { id: 1, label: "Webflow", group: ["Design"] },
  { id: 2, label: "Figma", group: ["Design"] },
  { id: 3, label: "React", group: ["Frontend"] },
  { id: 4, label: "TypeScript", group: ["Frontend"] },
  { id: 5, label: "Next.js", group: ["Frontend"] },
  { id: 6, label: "Framer Motion", group: ["Frontend", "Animation"] },
  { id: 7, label: "GSAP", group: ["Frontend", "Animation", "Design"] },
  { id: 8, label: "Lenis", group: ["Frontend", "Animation", "Design"] },
];

const groups = [...new Set(TAGS.flatMap((tag) => tag.group))];

const Capabilities = () => {
  const { setCapability } = useCapability();
  const [selectedGroup, setSelectedGroup] = useState<Tags[]>(TAGS);

  const handleFilter = (group: string) => {
    const groupSelected: Tags[] = TAGS.filter((tag) =>
      tag.group.includes(group),
    ).map((tag) => tag);

    setCapability(group as Capability["group"]);

    if (group.toLowerCase().includes("all")) {
      setSelectedGroup(TAGS);
    } else {
      setSelectedGroup(groupSelected);
    }
  };

  return (
    <section className={styles["about-content__section"]}>
      <div className={styles["about-content__section-header"]}>
        <h2 className={styles["about-content__heading"]}>Capabilities</h2>
        <select
          onChange={(e) => handleFilter(e.target.value)}
          className={styles["about-content__select"]}
        >
          <option defaultValue="all">For All</option>
          {groups.map((group) => (
            <option key={group} value={group}>
              For {group}
            </option>
          ))}
        </select>
      </div>

      <TagsList tags={selectedGroup} />
    </section>
  );
};

export default Capabilities;
