import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import "../styles/Home.scss";
import vg from "../assests/2.webp";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techystar</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
          <p>
            We are your one and only solution to tech problems you face every
            day. We are leading tech company whose aims is to increase the
            problem solving ability in chidrens.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vel
            unde laudantium! Deleniti totam maxime quas rem vitae, asperiores
            tempore in odio. Culpa at ullam aut mollitia laboriosam odio dolor?
            Repellendus fugit, in distinctio illo voluptatem accusamus quam odit
            sequi recusandae libero iste voluptatibus ex similique quasi vero
            delectus quibusdam nostrum ad aperiam explicabo deleniti saepe
            molestias? Repellat sequi incidunt aliquam et velit, fugiat
            quibusdam eum dolorem sunt ipsam reiciendis cupiditate, voluptatem
            iste eveniet dolorum nam eos autem sed. Ut facere perspiciatis
            doloremque accusantium, optio deleniti suscipit voluptatem
            distinctio iste reiciendis, corrupti amet nemo, asperiores quibusdam
            nisi cum laudantium omnis.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Insatagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
