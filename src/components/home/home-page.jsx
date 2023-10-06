import classes from "./styles/home-page.module.css";

const HomePage = () => {
  return (
    <main className={classes["main-container"]}>
      <img
        src="../../assets/logo_NCC.png"
        alt="Logo NCC"
        className={classes["logo"]}
      />
    </main>
  );
};

export default HomePage;
