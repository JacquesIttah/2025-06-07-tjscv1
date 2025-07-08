import React, { useEffect, useState } from "react";
import styles from "./MemeForm.module.css";

interface IMemeFormProps {
  data?:string
}
interface IMemeFormState {
  value:number
}
const memeFormInitialState = {value:0};
const MemeForm: React.FC<IMemeFormProps> = ({data=""}) => {
  const [state, setstate] = useState<IMemeFormState>(
    memeFormInitialState
  );
  useEffect(() => {
    return () => {
      //demontage
    };
  }, []);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component props.data:{data}, state:{JSON.stringify(state)}
    </div>
  );
};

export default MemeForm;
