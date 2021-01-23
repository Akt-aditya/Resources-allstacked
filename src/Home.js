import React from "react";
import "./Home.css";
import Video from "./data.json";
function Con(props) {
  return (
    <div className="card" key={props.id}>
      <iframe
        width="560px"
        src={props.video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="video"
      />
      <div className="card_body">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="des">{props.des}</div>
      </div>
    </div>
  );
}
var v = Video;

{
  /*<Con video="https://youtube.com/embed/zFZrkCIc2Oc" title="HTML and CSS by CS50" des="Best HTML and CSS course in full detail by harward university's CS50"/>
  <Con video="https://www.youtube.com/embed/H4MkGzoACpQ" title="Responsive and animated navbar"  des="In order to understand it goodly you need to know Basics HTML , JS and transitons in CSS"/>*/
}

const Home = v.map(s => {
  return (
    <>
      {/*  <Con video={s.src} title={s.title} des={s.shrtdes} />*/}
      <Con key={s.id} video={s.src} title={s.title} des={s.shrtdes} />
    </>
  );

});
export default Home;
export { Con };
