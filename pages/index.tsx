import { Inter } from '@next/font/google';
import Layout from '@components/Layout';
import background from '@images/header-background.png';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <div className="">
        <div className="w-full max-h-[680px]">
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
