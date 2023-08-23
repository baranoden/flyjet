import "aos/dist/aos.css";
import List from "presentations/components/list";
import NavBar from "presentations/components/navBar";
import Search from "presentations/components/search";
import { reduxWrapper, useAppSelector } from "store";
import { fetchAirports } from "store/slices/flight";
export default function Home() {
  const airports = useAppSelector((state) => state.flight);
  return (
    <>
      <NavBar />
      <Search
        options={
          airports.airports.map((index: any, key: Number) => ({
            id: index,
            label: index.city + "/" + index.code,
          })) as any
        }
      />
      <List />
    </>
  );
}

export const getServerSideProps = reduxWrapper.getServerSideProps(
  (store) => async (ctx: any) => {
    await store.dispatch(fetchAirports());
    return {
      props: {},
    };
  }
);
