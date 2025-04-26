import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm event={data} method="patch" />;
}
export default EditEventPage;
