import Head from "next/head";
import Hero from "@/components/Hero";
import Group from "@/components/Group";
import About from "@/components/About";
import AverageRevenue from "@/components/AverageRevenue";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import AppLayout from "@/layout/AppLayout";
export default function Home() {
  return (
    <>
      <Head>
        <title> Home - ANT Information Technologies</title>
        <meta
          name="description"
          content="ANT Information Technologies - Transforming businesses with cutting-edge solutions."
        />
      </Head>
      <AppLayout>
        <Header bgColor="#c20c0c" />
        <Hero />
        <Group />
        <About />
        <AverageRevenue />
        <Testimonial />
      </AppLayout>
    </>
  );
}
