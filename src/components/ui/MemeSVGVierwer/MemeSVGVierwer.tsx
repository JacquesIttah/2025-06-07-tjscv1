import React, { useEffect, useState } from "react";
import styles from "./MemeSvgVierwer.module.css";

interface IMemeSvgVierwerProps {
  data:string
}
interface IMemeSvgVierwerState {
  value:number
}
const memeSvgVierwerInitialState = {value:0};
const MemeSvgVierwer: React.FC<IMemeSvgVierwerProps> = ({data=""}) => {
  const [state, setstate] = useState<IMemeSvgVierwerState>(
    memeSvgVierwerInitialState
  );
  useEffect(() => {
    return () => {
      //demontage
    };
  }, []);
  return (
    <div className={styles.MemeSvgVierwer} data-testid="MemeSvgVierwer">
      MemeSvgVierwer Component props.data:{data}, state:{JSON.stringify(state)}
    </div>
  );
};

export default MemeSvgVierwer;
