import Events from '@/components/Events';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

const EventsPage = ({ events }) => {
  const evt = events.data;
  return (
    <Layout>
      <Events events={evt} />
    </Layout>
  );
};

export default EventsPage;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const events = await res.json();
  return {
    props: {
      events: events,
    },
  };
}
