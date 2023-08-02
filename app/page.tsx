import { CarCard, CustomFilter, Hero, Searchbar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function  Home  () {

  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  
  return (
    <main className="overflow-hidden">
     <Hero />
     <div className='mt-12 padding-y padding-x max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>
            Explore the cars you may like
          </p>
        </div>
        <div className='home__filters'>
          <Searchbar />
          <div className='home__filter-container'>
          <CustomFilter  />
          <CustomFilter  />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ):
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold' >Ooops, no results</h2>
          <p>{allCars?.message}</p>

        </div>
        }

     </div>
    </main>
  )
}
