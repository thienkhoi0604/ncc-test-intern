import SidebarItem from "./sidebar-item";
import classes from "./styles/sidebar.module.css";

const dataSidebar = [
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Services",
    value: "services",
  },
  {
    label: "News",
    value: "news",
  },
  {
    label: "Blog",
    value: "blog",
  },
  {
    label: "Contact",
    value: "contact",
  },
];

const SideBar = () => {
  return (
    <div className={classes["sidebar-container"]}>
      <ul className={classes["list-menu"]}>
        {dataSidebar.map((item) => {
          return (
            <SidebarItem
              key={item.label}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
