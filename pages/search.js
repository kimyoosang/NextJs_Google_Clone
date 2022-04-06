import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

export default function Search() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      {/* Search Header */}

      {/* Search web and Images Results */}
    </div>
  );
}
