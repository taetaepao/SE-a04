import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/components/Banner';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex justify-center gap-10 py-100"style={{padding: '50px'}}>
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
      </div>
    </main>
  );
}
