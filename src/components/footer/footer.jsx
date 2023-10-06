import classes from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer-container"]}>
      <p className={classes["copy-right"]}>Copyright © 2021</p>
    </footer>
  );
};

export default Footer;
