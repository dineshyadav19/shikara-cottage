import Layout from '@components/Layout';
import background from '@images/header-background.png';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="">
        <div className="w-full">
          <Image
            src={background}
            className="object-cover"
            alt="shikara-cottage"
          />
        </div>

        <h2>Hsjkndksnd</h2>
      </div>
    </Layout>
  );
}
