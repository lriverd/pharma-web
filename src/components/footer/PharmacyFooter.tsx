import packageJson from "../../../package.json";

import styles from "./PharmacyFooter.module.scss";

export const PharmacyFooter = () => {
  return (
    <div className={styles.textFooter}>
      Pharmacy Web ©2022 Created by lriverd <br />
      version {packageJson.version}
    </div>
  );
};
