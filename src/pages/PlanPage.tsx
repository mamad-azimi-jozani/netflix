


function PlanPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <div className=" h-[80%] w-[50%] gap-10 flex flex-col justify-between items-center p-5">
            <h2 className="text-center text-3xl">choose plan that works for you!</h2>
            <div className="grid grid-cols-2 border border-blue-400 w-full h-full gap-5">
                <div className="grid grid-rows-[1.5fr_1fr_1fr_1fr] grid-cols-1 items-center justify-between border-green-600 border-2 ">
                    <div className="bg-blue-400 h-full flex flex-col justify-center">
                        <h1 className="text-white capitalize text-4xl">basic</h1>
                        <p>5.99$</p>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <div className="grid grid-rows-[1.5fr_1fr_1fr_1fr] grid-cols-1 items-center justify-between border-green-600 border-2">
                    <div className="bg-blue-400 h-full flex flex-col justify-center">
                        <h1 className="text-white capitalize text-4xl">peremium</h1>
                        <p>15.99$</p>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
            <button className="w-[80%] bg-red-300 py-3">purche</button>
        </div>


    </div>
  )
}

export default PlanPage