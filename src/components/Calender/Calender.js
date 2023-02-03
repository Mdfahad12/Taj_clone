import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import "./Calender.scss";
const Calender = () => {
  const [calen, setCalen] = useState(false);
  const [allevent, setAllevent] = useState({
    title: "",
    start: "",
    end: "",
    backgroundColor: "",
  });
  const [pop, setPop] = useState(false);
  const [events, setevents] = useState([]);

  const toggleCalender = (e) => {
    const today = new Date();
    console.log(today);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const todayDate = `${year}-${month}-0${date}`;

    console.log(e.dateStr, todayDate);
    if (e.dateStr >= todayDate) {
      setCalen(!calen);

      if (calen) {
        document.body.classList.add("active-model");
      } else {
        document.body.classList.remove("active-model");
      }
    }
  };
  const togglePop = (e) => {
    e.preventDefault();

    setPop(true);
  };
  console.log(pop);
  const eventContent = (eventInfo) => {
    return (
      <div>
        <div className="container">
          <button onClick={togglePop}>
            <i>{eventInfo.event.title}</i>
            <button onClick={() => deleteItem(eventInfo.event.title)}>
              ❌
            </button>
          </button>
          {pop && (
            <div className="overlay">
              {" "}
              <div className="tit" style={{ color: "yellow" }}>
                title:{eventInfo.event.title}
                {/* {eventInfo.event.dateStr} */}
              </div>
              {events.map((item, index) => {
                return (
                  <div key={index}>
                    {item.title === eventInfo.event.title ? (
                      <div style={{color:"red"}}>
                      <span> start:{item.start}</span>
                      <span> end:{item.end}</span></div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          )}{" "}
        </div>
      </div>
    );
  };
  const deleteItem = (index) => {
    const updateItem = events.filter((item) => {
      return index !== item.title;
    });
    setevents(updateItem);
  };
  const toggleDatas = () => {
    const data = [...events, allevent];
    setevents(data);

    console.log(data);
  };

  return (
    <div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={toggleCalender}
          eventContent={eventContent}
          events={events}
        />
      </div>

      {calen && (
        <div style={{ zIndex: "1" }}>
          <div onClick={toggleCalender} className="oveay"></div>
          <div className="card">
            <div>
              <div>
                <label for="Event">Event</label>
                <input
                  onChange={(e) =>
                    setAllevent({ ...allevent, title: e.target.value })
                  }
                  type="search"
                  autoComplete="off"
                  name="title"
                />

                <div>
                  <label for="start">start</label>
                  <br></br>
                  <input
                    onChange={(e) =>
                      setAllevent({ ...allevent, start: e.target.value })
                    }
                    type="date"
                    id="timein"
                    name="start"
                  />
                </div>
                <div>
                  <label for="time out">End</label>
                  <br></br>
                  <input
                    onChange={(e) =>
                      setAllevent({ ...allevent, end: e.target.value })
                    }
                    type="date"
                    id="end"
                    name="end"
                  />
                </div>
                <div>
                  <label for="time out">color</label>
                  <br></br>
                  <input
                    onChange={(e) =>
                      setAllevent({
                        ...allevent,
                        backgroundColor: e.target.value,
                      })
                    }
                    type="color"
                    id="backGround"
                    name="backgroundColor"
                  />
                </div>
                <button onClick={toggleDatas}>Add</button>
              </div>
            </div>
            <button
              className="close-model"
              onClick={() => {
                setCalen(!calen);
              }}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calender;
