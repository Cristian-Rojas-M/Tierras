import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions";

function Prueba() {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    hola: "hola",
  });
  const { countries } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleCountries = (e) => {
    let { value } = e.target;
    dispatch(getCountries());
  };
  if (!countries) return <h1>Loading...</h1>;
  return (
    <div>
      {/* <h1>{countries[0].name}</h1>
      <table>
        <tfoot>
          <tr key={countries.id}>
            <td>{countries[1].name}</td>
          </tr>
        </tfoot>
      </table> */}
      <table>
        <tfoot className="admin">
          {countries &&
            countries.map((element) => {
              <tr key={element.id}>
                <td>{element.name}</td>
              </tr>;
            })}
        </tfoot>
      </table>
      ;
    </div>
  );
}

export default Prueba;
