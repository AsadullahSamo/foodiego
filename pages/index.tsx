import Head from "next/head";
import Navigation from "./components/Navigation";
import 'material-icons/iconfont/material-icons.css';

export default function Home() {

  return (
    <>
    <Head>
        <title> Foodiego </title>
        <link rel="icon" href="/assets/icons/Pokedex-logo.svg" type="image/icon" />
    </Head>

    <main className={`flex min-h-screen bg-[#c8d0d4] flex-col items-center justify-between`}> 
      <Navigation />
      
    </main>
    </>
  );

}