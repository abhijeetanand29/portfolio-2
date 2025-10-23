/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import Bio from "@/components/about/Bio";
import Brands from "@/components/about/Brands";
import Hero from "@/components/about/Hero";
import MoreInfo from "@/components/about/MoreInfo";
import Testimonials from "@/components/about/Testimonials";
import Page from "@/components/layouts/Page";

const WorkTogetherPage = async () => {
  return (
    <Page>
      <Container>
        <Hero
          title="Data Scientist building ML solutions at scale"
          description="I'm Abhijeet Anand, a Data Scientist at Zepto with a passion for leveraging machine learning to solve real-world problems and drive business impact."
          image="https://via.placeholder.com/400x400?text=Abhijeet+Anand"
          alt="Abhijeet Anand profile picture"
        />
        <section className="pt-12 lg:pt-16 xl:pt-20">
          <MoreInfo />
        </section>
        <section className="pt-12 lg:pt-16 xl:pt-20 2xl:pt-24">
          <Testimonials />
        </section>
        <section className="pt-16 xl:pt-24 2xl:pt-32">
          <Bio />
        </section>
      </Container>
    </Page>
  );
};

export default WorkTogetherPage;
