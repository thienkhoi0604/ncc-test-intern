import classes from "./styles/home-page.module.css";

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ title, description, imageUrl }) => {
  return (
    <div className={classes["service-item"]}>
      <h4 className={classes["service-item-title"]}>{title}</h4>
      <div>
        <img src={imageUrl} className={classes["service-item-image"]} />
        <p className={classes["service-item-description"]}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
