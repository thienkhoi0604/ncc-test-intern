import classes from "./styles/sidebar.module.css";

const SidebarItem = ({ label }) => {
  return (
    <>
      {label === "Home" ? (
        <div
          className={`${classes["sidebar-rectangle"]} ${classes["selected"]}`}
        >
          <li className={classes["sidebar-item"]}>{label}</li>
        </div>
      ) : (
        <div className={classes["sidebar-rectangle"]}>
          <li className={classes["sidebar-item"]}>{label}</li>
        </div>
      )}
    </>
  );
};

export default SidebarItem;
