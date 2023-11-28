


function NavBar() {
  return (
    <nav className="w-full  fixed z-40 flex items-center justify-between">
        <div className="flex items-center ">
            <img 
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
            width={200} 
            alt="" />
            <ul className="flex items-center justify-center space-x-5">
                <li className="capitalize text-xl">Home</li>
                <li className="capitalize text-xl">Series</li>
                <li className="capitalize text-xl">Films</li>
                <li className="capitalize text-xl">news and popular</li>
                <li className="capitalize text-xl">my list</li>
                <li className="capitalize text-xl">brouse by languages</li>
            </ul>

        </div>
        <div>

        </div>


    </nav>  
  )
}

export default NavBar