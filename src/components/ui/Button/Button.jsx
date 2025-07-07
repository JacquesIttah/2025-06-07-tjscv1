import styles from "./Button.module.css";

const Button = (props) => {
  console.log(styles,props);
  return (
    <button
      style={{...props.style ,backgroundColor:props.bgColor}}
      className={styles.Button + " primary-color"}
    >
      Benjamin
    </button>
  );
};
export default Button;
