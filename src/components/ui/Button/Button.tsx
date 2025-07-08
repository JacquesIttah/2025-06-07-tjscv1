import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";

//number, object, Array<string|React.ReactElement> string[], undefined, null, string, React.ReactElement
//Button, Function
/**
 * interface de props de Button
 */
interface IButtonProps {
  style?: { textDecoration: string };
  bgColor?: "skyblue" | "tomato" | "aquamarine";
  children: string | React.ReactElement | Array<React.ReactElement | string>;
  type?: "button" | "submit" | "reset";
  onButtonClick?():undefined;
}
/**
 * Composant de button
 * @param props {IButtonProps} props de Button
 * @returns {React.reactElement} component Button
 */
const Button = ({
  style,
  bgColor = "tomato",
  children,
  type = "button",
  onButtonClick,
}: IButtonProps) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 350);
    }
  }, [clicked]);
  return (
    <button
      style={{ ...style, backgroundColor: bgColor }}
      className={
        styles.Button + (clicked ? " " + styles.clicked : "")
      }
      type={type}
      onClick={(evt) => {
        setClicked(true);
        // console.log(evt, children);
        if (undefined !== onButtonClick) {
          onButtonClick();
        }
      }}
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
