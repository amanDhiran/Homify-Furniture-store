import Container from "./container"

function Collection() {
  return (
    <div className="text-center  mt-5 py-10 lg:px-10 flex-col">
        <Container >
          <h3 className="text-3xl font-bold pb-10">Our Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-5">
            
              <div className="before:content-[''] before:absolute before:h-full before:left-0 before:z-[1] before:w-full before:bg-black/50 before:overflow-hidden overflow-hidden object-cover h-52 md:h-60  relative object-bottom md:col-span-2 rounded-xl">
                <div className='z-20 h-full w-full flex justify-center items-center relative flex-col gap-3'>
                <div  className= " text-4xl md:text-5xl text-yellow-200 font-bold ">Sofa</div>
                {/* <div className=' font-semibold text-xl text-white'>Explore &gt;</div> */}
                </div>
                <img className='w-full absolute top-0 left-0 h-full object-cover object-bottom md:object-center' src='/sofa.jpg' alt="img" />
              </div>
              <div className=" before:content-[''] before:absolute before:h-full before:left-0 before:z-[1] before:w-full before:bg-black/50 before:overflow-hidden overflow-hidden object-cover h-52 md:h-60  relative object-bottom rounded-xl">
                <div  className= "z-10 relative h-full w-full flex justify-center items-center text-pink-300 font-bold text-4xl md:text-5xl">Chair</div>
                <img className='w-full absolute top-0 left-0 h-full object-cover object-center' src="https://www.ikea.com/in/en/images/products/vedbo-armchair-gunnared-light-brown-pink__0837412_pe696814_s5.jpg?f=xl" alt="img" />
              </div>
              <div className=" before:content-[''] before:absolute before:h-full before:left-0 before:z-[1] before:w-full before:bg-black/50 before:overflow-hidden overflow-hidden object-cover h-52 md:h-60  relative object-bottom  rounded-xl">
                <div  className= "z-10 relative h-full w-full flex justify-center items-center font-bold text-4xl md:text-5xl text-indigo-200">Lamps</div>
                <img className='w-full absolute top-0 left-0 h-full object-cover object-center' src="https://www.ikea.com/in/en/images/products/kvart-work-lamp-black__0880538_pe614074_s5.jpg?f=l" alt="img" />
              </div>
              <div className=" before:content-[''] before:absolute before:h-full before:left-0 before:z-[1] before:w-full before:bg-black/50 before:overflow-hidden md:col-span-2 overflow-hidden object-cover h-52 md:h-60  relative object-bottom rounded-xl">
                <div  className= "z-10 relative h-full w-full flex justify-center items-center font-bold text-4xl md:text-5xl text-rose-200">Bed</div>
                <img className='w-full absolute top-0 left-0 h-full object-cover object-center' src="/bed.jpg" alt="img" />
              </div>
          </div>
        </Container>
        </div>
  )
}

export default Collection