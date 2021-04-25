import { useState, useEffect } from "react";
import CountryTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import { getCountries } from "../redux/actions";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [countriesLoaded, setCountriesLoaded] = useState(false);

  const fetchCountries = async () => {
    getCountries();
  };

  useEffect(() => {
    (async () => {
      const res = await fetchCountries();
      if (res.success) {
        setCountries(res.data);
        setCountriesLoaded(true);
      }
    })();
  }, []);

  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries</div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by name, region or subregion"
            onChange={onInputChange}
          />
        </div>
      </div>

      <CountryTable countries={filteredCountries} />
    </Layout>
  );
}
