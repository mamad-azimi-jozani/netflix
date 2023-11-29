import NavBar from "../components/NavBar"

function LoginPage() {
  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
        <NavBar />
        <div className="flex justify-center items-center h-full">
            <div className="bg-black w-full rounded-lg max-w-lg bg-opacity-80 self-center h-[530px] mt-20 p-2">
                <h2 className="text-white capitalize text-center text-4xl mt-5">
                    login
                </h2>
                <form action="" className="flex flex-col mt-10 gap-5 items-center justify-center">
                    <div className="flex flex-col gap-4 text-white">
                        <label htmlFor="" className="">email</label>
                        <input type="text" className="py-2 px-8" />
                    </div>

                    <div className="flex flex-col gap-4 text-white">
                        <label htmlFor="">username</label>
                        <input type="text" className="py-2 px-8" />
                    </div>

                    <div className="flex flex-col gap-4 text-white">
                        <label htmlFor="">password</label>
                        <input type="text" className="py-2 px-8" />
                    </div>
                    
                    <button type="submit" className="w-[50%] mt-5 bg-purple-500 py-2 px-6 block border-none">Submit</button>
                    <p className="self-start text-white">
                        first time using netflix?
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage