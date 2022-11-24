import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import https from "https";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
  const router = useRouter();

  console.log(searchResults);

  const { location, startDate, endDate, noOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuest} number of guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS", {
    agent: httpsAgent,
  }).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
};
