import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { CarProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explode the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {allCars && (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: CarProps) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
