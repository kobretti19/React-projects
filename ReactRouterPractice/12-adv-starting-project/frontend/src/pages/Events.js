import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  console.log(events, "evess");
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
      statusText: "Could not fetch events.",
    });
    // return json({ message: "Could not fetch events." }, { status: 500 });
    //..
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// export function json(data, init = {}) {
//   return new Response(JSON.stringify(data), {
//     ...init,
//     headers: {
//       "Content-Type": "application/json",
//       ...(init.headers || {}),
//     },
//   });
// }
