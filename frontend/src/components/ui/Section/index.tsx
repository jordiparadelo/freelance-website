import styles from "./styles.module.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.RefObject<HTMLElement>;
  tag?: "section" | "div" | "header" | "footer";
}

const Section = (
  props: SectionProps & React.HTMLAttributes<HTMLDivElement>,
) => {
  const {
    children,
    className,
    id,
    ref = null,
    tag = "section",
    ...rest
  } = props;
  return (
    <section
      className={`${styles.section} ${className}`}
      id={id}
      ref={ref}
      {...rest}
      role={tag}
    >
      {children}
    </section>
  );
};

export default Section;
