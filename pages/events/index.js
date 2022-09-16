import Events from '@/components/Events';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

const events = ({ events }) => {
  const evt = events.data;
  return (
    <Layout>
      <Events events={evt} />
    </Layout>
  );
};

export default events;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const events = await res.json();
  return {
    props: {
      events: events,
    },
  };
}
