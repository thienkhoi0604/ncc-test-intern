import classes from "./styles/sidebar.module.css";

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ label }) => {
  return (
    <div className={classes["sidebar-rectangle"]}>
      <li className={classes["sidebar-item"]}>{label}</li>;
    </div>
  );
};

export default SidebarItem;
