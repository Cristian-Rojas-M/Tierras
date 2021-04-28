import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import { getCountries, getSearch } from "../redux/actions";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState([]);
  const [countriesLoaded, setCountriesLoaded] = useState(false);
  const { countries } = useSelector((state) => state);
  const [disbutton, setDisbutton] = useState(false);
  const { countriesSearch } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountries());
    if (countries) {
      setCountry(countries);
      setCountriesLoaded(true);
    }
  }, [disbutton]);

  const onInputChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    dispatch(getSearch(value));
    if (disbutton) {
      setDisbutton(false);
    }
  };
  const handleButton = () => {
    if (!disbutton) {
      setDisbutton(true);
    }
    if (disbutton) {
      setDisbutton(false);
    }
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
      {!disbutton ? (
        <button onClick={handleButton}>See All Countries</button>
      ) : (
        <button onClick={handleButton}>Hide The Countries</button>
      )}

      {disbutton ? <CountryTable countries={country} /> : null}
      {countriesSearch && countriesSearch.length < 61 && !disbutton ? (
        <CountryTable countries={countriesSearch} />
      ) : null}
    </Layout>
  );
}
