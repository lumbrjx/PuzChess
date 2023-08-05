import FrontBlogsList from "@/components/layout/frontBlogList";

export default async function Blog() {
  return (
    <section className="flex flex-col items-center justify-center w-full  lg:px-8 px-2 p-36">
      <FrontBlogsList />
    </section>
  );
}
