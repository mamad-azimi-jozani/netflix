import brandImg from '../images/brand.jpg'
import { Link } from 'react-router-dom'

function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
        <img 
            src={brandImg}
            alt=""
            
        />
        <div className='absolute gap-5 top-0 flex items-center flex-col justify-center bg-opacity-40 bg-black h-full w-full'>
            <h1 className='text-white text-5xl font-bold'>hello world</h1>
            
            <p className='text-white text-3xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veniam?
            </p>

            <a href="/login" className='rounded-xl text-xl bg-red-700 capitalize text-white py-4 px-12 mt-8'>sign up</a>
                {/* <Link to="/login"  /> */}
        </div>
    </div>
  )
}

export default HomeBanner