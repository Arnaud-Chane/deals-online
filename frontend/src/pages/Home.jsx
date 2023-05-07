import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="title-container">
        <h1 className="title">Always Judge a book by its cover</h1>
        <div className="title-descr">
          Ut sit dolore sint eu.Laboris est sint mollit cupidatat aute aliquip
          culpa et dolore velit aliquip.
        </div>
        <div className="title-links">
          <a href="#">Recommend a book</a>
          <p>~</p>
          <a href="#">Get in touch</a>
          <p>~</p>
          <a href="#">RSS</a>
        </div>
      </div>
      <div className="main-content">
        <div className="main-img">
          <img
            src="https://miro.medium.com/v2/resize:fit:820/0*oyD7ekV-hMU91h4J.png"
            alt="pic of meme"
          />
        </div>
        <div className="main-img-title">
          <h2>Nulla officia aute do velit occaecat id do.</h2>
        </div>
        <div className="main-img-note">
          <small>
            Mollit consequat cillum pariatur esse in in non mollit excepteur
            labore.
          </small>
        </div>
        <div className="main-para-ctn">
          <div className="main-para1">
            Anim irure magna fugiat sint sint tempor id eu tempor.Labore ex
            aliqua cupidatat elit cillum.Cupidatat dolore tempor eiusmod ut
            proident deserunt fugiat. Tempor aliqua dolore cillum ipsum aute
            adipisicing est ullamco veniam ipsum. Aliqua quis dolore labore
            exercitation enim in excepteur quis dolore proident.
          </div>
          <div className="main-para2">
            Anim irure magna fugiat sint sint tempor id eu tempor.Labore ex
            aliqua cupidatat elit cillum.Cupidatat dolore tempor eiusmod ut
            proident deserunt fugiat. Tempor aliqua dolore cillum ipsum aute
            adipisicing est ullamco veniam ipsum. Aliqua quis dolore labore
            exercitation enim in excepteur quis dolore proident.
          </div>
          <div className="main-para3">
            Anim irure magna fugiat sint sint tempor id eu tempor.Labore ex
            aliqua cupidatat elit cillum.Cupidatat dolore tempor eiusmod ut
            proident deserunt fugiat. Tempor aliqua dolore cillum ipsum aute
            adipisicing est ullamco veniam ipsum. Aliqua quis dolore labore
            exercitation enim in excepteur quis dolore proident.
          </div>
          <div className="btn-container">
            <div className="btn btn-amazon">
              <a href="#">
                <span>listen on Audible{" "}</span>
                <img src="https://picsum.photos/20" alt="pic of meme" />{" "}
              </a>
            </div>
            <div className="btn btn-kindle">
              <a href="#">
                <span>listen on Audible{" "}</span>
                <img src="https://picsum.photos/20" alt="pic of meme" />{" "}
              </a>
            </div>
            <div className="btn btn-audible">
              <a href="#">
                <span>listen on Audible{" "}</span>
                <img src="https://picsum.photos/20" alt="pic of meme" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
