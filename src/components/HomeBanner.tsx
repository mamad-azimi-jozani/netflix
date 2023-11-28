import brandImg from '../images/brand.jpg'


function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
        <img 
            src={brandImg}
            alt=""
            
        />
        <div className='absolute top-0 flex items-center justify-center bg-opacity-40 bg-black h-full w-full'>
            
        </div>
    </div>
  )
}

export default HomeBanner