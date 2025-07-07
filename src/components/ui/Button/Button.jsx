import styles from "./Button.module.css";

const Button = ({style,bgColor='grey'}) => {
  console.log(styles);
  return (
    <button
      style={{...style ,backgroundColor:bgColor}}
      className={styles.Button + " primary-color"}
    >
      Benjamin
    </button>
  );
};
export default Button;
