import React, { useEffect } from "react";
import Oursection1 from "./Oursection1";
import Oursection2 from "./Oursection2";
import Ourvission from "./Ourvission";
import Testmonial from "./Testmonial";
import Ourclient from "./Ourclient";
import Globalpresnce from "./Globalpresnce";
import Footer from "../Comp/Footer";

const Ourcompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <main>
        <section>
          {" "}
          <Oursection1 />
        </section>
        <section>
          {" "}
          <Ourvission />
        </section>
        <section>
          {" "}
          <Oursection2 />
        </section>
        <section>
          {" "}
          <Globalpresnce />
        </section>
        <section>
          {" "}
          <Ourclient />
        </section>
        <section>
          {" "}
          <Testmonial />
        </section>
      </main>
    </div>
  );
};

export default Ourcompany;
