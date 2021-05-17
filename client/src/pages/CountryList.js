import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import Pagination from "../components/PagButons/Pagination";
import SearchInput from "../components/SearchInput/SearchInput";
import { getCountries, getSearch } from "../redux/actions";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
  const { countriesSearch } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const onInputChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    dispatch(getSearch(value));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    countries && countries.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries?.length} countries</div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Search Countries by Name or Continent"
            onChange={onInputChange}
          />
        </div>
      </div>

      {countriesSearch && countries ? (
        <CountryTable countries={countriesSearch} />
      ) : (
        countries && <CountryTable countries={currentPosts} />
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={countries && countries.length}
        paginate={paginate}
      />
    </Layout>
  );
}
