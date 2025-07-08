import React from "react";
import styles from "./FlexVerticalThirdGrow.module.css";

interface IFlexVerticalThirdGrowProps {
  children: Array<React.ReactElement> | React.ReactElement;
  style?: object;
}

const FlexVerticalThirdGrow: React.FC<IFlexVerticalThirdGrowProps> = ({
  children,
  style,
}) => {
  return (
    <div
      className={styles.FlexVerticalThirdGrow}
      data-testid="FlexVerticalThirdGrow"
      style={style}
    >
      {children}
    </div>
  );
};

export default FlexVerticalThirdGrow;
