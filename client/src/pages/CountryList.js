import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import { getCountries } from "../redux/actions";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState([]);
  const [countriesLoaded, setCountriesLoaded] = useState(false);
  const { countries } = useSelector((state) => state);
  const [disbutton, setDisbutton] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
    if (countries) {
      setCountry(countries);
      setCountriesLoaded(true);
    }
  }, [disbutton]);

  const [keyword, setKeyword] = useState("");

  const filteredCountries = country.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };
  const handleButton = () => {
    if (!disbutton) {
      setDisbutton(true);
    }
    if (disbutton) {
      setDisbutton(false);
    }
  };

  // if (!countries) return <h1>Loading...</h1>;
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries?.length} countries</div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by name, region or subregion"
            onChange={onInputChange}
          />
        </div>
      </div>
      {!disbutton ? (
        <button onClick={handleButton}>Ver todos los paises</button>
      ) : (
        <button onClick={handleButton}>Ocultar paises</button>
      )}

      {disbutton ? <CountryTable countries={filteredCountries} /> : null}
    </Layout>
  );
}
