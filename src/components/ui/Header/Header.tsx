import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

interface IHeaderProps {
  data:string
}
interface IHeaderState {
  value:number
}
const headerInitialState = {value:0};
const Header: React.FC<IHeaderProps> = ({data=""}) => {
  const [state, setstate] = useState<IHeaderState>(
    headerInitialState
  );
  useEffect(() => {
    return () => {
      //demontage
    };
  }, []);
  return (
    <div className={styles.Header} data-testid="Header">
      Header Component props.data:{data}, state:{JSON.stringify(state)}
    </div>
  );
};

export default Header;
