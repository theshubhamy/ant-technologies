import React from "react";
import { mockData } from "@/_mock/mockData";
import Image from "next/image";
import Header from "@/components/Header";

export const getStaticProps = async ({ params }) => {
  const blogs = mockData?.filter((item) => item.title == params.title);
  return {
    props: {
      blog: blogs[0],
    },
  };
};
export const getStaticPaths = async () => {
  const paths = mockData.map((item) => ({
    params: { title: item.title },
  }));
  return { paths, fallback: false };
};

const BlogDesc = ({ blog }) => {
  return (
    <div>
      <div className="bg-[#FEEFE6]">
        <Header />
        <div className="px-5 text-center py-20">
          <p className=" font-semibold text-[#F9AF82] text-2xl">
            {blog.title} | 2 Mins Ago
          </p>
          <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold max-w-2xl m-auto">
            {blog.heading}
          </h1>
          <p className="text-center mt-7">by Zack Jeneil</p>
        </div>
      </div>

      <div className="mt-9 p-3">
        <Image
          src={blog.headingImg}
          alt="Group of people"
          width={1320}
          height={334}
          className="m-auto rounded-[2rem] h-[600px]"
        />
      </div>
      <div className=" lg:px-48 p-4 mt-12">
        <p>
          <b>
            Before you start writing your blog post, you need to determine who
            your target audience is. Is your product aimed at small businesses
            or enterprise-level companies?
          </b>
        </p>
        <p className="mt-10 mb-10">
          Are you targeting a specific industry or niche? Understanding your
          audience will help you tailor your content and messaging to their
          needs and interests.Start with an attention-grabbing headline: The
          headline is the first thing that a reader will see, so make sure
          it&apos;s clear, concise, and interesting. It should give the reader
          an idea of what the post is about and why they should care.
        </p>
        <ol className="list-decimal px-10 py-4 leading-8">
          <li>
            Introduce the product: Begin by introducing the SaaS product
            you&#39;re writing about. Describe what it does and how it solves a
            problem for users.
          </li>
          <li>
            Share customer success stories: One of the best ways to promote a
            SaaS product is to share real-life success stories from satisfied
            customers. Highlight how they&apos;ve used the product to achieve
            their goals or overcome challenges.
          </li>
          <li>
            {" "}
            Provide a tutorial or walkthrough: If your SaaS product has complex
            features or capabilities, provide a tutorial or walkthrough to help
            readers understand how it works. This could be a step-by-step guide
            or a video demonstration.
          </li>
          <li>
            Address common questions or concerns: Every SaaS product has common
            questions or concerns from potential users. Address them head-on and
            provide helpful solutions or explanations.
          </li>
          <li>
            Address common questions or concerns: Every SaaS product has common
            questions or concerns from potential users. Address them head-on and
            provide helpful solutions or explanations.
          </li>
          <li>
            Compare and contrast with competitors: If there are other SaaS
            products in the market that offer similar solutions, compare and
            contrast your product with them. Highlight your unique selling
            points and how they differentiate your product from the competition.
          </li>
          <li>
            Provide actionable tips and takeaways: Finally, end your blog post
            with actionable tips and takeaways that readers can implement in
            their own work or life. This will help them see the value in your
            SaaS product and how it can benefit them.
          </li>
        </ol>
        <p>
          Remember to keep your blog post concise, easy to read, and visually
          appealing. Use images, videos, or infographics to break up the text
          and make it more engaging for readers.
        </p>
      </div>

      <div className="flex justify-center gap-5 mt-20 mb-20">
        <div className="flex gap-3 items-center">
          <Image
            src={"/assets/logos/twitter.png"}
            alt="insta"
            width={30}
            height={24}
            className="h-[24px] w-[30px]"
          />
          <p> twitter &nbsp; |</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src={"/assets/logos/fb.png"}
            alt="insta"
            width={30}
            height={24}
            className="h-[29px] w-[14px]"
          />
          <p> Share &nbsp; |</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src={"/assets/logos/insta.png"}
            alt="insta"
            width={30}
            height={30}
          />
          <p> Add stories </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDesc;
