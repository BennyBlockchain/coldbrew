import Head from "next/head";
import { useSession } from "next-auth/client";
import axios from "axios";
import useSWR from "swr";
import AppWrapper from "../layouts/AppWrapper";
import Beta from "../Beta";
import Feed from "../components/Feed";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function Home() {
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    "http://localhost:3000/api/hive/rankedposts?sort=trending&tag=coldbrew-app&observer=benny.blockchain",
    fetcher
  );
  return (
    <>
      <Head>
        <title>Beta! | Cold Brew</title>
      </Head>
      {loading && <h1>Loading...</h1>}
      {!session && (
        <>
          <Beta />
        </>
      )}
      {session && data && (
        <AppWrapper>
          <Feed posts={data} />
        </AppWrapper>
      )}
    </>
  );
}
