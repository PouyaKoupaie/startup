import SearchForm from "@/app/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const filters = params.filters || '';
  console.log("query", filters);
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your goal,
          <br />
          connect with,
          <br />
          entrepreneuse
        </h1>
        <p className="sub-heading !max-w-3xl">Submit ideas, vote on pitches</p>
        <SearchForm query={filters} />
      </section>
    </>
  );
}
