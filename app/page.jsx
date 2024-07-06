import Image from "next/image";
import Header from "./components/Header";

import Search from "./components/Search";
import Travel from "./components/Travel";
import Whatweoffer from "./components/Whatweoffer";

export default function Home() {
  return (
    <>
       <Header></Header>


       <Search></Search>
       <Whatweoffer></Whatweoffer>
       <br /><br />
       <Travel></Travel>
    </>

  );
}
