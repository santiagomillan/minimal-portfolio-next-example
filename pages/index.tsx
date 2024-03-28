import type { NextPage } from "next";
import Head from "next/head";
import HeroPic from "../components/core/HeroPic";
import HeadingWithText from "../components/HeadingWithText";
import Title from "../components/core/Title";


const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Omar's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>

        {/* Hero Section */ }
        <section className="py-12">
          <HeroPic />
          <HeadingWithText title="Hi! I'm Santiago" style="gradient" text="lorem ejemplo" label="Take me to the magic lan"/>
          
        </section>
        {/* Projects Section */ }
        <section className="py-12">

        </section>

        {/* Articles Section */ }
        <section className="py-12">
          <Title title="Selected proects" style="gradient"/>
          <div className="space-y-12 mb-12"> 
            {/* p1 */}
            
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
