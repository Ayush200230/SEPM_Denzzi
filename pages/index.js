import Link from "next/link";
import mapSite from "./map";
import Head from "next/head";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Link href="/map">
        <Image src="/landing.gif" alt="/" width={1550} height={1000} />
      </Link>
      {/*<div>
        <Link href="/map">
          <Button colorScheme="teal" variant="outline">
            click
          </Button>
        </Link>
  </div>*/}
    </div>
  );
};

export default Home;
