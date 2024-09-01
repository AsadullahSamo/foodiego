import Head from "next/head";
import Navigation from "./components/Navigation";
import Filters from "./components/Filters";
import 'material-icons/iconfont/material-icons.css';

export default function Home() {

  return (
    <>
    <Head>
        <title> Foodiego </title>
        <link rel="icon" href="/assets/icons/Pokedex-logo.svg" type="image/icon" />
    </Head>

    <main className="flex bg-[#f3f6f7] min-h-screen flex-col items-center">
        <Navigation />
      </main>
    </>
  );

}