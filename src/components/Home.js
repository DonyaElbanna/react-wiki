import Grid from "@mui/material/Unstable_Grid2";
import Search from "./Search";
import CardItem from "./CardItem";
import Filter from "./Filter";
import PaginationBar from "./PaginationBar";

const Home = ({
  results,
  page,
  setPage,
  stat,
  setStatus,
  spec,
  setSpecies,
  gen,
  setGender,
  clearSearch,
  searchInput,
  setSearchInput,
  info,
}) => {
  return (
    <div>
      <h1>Characters</h1>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Grid container spacing={5}>
        <Grid xs={12} sm={4} md={3}>
          <Filter
            results={results}
            page={page}
            setPage={setPage}
            stat={stat}
            setStatus={setStatus}
            spec={spec}
            setSpecies={setSpecies}
            gen={gen}
            setGender={setGender}
            clearSearch={clearSearch}
          ></Filter>
        </Grid>
        <CardItem results={results} />
      </Grid>
      <PaginationBar info={info ? info : ""} page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
