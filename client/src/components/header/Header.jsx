import "./headser.css";
import { FaBed } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [acKapa, setAcKapa] = useState(false);
  
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate('/hotels', {state: {destination, date, options}})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <span> 
              <FaBed />{" "}
            </span>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <span>
              <FaBed />
            </span>
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <span>
              <FaBed />
            </span>
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <span>
              <FaBed />
            </span>
            <span>Airport taxis</span>
          </div>
        </div>
       {type !== "list" && <>
        <h1 className="headerTitle">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          reiciendis perferendis nostrum quasi porro amet quidem
        </p>
        <button className="headerBtn">Sign in/ Register</button>
        <div className="headerSearch">
          <div className="headerSerachItem">
            <AiOutlineSearch className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSerachItem">
            <BsFillCalendarWeekFill className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSerachItem">
            <BsFillPersonCheckFill className="headerIcon" />
            <span onClick={() => setAcKapa(!acKapa)} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
          {acKapa && (  <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult </span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children </span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button
                    
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room </span>
                <div className="optionCounter">
                  <button
                  disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>)}
          </div>
          <div className="headerSerachItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
       </>}
      </div>
    </div>
  );
};

export default Header;
