import type React from "react";
import styles from "./Button.module.css";
 
//number, object, Array<string|React.ReactElement> string[], undefined, null, string, React.ReactElement
//Button
interface IButtonProps{
    style?:{textDecoration:string};
    bgColor?:'skyblue'|'tomato';
    children:string|React.ReactElement|Array<React.ReactElement|string>
}
const Button = ({ style, bgColor = "tomato", children}:IButtonProps) => {
  return (
    <button
      style={{ ...style, backgroundColor: bgColor }}
      className={styles.Button + " primary-color"}
    >
      {children}
    </button>
  );
};
export default Button;

//valeur par def react < 18
// Button.defaultValues={
//     bgColor:'grey'
// }

/*
pour react < 18
import PropTypes from 'prop-types'
Button.propTypes={
    bgColor:PropTypes.string.isRequired
    style: PropTypes.object
}

*/