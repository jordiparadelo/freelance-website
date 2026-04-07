import Image from "next/image";
import useLiveClock from "@/hooks/useLiveClock";
import styles from "./styles.module.scss";

const Location = () => {
  const currentTime = useLiveClock();
  return (
    <div className={styles["about-info__location"]}>
      <div className={styles["about-info__location-info"]}>
        <p>Valencia, ES</p>
        <p>
          <span>{currentTime}</span> · GMT+1 Local time
        </p>
      </div>
      <Image
        src="/assets/map.png"
        alt="Map"
        width={480}
        height={360}
        className={styles["about-info__location-map"]}
      />
    </div>
  );
};

export default Location;
