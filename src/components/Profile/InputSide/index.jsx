import styles from "./styles.module.scss";

export default function InputSide(handleSignOut) {
  return (
    <div className={styles.inputsContainer}>
      INPUT SIDE <button onClick={() => handleSignOut()} />
    </div>
  );
}
