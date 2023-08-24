import "aos/dist/aos.css";
import List from "presentations/components/list";
import NavBar from "presentations/components/navBar";
import Search from "presentations/components/search";
import { reduxWrapper, useAppSelector } from "store";
import { fetchAirports, fetchFlights } from "store/slices/airports";
export default function Home() {
  const airports = useAppSelector((state) => state.airports);
  return (
    <>
      <NavBar />
      <Search />
      <List />
    </>
  );
}

export const getServerSideProps = reduxWrapper.getServerSideProps(
  (store) => async (ctx: any) => {
    await Promise.all([
      store.dispatch(fetchAirports()),
      store.dispatch(fetchFlights("fetchall")),
    ]);
    return {
      props: {},
    };
  }
);
