import React from "react";
import styles from "./FlexHorizontFirstGrow.module.css";

interface IFlexHorizontFirstGrowProps {
  children: Array<React.ReactElement> | React.ReactElement;
   style?: object;
} 
const FlexHorizontFirstGrow: React.FC<IFlexHorizontFirstGrowProps> = ({children,style}) => {
  
  return (
    <div className={styles.FlexHorizontFirstGrow} data-testid="FlexHorizontFirstGrow" style={style}>
      {children}
    </div>
  );
};

export default FlexHorizontFirstGrow;
