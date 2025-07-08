import React, { useEffect, useState } from "react";
import styles from "./FlexHorizontFirstGrow.module.css";

interface IFlexHorizontFirstGrowProps {
  data:string
}
interface IFlexHorizontFirstGrowState {
  value:number
}
const flexHorizontFirstGrowInitialState = {value:0};
const FlexHorizontFirstGrow: React.FC<IFlexHorizontFirstGrowProps> = ({data=""}) => {
  const [state, setstate] = useState<IFlexHorizontFirstGrowState>(
    flexHorizontFirstGrowInitialState
  );
  useEffect(() => {
    return () => {
      //demontage
    };
  }, []);
  return (
    <div className={styles.FlexHorizontFirstGrow} data-testid="FlexHorizontFirstGrow">
      FlexHorizontFirstGrow Component props.data:{data}, state:{JSON.stringify(state)}
    </div>
  );
};

export default FlexHorizontFirstGrow;
