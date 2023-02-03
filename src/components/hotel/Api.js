import { useState, useEffect, useRef } from "react";
import{Link, useLocation, useNavigate} from "react-router-dom"

const Api = () => {
  const getHi=useNavigate();
  const location =useLocation();
  const state=location.state;
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const autocompleteRef = useRef();

  useEffect(() => {
   
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  

  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <div className="re">
      <input
        className="amn"
        value={value}
        onChange={handleChange}
        placeholder="Search For Hotel resturant and More...."
        onFocus={() => setShowSuggestions(true)}
      /></div>
      {showSuggestions && (
        <ul className="suggestion">
          <h4>Explore Tag</h4>
          <br></br>
          <div className="bt">
            <Link className="ho" to="/Home">
              Home
            </Link>
            <Link className="ho" to="/Dining">
              Dining
            </Link>
            <Link className="ho" to="/Jiva">
              jiva spa
            </Link>
          </div>
          <br></br>
          <h4>
            <img
              style={{ width: "30px" }}
              src="https://psfonttk.com/wp-content/uploads/2021/08/Location-Emoji-Copy-and-Paste.png"
              alt=""
            />
            Trending Searches
          </h4>
          <div>
            <h4><Link to="/Mumbai">Taj Mahal Tower, Mumbai</Link></h4>
            <h4 onClick={()=>getHi('/Bhopal')}>Taj Palace,Bhopal</h4>
            <h4><Link to="/Dubai" state={{data:state}}>Taj Dubai</Link></h4>
            <h4><Link to="/LandsEnd" state={{data:state}}>Taj LandsEnd,Mumbai</Link></h4>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Api;
