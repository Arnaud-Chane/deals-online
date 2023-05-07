import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="nav-ctn">
        <div className="nav-logo">
          <div className="logo nav-logo-left">
            <img src="https://picsum.photos/20" alt="pic of meme" />
          </div>
          <div>or</div>
          <div className="logo nav-logo-right">
            <img src="https://picsum.photos/20" alt="pic of meme" />
          </div>
        </div>

        <div className="nav-title">
          <h1>Weird or Confusing</h1>
        </div>
        <div className="nav-under-title">
          <h2>Voluptate nostrud magna magna esse consectetur.</h2>
          <div className="nav-links">
            <a href="#">Suggest</a>
            <span>~</span>
            <a href="#">Me</a>
            <span>~</span>
            <a href="#">RSS</a>
          </div>
        </div>
      </div>
      <div className="main-ctn">
        <div className="article-1">
          <div className="img-ctn">
            <img
              className="main-img-1"
              src="https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png"
              alt="pic of meme"
            />
            <img
              className="main-img-2"
              src="https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png"
              alt="pic of meme"
            />
            <img
              className="main-img-3"
              src="https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png"
              alt="pic of meme"
            />
          </div>
          <div className="content-ctn">
            <div className="content-title">
              <h3>Chicken Nugget</h3>
              <p>Velit commodo quis amet id id ad.</p>
            </div>
            <div className="content-para">
              Consequat fugiat id et sint consectetur voluptate laboris deserunt
              mollit dolore excepteur nulla. Anim amet eiusmod irure
              reprehenderit adipisicing aliquip. Cupidatat non eiusmod cillum
              esse. Duis velit ut veniam anim non esse cillum est mollit nostrud
              non reprehenderit adipisicing.
            </div>
            <div className="content-para">
              Consequat fugiat id et sint consectetur voluptate laboris deserunt
              mollit dolore excepteur nulla. Anim amet eiusmod irure
              reprehenderit adipisicing aliquip. Cupidatat non eiusmod cillum
              esse. Duis velit ut veniam anim non esse cillum est mollit nostrud
              non reprehenderit adipisicing.
            </div>
            <div className="content-para">
              Consequat fugiat id et sint consectetur voluptate laboris deserunt
              mollit dolore excepteur nulla. Anim amet eiusmod irure
              reprehenderit adipisicing aliquip. Cupidatat non eiusmod cillum
              esse. Duis velit ut veniam anim non esse cillum est mollit nostrud
              non reprehenderit adipisicing.
            </div>
            <a href="#" className="btn-redirection">
              Chicken Nugget Keychain on Amazon
              <img src="https://picsum.photos/20" alt="pic of meme" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
