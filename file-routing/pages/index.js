import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList eventList={featuredEvents} />
      </ul>
    </div>
  );
}
