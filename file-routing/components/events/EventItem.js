import Link from "next/Link";
import classes from "./event-item.module.css";
import Button from "../ui/Button";

function EventItem({ eventItem }) {
 const exploreLink = `/events/${eventItem.id}`
  return (
    <li key={eventItem.id} className={classes.item}>
      <img src={eventItem.image} alt={eventItem.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{eventItem.title}</h2>
          <div className={classes.date}>
            <time>{eventItem.date}</time>
          </div>
          <div className={classes.address}>
            <address>{eventItem.location}</address>
          </div>
          <div className={classes.action}>
            <Button link={exploreLink}>Explore</Button> 
          </div>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
