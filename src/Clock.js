import React, { useEffect, useRef, useState } from "react";
import "./clock.css";
import moment from "moment";
import "moment-timezone";

const Clock = (props) => {
  let { country, others } = props;
  //   const [min, setMin] = useState(0);
  //   const [hour, sethour] = useState(0);
  //   const [sec, setSec] = useState(0);
  const [alert, setAlert] = useState(false);
  let hourHand = useRef();
  let minuteHand = useRef();
  let secondHand = useRef();
  let second = 0;
  let hour = 0;
  let minute = 0;
  let d = new Date();

  useEffect(() => {
    let interval = setInterval(() => {
      //   d = new Date();
      //d = moment.tz("Europe/London").format("YYYY-MM-DD HH:mm:ss ZZ");
      let d = country ? new Date() : moment.tz("Europe/London");
      //   second = d.getSeconds() * 6;
      //   hour = d.getHours() * 30 + Math.round(minute / 12);
      //   minute = d.getMinutes() * 6;
      second = country ? d.getSeconds() * 6 : d.seconds() * 6;
      hour = country
        ? d.getHours() * 30 + Math.round(minute / 12)
        : d.hours() * 30 + Math.round(minute / 12);
      minute = country ? d.getMinutes() * 6 : d.minutes() * 6;
      //   console.log("secondHand", secondHand.current);
      if (country) console.log("hour", hour, minute, second);

      if (hour % 360 === 0) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      }
      secondHand.current.style.transform = "rotate(" + second + "deg)";
      minuteHand.current.style.transform = "rotate(" + minute + "deg)";
      hourHand.current.style.transform = "rotate(" + hour + "deg)";
      //   alert("Hello! I am an alert box!");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="container">
      {alert && (
        <div>
          <h2>
            {country ? "India 1 hour has passed" : "UK 1 hour has passed"}
          </h2>
        </div>
      )}
      <h1>{!country ? "UK TIME" : "INDIA TIME"}</h1>
      <div className="clock-dial">
        <div className="point"></div>
        <div className="hour hour-1">1</div>
        <div className="hour hour-2">2</div>
        <div className="hour hour-3">3</div>
        <div className="hour hour-4">4</div>
        <div className="hour hour-5">5</div>
        <div className="hour hour-6">6</div>
        <div className="hour hour-7">7</div>
        <div className="hour hour-8">8</div>
        <div className="hour hour-9">9</div>
        <div className="hour hour-10">10</div>
        <div className="hour hour-11">11</div>
        <div className="hour hour-12">12</div>
        <div className="minute-hand-wrapper" ref={minuteHand}>
          <div className="minute-hand">
            <div className="hand"></div>
            <div className="arrow">V</div>
          </div>
        </div>

        <div className="hour-hand-wrapper" ref={hourHand}>
          <div className="hour-hand">
            <div className="hand"></div>
            <div className="arrow">V</div>
          </div>
        </div>

        <div className="second-hand-wrapper" ref={secondHand}>
          <div className="second-hand">
            <div className="hand"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
