import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
