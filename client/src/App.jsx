import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardContent from "./cardContent";
import Swal from 'sweetalert2'


function App() {
  
  const [travelList, setTravelList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [copyLink,setCopyLink] = useState(false)
  

  const handleSvgClick = (url) => {
    
    navigator.clipboard.writeText(url)

    Swal.fire({
      position: "top-end",
      icon: "success",
      iconSize:30,
      width:400,
      title: "Copied",
      showConfirmButton: false,
      timer: 1500
    });
    
  
    setCopyLink(true)
    };
  

  const getTravelList = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${searchInput}`
    );
    console.log(result)
    setTravelList(result.data.data);
  };

  useEffect(() => {
    getTravelList();
  }, [searchInput]);

  return (  
    <div className="App ">
      <section className=" w-full flex flex-col  items-center p-20">
     

        <header>
          <div className="flex flex-col items-center mx-auto pl-10">
            <h1 className=" text-sky-500 text-[60px] font">เที่ยวไหนดี</h1>
            <div className="search-container flex flex-col   mx-auto">
              <label htmlFor="search-place " className=" items-center">
                ค้นหาที่เที่ยว
              </label>
              <input
                type="text"
                name="input-name"
                id="search-place"
                placeholder="หาที่เที่ยวแล้วไปกัน ..."
                className=" border-b-2  w-[50rem]  text-center"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                value={searchInput}
              ></input>
            </div>
          </div>
        </header>
        <main>
          <div className="">
 
            {travelList.map((item, index) => (
              <CardContent
                key={index}
                item={item}
                setSearchInput={setSearchInput}
                handleSvgClick={handleSvgClick}
                
                
              />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
