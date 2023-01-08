import { useEffect, useState } from "react";

import Section from "../Section";
import Banner from "../banner/Banner";
import Slider from "../slider/Slider";
import Divided from "../divided/Divided";

import { banner1 } from "../../data/banner";
import { banner2 } from "../../data/banner";
import { divided } from "../../data/divided";

const Home = function ({ scrollUp, categorieLoader }) {
  const [data, setData] = useState([]);

  useEffect(() => scrollUp(), []);
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        let json = await response.json();
        json = json.slice(0, 9);
        json.forEach((item) => {
          if (item.title.length > 28) {
            item.title = item.title.split("").slice(0, 28).join("") + "...";
          }
        });
        setData(json);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <>
      <Section title={"Style Spotlight"}>
        <Banner bannerData={banner1} selectedType={"video"} />
      </Section>
      <Section title={"Popular Right Now"}>
        <Slider data={data} />
      </Section>
      <Section title={"Because image is everything"}>
        <Divided
          info={divided.dividedClothes}
          categorieLoader={categorieLoader}
        />
      </Section>
      <Section title={"Be up-to-date"}>
        <Banner bannerData={banner2} />
      </Section>
      <Section title={"Always ahead"}>
        <Divided
          info={divided.dividedOthers}
          categorieLoader={categorieLoader}
        />
      </Section>
    </>
  );
};
export default Home;
