import styles from "./Button.module.css";

const Button = (props) => {
  console.log(styles);
  return <button className={styles.Button+' primary-color'}>Benjamin</button>;
};
export default Button;
