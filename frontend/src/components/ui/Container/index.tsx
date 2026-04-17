import styles from "./styles.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}
const Container = (props: ContainerProps) => {
  const { children, className, size } = props;
  return (
    <div className={`${styles.container} ${className}`} data-size={size}>
      {children}
    </div>
  );
};

export default Container;
