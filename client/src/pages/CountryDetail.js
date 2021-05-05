import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { getDetails } from "../redux/actions";
import styles from "./CountryDetail.module.css";

const CountryDetail = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();

  const [borders, setBorders] = useState([]);
  const { detail } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);
  console.log(detail);

  if (!detail) return <h1>loading...</h1>;

  return (
    <Layout title={detail.name}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.overview_panel}>
            <img src={detail.image} alt={detail.name} />

            <h1 className={styles.overview_name}>{detail.name}</h1>
            <div className={styles.overview_region}>{detail.region}</div>

            <div className={styles.overview_numbers}>
              <div className={styles.overview_population}>
                <div className={styles.overview_value}>{detail.poblacion}</div>
                <div className={styles.overview_label}>Population</div>
              </div>

              <div className={styles.overview_area}>
                <div className={styles.overview_value}>{detail.area}</div>
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
              <div className={styles.details_panel_value}>{detail.capital}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Continente</div>
              <div className={styles.details_panel_value}>
                {detail.continente}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Sub Region</div>
              <div className={styles.details_panel_value}>
                {detail.subregion}
              </div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Codigo de letras</div>
              <div className={styles.details_panel_value}>{detail.ID}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Gini</div>
              <div className={styles.details_panel_value}>{detail.gini} %</div>
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
