import Link from "next/link";
import Container from "@/components/Container";

function Hero() {
  return (
    <Container>
        <div className="overflow-hidden bg-hero-image rounded-3xl before:content-[''] before:absolute before:h-[88vh] before:z-[1] before:w-full before:bg-black/40 before:overflow-hidden z-10 relative bg-cover bg-center border h-[80vh] mt-5">
          <div className="z-20 relative flex-col flex md:px-24 items-start md:items-center justify-center py-16  gap-10  h-full px-7">
            <div className="text-white text-5xl  text-left  md:text-6xl lg:text-7xl md:text-center font-bold">
              Products that <span>Homify</span> your home.
            </div>
            <Link href={{
          pathname: '/our-products',
        }}>
            <button className="bg-green-600 py-3 hover:bg-green-500 transition-all ease-in-out font-semibold text-white text-xl md:text-2xl md:py-3 px-5 flex items-center md:px-10  rounded-full">
              Shop Now
            </button>
            </Link>
          </div>
        </div>

        {/* categories */}
    </Container>
  );
}

export default Hero;
