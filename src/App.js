import React, { useState } from "react";
import "./styles.css";

var SeasonsData = {
  Spring: [
    {
      spot: "Kyoto, Japan",
      about:
        "One of the best cities in the world to visit during the spring is Kyoto. The cherry blossoms season is one of the reasons why you should consider this destination.",
      photo:
        "https://tiptoeingworld.com/wp-content/uploads/2015/04/Kiyomizudera-3.jpg",
      rating: `4/5`
    },
    {
      spot: "Stavanger, Norway",
      about:
        "This beautiful destination located in Norway has plenty to offer in terms of landscapes and breath-taking sceneries. Because of this reason, the destination is quite popular among trekking lovers.",
      photo:
        "https://secureservercdn.net/198.71.233.213/fkc.62d.myftpupload.com/wp-content/uploads/2017/09/Stavanger-norway.jpg",
      rating: `3.5/5`
    },
    {
      spot: "Montreux, Switzerland",
      about:
        "The world-renowned city is perfect if you are searching for a high living standard and fresh, crisp air. Popular because Freddy Mercury chose it as his home during the last years of his life.",
      photo: "https://farm8.staticflickr.com/7476/16102775601_fc3f9303d5.jpg",
      rating: `3.7/5`
    }
  ],
  Summer: [
    {
      spot: "Salzburg, Austria",
      about:
        "Another incredible destination that you can enjoy during the summer, is Salzburg. In spite of the chilly, even frosty winters that you can find here, summer is more generous with the tourists that set foot in this destination.",
      photo:
        "https://1.bp.blogspot.com/-QjzGuFtO9Lg/UOwlLL2HBQI/AAAAAAAAawQ/e-ruQ0PrmMA/s640/Salzburg+Austria+5.JPG",
      rating: `3.5/5`
    },
    {
      spot: "Bruges, Belgium",
      about:
        "The city becomes adorably romantic during the summer, with all its colours and flourishing nature, a beauty that be found in all the countries in the area. ",
      photo:
        "https://www.zastavki.com/pictures/originals/2015/World_Old_houses_and_bridge_in_Bruges__Belgium_108827_.jpg",
      rating: `4/5`
    },
    {
      spot: "Williamsburg, Virginia",
      about:
        "Colonial Williamsburg is the world’s largest living museum. It’s an entire section of Williamsburg that feels like you’re stepping back in history. There are several hundred buildings that have been restored or rebuilt to look like they did in the 17th and 18th centuries when this was the capital of colonial Virginia.",
      photo:
        "https://www.rd.com/wp-content/uploads/2019/08/shutterstock_502439266-scaled.jpg",
      rating: `3/5`
    }
  ],

  Fall: [
    {
      spot: "Budapest, Hungary",
      about:
        "The effortless charm of this city seems to be blooming during the fall, even though the days become gradually shorter and colder. Walking through the city can prove quite of a unique experience in itself.",
      photo:
        "https://www.wallpapertip.com/wmimgs/39-392459_chain-bridge-budapest-hungary-europe-danube-8k-szchenyi.jpg",
      rating: `3.5/5`
    },
    {
      spot: "Athens, Greece",
      about:
        " It is believed that Athens during the fall is a truly magical travel destination,You will see olives being harvested and quite of a fuss around the vineyards in the area.",
      photo:
        "https://www.universal-traveller.com/wp-content/uploads/2018/10/The-Best-Day-Trips-From-Athens-Greece-Attractions2.jpg",
      rating: `4/5`
    },
    {
      spot: "North Carolina, USA",
      about:
        "The Blue Ridge Parkway in North Carolina is a scenic drive that runs through the Appalachian Mountains from Virginia into North Carolina. The views are incredible, but the best time to experience them is when the leaves start changing colors. It’s the perfect road trip for the whole family. ",
      photo:
        "https://www.gannett-cdn.com/-mm-/4f453862e206797cc203cf69f5563e09aaec8a54/c=0-108-2122-1307/local/-/media/2016/03/08/USATODAY/USATODAY/635930385504268911-northcarolina-blueridgeparkway.jpg",
      rating: `3.5/5`
    }
  ]
};

var seasonsArray = Object.keys(SeasonsData);

export default function App() {
  var [place, setPlace] = useState("");
  function destinations(season) {
    var destination = SeasonsData[season].map((items) => {
      return (
        <section id="ani" className="destinationsList">
          <div>
            <h1>{items.spot}</h1>
            <div>
              <img src={items.photo} alt="tourist spot photos" />
              <p>{items.about}</p>
              <h2>overall rating: {items.rating}</h2>
            </div>
          </div>
        </section>
      );
    });
    setPlace(destination);
  }
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Travel Guide</h1>
          <div>
            {seasonsArray.map((seasons) => {
              return (
                <button
                  onClick={function () {
                    return destinations(seasons);
                  }}
                  key={seasons}
                >
                  {seasons}
                </button>
              );
            })}
          </div>
          <p>Best travel destinations based on the seasons.</p>
        </header>
        <div>
          <div>{place}</div>
        </div>
      </div>
    </div>
  );
}
