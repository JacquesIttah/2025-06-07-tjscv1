import React from "react";
import styles from "./FlexVerticalThirdGrow.module.css";

interface IFlexVerticalThirdGrowProps {
  children: Array<React.ReactElement> | React.ReactElement;
  style?: object;
}

const FlexVerticalThirdGrow: React.FC<IFlexVerticalThirdGrowProps> = ({
  data = "",
}) => {
  return (
    <div
      className={styles.FlexVerticalThirdGrow}
      data-testid="FlexVerticalThirdGrow"
    >
      FlexVerticalThirdGrow Component props.data:{data}, state:
      {JSON.stringify(state)}
    </div>
  );
};

export default FlexVerticalThirdGrow;
