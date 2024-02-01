import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { coffes } from "../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCoffes = useSelector((state) => state.allCoffes);
  console.log(allCoffes);

  useEffect(() => {
    dispatch(coffes());
  }, [dispatch]);

  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.titles}>
          <h1>Our Collection</h1>
          <h3>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </h3>
        </div>
        <div className={style.items}>
          <h4>All Products</h4>
          <h4>Available Now</h4>
        </div>
        <div className={style.coffe}>
          {allCoffes.map((coffe) => (
            <div key={coffe.id} >
                {coffe.popular && <span className={style.popular}>Popular</span> }
              <img src={coffe.image} alt={coffe.name} />

              <h2 className={style.name}>{coffe.name}</h2>
              <h2 className={style.price}>{coffe.price}</h2>

              <div className={style.caracteristicas}>
                <h3>
                  { coffe.rating ? `⭐ ${coffe.rating}` : `☆ No rating`} <span className={style.votos}>
                  {coffe.votes ? `( ${coffe.votes} votos)` : ""}

                   <span className={style.soldOut}>{coffe.available? "" : "Sold out"}</span>
                    </span>
                  
                  </h3>
              </div>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
