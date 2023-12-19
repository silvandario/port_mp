import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className ="flex flex-col justify-center gap-8">
              <h1 className ="h1-bold">
                Share Your Passion: We Help You Connect!
              </h1>
              <p className= "p-regular-20 md:p-regular-24">
                Discovering something new? Wanting to level up? Gaining new insights? - Port got you covered! Connect with a trainer to work on your passion.
              </p>
              <Button size="lg" asChild className="button w-full"/>
                <Link href = "#events">
                  Explore All
                </Link>

            </div>
            <Image
              src = '/assets/images/hero.png'
              alt = "hero"
              width = {1000}
              height = {1000}
              className= "max-h-[70vh] object-contain object-center 2x1:max-h-[50vh]"
            />
          </div>
        </section>

        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Sport <br/> Unites
          </h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            Search
            CategoryFilter

            </div>


        </section>
      </>
    </main>
  )
}

