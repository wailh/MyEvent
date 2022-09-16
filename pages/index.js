import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import Showcase from '@/components/Showcase';
import EventTypes from '@/components/EventTypes';
import Why from '@/components/Why';
import Features from '@/components/Features';
import Testimenials from '@/components/Testimenials';
import Essaye from '@/components/Essaye';

export default function Home() {
  return (
    <Layout>
      <Showcase />
      <EventTypes />
      <Why />
      <Features />
      <Testimenials />
      <Essaye />
    </Layout>
  );
}
