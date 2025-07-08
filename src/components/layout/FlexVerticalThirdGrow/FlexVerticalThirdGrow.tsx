import React, { useEffect, useState } from "react";
import styles from "./FlexVerticalThirdGrow.module.css";

interface IFlexVerticalThirdGrowProps {
  data:string
}
interface IFlexVerticalThirdGrowState {
  value:number
}
const flexVerticalThirdGrowInitialState = {value:0};
const FlexVerticalThirdGrow: React.FC<IFlexVerticalThirdGrowProps> = ({data=""}) => {
  const [state, setstate] = useState<IFlexVerticalThirdGrowState>(
    flexVerticalThirdGrowInitialState
  );
  useEffect(() => {
    return () => {
      //demontage
    };
  }, []);
  return (
    <div className={styles.FlexVerticalThirdGrow} data-testid="FlexVerticalThirdGrow">
      FlexVerticalThirdGrow Component props.data:{data}, state:{JSON.stringify(state)}
    </div>
  );
};

export default FlexVerticalThirdGrow;
