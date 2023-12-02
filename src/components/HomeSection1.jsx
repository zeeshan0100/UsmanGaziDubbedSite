import { React, useState } from "react";
import "../assets/css/HomeSection1.css";
import HomeImages1 from "./HomeImages1";
import HomeImages2 from "./HomeImages2";
import HomeImages3 from "./HomeImages3";
const HomeSection1 = () => {
  const [counter, setCount] = useState("0");
  const [display, setDisplay] = useState("flex");
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [arrowleft, setLeftArrowDisplay] = useState("flex");
  const [arrowright, setRightArrowDisplay] = useState("flex");
  // let Section1Parent = {};
  const [ArrowContainerHeight, setArrowContainerHeight] = useState("1700px");
  const ArrowContainerStyle = {
    width: "100%",
    height: ArrowContainerHeight,
    /* border: 1px solid blue; */
    display: "flex",
    justifyContent: "center",
    /* align-items: center; */
    position: "absolute",
    top: "565px",
    left: "0px",
  };
  // const  [Display1Transition,setDisplay1Transition] = useState(`all 0s ease-in-out 1s`)
  const Textdecoration = "underline";
  return (
    <>
      <div
        className="Section1-Container"
      // onLoadCapture={()=>{ do {
      // if (counter === "1") {
      //   setCount("0");
      //   setDisplay1("none");
      //   setDisplay('flex')
      // } else if (counter === "2") {
      //   setCount("1");
      //   setDisplay1('flex')
      //   setDisplay2("none");
      // } else if (counter === "3") {
      //   setCount("2");
      //   setDisplay2('flex')
      //   setDisplay3("none");
      //   setRightArrowDisplay("flex");
      // } else {
      //   // setLeftArrowDisplay('none')
      // }
      //     if (counter === "1") {
      //       setCount("0");
      //       setDisplay1("none");
      //       setDisplay('flex')
      //     } else if (counter === "2") {
      //       setCount("1");
      //       setDisplay1('flex')
      //       setDisplay2("none");
      //     } else if (counter === "3") {
      //       setCount("2");
      //       setDisplay2('flex')
      //       setDisplay3("none");
      //       setRightArrowDisplay("flex");
      //     } else {
      //       // setLeftArrowDisplay('none')
      //     }
      //   } while (1<2);
      // }}
      >
        <div style={{ display: display }} className="Section1-Parent">
          <div className="Section1-Parent-Images">
            <div className="Section1-Img1 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img2 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img3 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img4 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img5 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img6 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img7 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img8 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img9 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img10 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img11 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img12 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img13 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img14 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img15 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
            <div className="Section1-Img16 Section1-All-images" alt="Loding" >
              <button className="relative z-[115] w-36 h-9 border-4 border-gray-800 rounded-md bg-black text-gray-100 text-center font-extrabold hover:text-red-700 hover:shadow-lg hover:shadow-black   ">
                Download
              </button>
            </div>
          </div>
        </div>
        <HomeImages1 display1={display1} />
        <HomeImages2 display2={display2} />
        <HomeImages3 display3={display3} />
        <div className="section1-ParentText">
          <p className="section1-Text">Wellcome To UsmanDubbed.com</p>
        </div>
        <div
          style={ArrowContainerStyle}
        className="section1-ContainerArrowsAndPages"
        >
          <div className="section1-ParentArrowAndPages">
            <div
              className="section1-leftarrow"
              onClick={() => {
                if (counter === "1") {
                  setCount("0");
                  setDisplay("flex");
                  setDisplay1("none");
                  setArrowContainerHeight("1700px");
                } else if (counter === "2") {
                  setCount("1");
                  setDisplay1("flex");
                  setDisplay2("none");
                } else if (counter === "3") {
                  setCount("2");
                  setDisplay2("flex");
                  setDisplay3("none");
                  setRightArrowDisplay("flex");
                } else {
                  // setLeftArrowDisplay('none')
                }
                // Section1Parent={ transition:"all"+"5s"+"ease-in-out",}
              }}
              style={{ display: arrowleft }}
            >
              &#171;
            </div>
            <span className="section1-Pages Page1">1</span>
            <span className="section1-Pages Page2">2</span>
            <span className="section1-Pages Page3">3</span>
            <span className="section1-Pages Page4">4</span>
            <div
              className="section1-rightarrow"
              onClick={() => {
                if (counter === "0") {
                  setCount("1");
                  setDisplay1("flex");
                  setDisplay("none");
                  setArrowContainerHeight("1112px");
                  // setLeftArrowDisplay('flex')
                } else if (counter === "1") {
                  setCount("2");
                  setDisplay2("flex");
                  setDisplay1("none");
                } else if (counter === "2") {
                  setCount("3");
                  setDisplay3("flex");
                  setDisplay2("none");
                  setRightArrowDisplay("none");
                } else {
                }
              }}
              style={{ display: arrowright }}
            >
              &#187;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection1;
