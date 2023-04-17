import { getEventById } from "../../dummy-data"
import { useRouter } from "next/router";

export default function EventDetail() {
    const router  = useRouter();
    const eventId = router.query['eventid'];
    const eventDetail = getEventById(eventId);
    return (
     <div>
       <h1>Event Details</h1>
     </div>
    )
  }
  