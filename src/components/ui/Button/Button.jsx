import styles from "./Button.module.css";

const Button = ({style,bgColor='grey'}) => {
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

//valeur par def react < 18
// Button.defaultValues={
//     bgColor:'grey'
// }