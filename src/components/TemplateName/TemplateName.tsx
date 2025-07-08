import React, { useEffect, useState } from "react";
import styles from "./TemplateName.module.css";

interface ITemplateNameProps {}
interface ITemplateNameState {}
const templateNameInitialState = "";
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  const [state, setstate] = useState<ITemplateNameState>(
    templateNameInitialState
  );
  useEffect(() => {
    return () => {
      //demontage
    };
  }, []);
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

export default TemplateName;
