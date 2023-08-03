import Button from "./components/Button";

const Home = () =>{
    return(
        <>
            <div className="container mx-auto">
                <h1 className="text-xl font-sans font-semibold uppercase truncate ">Home Page</h1>
                <div className="flex flex-row">
                <div className="basis-1/4 bg-blue-700 text-white text-center p-5">01</div>
                <div className="basis-1/4 bg-red-700 text-white text-center p-5">02</div>
                <div className="basis-1/2 bg-green-700 text-white text-center p-5">03</div>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </>
    )
}
export default Home;