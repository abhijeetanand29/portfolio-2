/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import LatestEntriesGrid from "@/components/entries/LatestEntriesGrid";
import LatestEntriesList from "@/components/entries/LatestEntriesList";
import Page from "@/components/layouts/Page";
import { getEntries } from "@/utils/entries";
import { compareDesc } from "date-fns";
import Link from "next/link";
import config from "@/../portfolio.config";
import SocialButtons from "@/components/SocialButtons";
import LatestPhotosGrid from "@/components/photos/LatestPhotosGrid";
import { getAlbums } from "@/utils/photos";

const HomePage = async () => {
  const posts = await getEntries("posts");
  const projects = await getEntries("projects");
  const albums = await getAlbums();

  const latestPosts = posts
    .reverse()
    .sort((a, b) =>
      compareDesc(new Date(a.frontmatter.date), new Date(b.frontmatter.date)),
    )
    .slice(0, 8);

  const featuredProjects = projects
    .sort((a, b) =>
      (a.frontmatter.ordering || 0) <= (b.frontmatter.ordering || 0) ? -1 : 1,
    )
    .filter((entry) => entry.frontmatter.featured === true);

  const latestPhotos = albums.slice(0, 8).map((album) => {
    return album.photos[0];
  });

  return (
    <Page>
      <Container>
        {/* Hero */}
        <header className="mb-0 flex min-h-[80vh] flex-col items-stretch justify-between md:mb-12 md:flex-row lg:mb-16 2xl:mb-20">
          <section className="w-full md:w-5/12">
            <img
              className="m-0 block h-full w-full object-cover p-0"
              src="https://via.placeholder.com/600x800?text=Abhijeet+Anand"
              alt="Abhijeet Anand profile picture"
            />
          </section>
          <section className="flex w-full flex-col justify-end pb-8 pt-8 md:w-6/12 md:pb-0 md:pt-12 lg:pt-16">
            <h1 className="heading-1">
              I&apos;m Abhijeet Anand, a Data Scientist at Zepto.
            </h1>
            <p className="body-0 mt-5 xl:mt-8 2xl:mt-10">
              I build machine learning solutions at scale, from{" "}
              <Link className="font-medium hover:underline" href="/projects/">
                reinforcement learning systems
              </Link>{" "}
              to predictive models that drive business impact. Fast-tracked to Data Scientist II in 9 months, I leverage{" "}
              <strong>PySpark, ML, and Large-scale System Design</strong> to solve real-world problems. Read more{" "}
              <Link className="font-medium hover:underline" href="/about/">
                about me
              </Link>
              .
            </p>
            <SocialButtons />
          </section>
        </header>
        {/* Banner */}
        <section>
          <div className="rounded-sm border border-black bg-black px-4 pb-3 pt-3 font-ibm text-xs text-beige">
            <p className="flex items-center justify-center gap-2 tracking-wider">
              <span>
                <span className="font-medium">Data Scientist Portfolio</span>{" "}
                Building ML solutions that drive business impact.{" "}
                <Link
                  className="text-ruby underline"
                  href="/about/"
                >
                  Learn More
                </Link>{" "}
              </span>
            </p>
          </div>
        </section>
        {/* Projects */}
        {featuredProjects.length > 0 && (
          <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
            <LatestEntriesGrid
              entries={featuredProjects}
              title="Featured Projects"
              urlPrefix="/projects"
              linkText="See All Projects"
            />
          </section>
        )}
        {/* Photos */}
        {latestPhotos.length > 0 && (
          <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
            <LatestPhotosGrid
              photos={latestPhotos}
              title="Recent Photos"
              linkUrl="/photos/albums"
              linkText="See All Photos"
            />
          </section>
        )}
        {/* Entries */}
        {latestPosts.length > 0 && (
          <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
            <LatestEntriesList
              entries={latestPosts}
              title="Latest Posts"
              urlPrefix="/blog"
              linkText="See All Posts"
            />
          </section>
        )}
      </Container>
    </Page>
  );
};

export default HomePage;
