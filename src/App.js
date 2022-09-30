import Home from "./pages/Home";
import elipse1 from "./assets/images/elips1.svg";
import elipse2 from "./assets/images/Ellipse2.svg";

function App() {
    return (
        <div className="bg-[#000235]">
            <Home />
            {/* <img
                src={elipse1}
                alt=""
                className="absolute -top-60 blur-3xl bg-opacity-10"
            />
            <img
                src={elipse1}
                alt=""
                className="absolute top-52 -right-2/3 blur-3xl  bg-opacity-10"
            /> */}
            <div className="h-5 w-full bg-[#222169]"></div>
        </div>
    );
}

export default App;
