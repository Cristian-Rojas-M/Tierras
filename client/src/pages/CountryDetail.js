import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import styles from './CountryDetail.module.css';

const getCountryDetail = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const country = await res.json();
  return country;
};

const CountryDetail = () => {
  const { countryId } = useParams();

  const [borders, setBorders] = useState([]);
  const [countryData, setCountries] = useState(null);

  const getBorders = async (countryData) => {
    const borders = await Promise.all(
      countryData.borders.map((border) => getCountryDetail(border))
    );

    setBorders(borders);
  };

  useEffect(() => {
    (async () => {
      const res = await getCountryDetail(countryId);
      if (res) {
        console.log(res);
        setCountries(res);

        getBorders(res);
      }
    })();
  }, []);

  if (!countryData) return null;

  return (
    <Layout title={countryData.name}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.overview_panel}>
            <img src={countryData.flag} alt={countryData.name} />

            <h1 className={styles.overview_name}>{countryData.name}</h1>
            <div className={styles.overview_region}>{countryData.region}</div>

            <div className={styles.overview_numbers}>
              <div className={styles.overview_population}>
                <div className={styles.overview_value}>
                  {countryData.population}
                </div>
                <div className={styles.overview_label}>Population</div>
              </div>

              <div className={styles.overview_area}>
                <div className={styles.overview_value}>{countryData.area}</div>
                <div className={styles.overview_label}>Area</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>Details</h4>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Capital</div>
              <div className={styles.details_panel_value}>
                {countryData.capital}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Languages</div>
              <div className={styles.details_panel_value}>
                {countryData.languages.map(({ name }) => name).join(', ')}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Currencies</div>
              <div className={styles.details_panel_value}>
                {countryData.currencies.map(({ name }) => name).join(', ')}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Native name</div>
              <div className={styles.details_panel_value}>
                {countryData.nativeName}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Gini</div>
              <div className={styles.details_panel_value}>
                {countryData.gini} %
              </div>
            </div>

            <div className={styles.details_panel_borders}>
              <div className={styles.details_panel_borders_label}>
                Neighbouring Countries
              </div>

              <div className={styles.details_panel_borders_container}>
                {borders.map(({ flag, name, index }) => (
                  <div
                    className={styles.details_panel_borders_country}
                    key={index}
                  >
                    <img src={flag} alt={name} />

                    <div className={styles.details_panel_borders_name}>
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CountryDetail;

// export const getStaticPaths = async () => {
//   const res = await fetch('https://restcountries.eu/rest/v2/all');
//   const countries = await res.json();

//   const paths = countries.map((country) => ({
//     params: { id: country.alpha3Code },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const country = await getCountry(params.id);

//   return {
//     props: {
//       country,
//     },
//   };
// };
