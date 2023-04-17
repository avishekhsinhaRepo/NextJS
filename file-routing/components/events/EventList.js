import EventItem from './EventItem'
import classes from './event-list.module.css';
function EventList({eventList}){
    return (
        <ul className={classes.list}>
            {eventList.map(eventItem=>(<EventItem eventItem={eventItem}/>))}
        </ul>

    );
}
export default EventList;