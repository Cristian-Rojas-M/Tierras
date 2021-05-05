import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import { getCountries, getSearch } from "../redux/actions";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state);
  const { countriesSearch } = useSelector((state) => state);
  const [country, setCountry] = useState({});
  const [but, setBut] = useState({
    limit: "10",
    offset: "0",
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const onInputChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    dispatch(getSearch(value));
  };

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
        countries && <CountryTable countries={countries} />
      )}
    </Layout>
  );
}
