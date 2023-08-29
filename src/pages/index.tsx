import Head from "next/head";
import HomeScreen from "~/components/screens/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nabi</title>
        <meta name="description" content="Nabi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />
    </>
  );
}

export const config = {
  runtime: "experimental-edge", // or "nodejs"
};
