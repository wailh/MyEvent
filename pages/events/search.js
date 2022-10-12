import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Events from '@/components/events';

const Search = ({ data }) => {
  return (
    <Layout>
      <Events events={data.data} />
    </Layout>
  );
};

export default Search;

export async function getServerSideProps({ query: { term } }) {
  const res = await fetch(
    `${API_URL}/api/events?filters[$or][0][name][$contains]=${term}&filters[$or][1][venue][$contains]=${term}&filters[$or][2][description][$contains]=${term}&populate=*`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
