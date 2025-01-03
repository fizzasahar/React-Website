// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx'
import InterfaceComponents from './components/InterfaceComponents.jsx'
import Navbar from './components/Navbar.jsx'



function App() {
  const Scrollvideos = [
    {
      id: 1,
      title: "React: The Documentary",
      description: "The origin story of React",
      image: "placeholder1.jpg",
    },
    {
      id: 2,
      title: "Rethinking Best Practices",
      description: "Pete Hunt (2013)",
      image: "placeholder2.jpg",
    },
    {
      id: 3,
      title: "React: The Documentary",
      description: "The origin story of React",
      image: "placeholder1.jpg",
    },
    {
      id: 4,
      title: "Rethinking Best Practices",
      description: "Pete Hunt (2013)",
      image: "placeholder2.jpg",
    },
    {
      id: 5,
      title: "React: The Documentary",
      description: "The origin story of React",
      image: "placeholder1.jpg",
    },
    {
      id: 6,
      title: "Rethinking Best Practices",
      description: "Pete Hunt (2013)",
      image: "placeholder2.jpg",
    },
    // Add more video objects here
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <InterfaceComponents
        heading={
          <>
            Create user interfaces <br />
            from components
          </>}
        para={
          <>
            React lets you build user interfaces out of individual pieces called components.<br />
            Create your own React components like <code>Thumbnail</code>, <code>LikeButton</code>, and <code>Video</code>.<br />
            Then combine them into entire screens, pages, and apps.
          </>
        }
        hCode="VideoList.js"
        code={
          <>
            {`function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}`}
          </>
        }
        videoCard={
          <div className="highlight-box w-100 mt-5 mb-5">
            <div className="video-card">
              <div className="video-icon1 mx-3 rounded">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className='me-5'>
                <p className="mb-0 fw-bold fs-5">My video</p>
                <p className="text-muted fs-6 mx-1">Video description</p>
              </div>
              <div className="heart-icon">
                <h3 class="bi bi-suit-heart mx-3"></h3>
              </div>
            </div>
          </div>
        }
        lpara={
          <>
            Whether you work on your own or with thousands of other developers, using <br /> React feels the same. It is designed to let you seamlessly combine components <br /> written by independent people, teams, and organizations.
          </>
        }
      />

      <InterfaceComponents
        heading={
          <>
            Write components <br /> with code and markup
          </>
        }
        para={
          <>
            React components are JavaScript functions. Want to show some content <br /> conditionally? Use an if statement. Displaying a list? Try array <code>map()</code>. Learning <br /> React is learning programming.
          </>
        }
        hCode="Video.js"
        code={
          <>
            {`function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}`}
          </>
        }
        videoCard={
          <div className="highlight-box w-100">
            <div className="video-card">
              <h4 className='mx-3'> 3 Videos</h4>
            </div>
            <div className="video-card">
              <div className="video-icon1 mb-2 mx-3 rounded">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className='me-5'>
                <p className="mb-0 fw-bold fs-5">First video</p>
                <p className="text-muted fs-6 mx-1">Video description</p>
              </div>
              <div className="heart-icon">
                <h3 class="bi bi-suit-heart mx-3"></h3>
              </div>
            </div>


            <div className="video-card">
              <div className="video-icon2 mb-2 mx-3 rounded">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className='me-5'>
                <p className="mb-0 fw-bold fs-5">Second video</p>
                <p className="text-muted fs-6 mx-1">Video description</p>
              </div>
              <div className="heart-icon">
                <h3 class="bi bi-suit-heart mx-3"></h3>
              </div>
            </div>


            <div className="video-card">
              <div className="video-icon3 mb-2 mx-3 rounded">
                <i className="bi bi-play-fill fs-3"></i>
              </div>
              <div className='me-5'>
                <p className="mb-0 fw-bold fs-5">Third video</p>
                <p className="text-muted fs-6 mx-1">Video description</p>
              </div>
              <div className="heart-icon">
                <h3 class="bi bi-suit-heart mx-3"></h3>
              </div>
            </div>
          </div>
        }
        lpara={
          <>
            This markup syntax is called JSX. It is a JavaScript syntax extension popularized <br /> by React. Putting JSX markup close to related rendering logic makes React <br />components easy to create, maintain, and delete.
          </>
        }

      />
      <InterfaceComponents
        heading={
          <>
            Add interactivity<br />
            wherever you need it
          </>}
        para={
          <>
            React components receive data and return what should appear on the screen. <br /> You can pass them new data in response to an interaction, like when the user <br /> types into an input. React will then update the screen to match the new data.
          </>
        }
        hCode="SearchableVideoList.js"
        code={
          <>
            {`import { useState } from 'react';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <VideoList
        videos={foundVideos}
        emptyHeading={"No matches for “${"searchText"}”} />
    </>
  );
}`}
          </>
        }


        scrollDiv={
          <div className="scrollDiv position-absolute  pt-3  rounded-4  bg-white overflow-auto">
            <div className='d-flex align-items-center justify-content-center mb-3 border-bottom border-dark-subtle'>
              <span className='form-control pt-0 pb-0 mt-1 mb-3 mx-3 text-center rounded-pill bg-body-secondary text-body-tertiary'>
                <i class="bi bi-lock"></i>
                example.com/videos.html
              </span>
            </div>
            {/* Header */}
            <div className=''>
              <div className=" mx-2 mb-4 px-3">
                <h1 className="fw-bold">React Videos</h1>
                <p className="text-muted">A brief history of React</p>
              </div>

              {/* Search Bar */}
              <div className="form mx-3">
                <i className="bi bi-search pb-2"></i>
                <input type="text" className="form-control form-input rounded-pill bg-body-secondary text-body-tertiary" placeholder="  Search " />
              </div>

              {/* Video List */}
              <h5 className="mb-3 mt-3 mx-2 px-3">{Scrollvideos.length} Videos</h5>
              <div className="list-group px-4 ">
                {Scrollvideos.map((Scrollvideos) => (
                  <div key={Scrollvideos.id} className="list-group-item d-flex align-items-center">
                    <img
                      src={Scrollvideos.image}
                      alt={Scrollvideos.title}
                      className="rounded me-3"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{Scrollvideos.title}</h6>
                      <small className="text-muted">{Scrollvideos.description}</small>
                    </div>
                    <button className="btn btn-outline-secondary btn-sm">♡</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        }

        lpara={
          <>
            You don’t have to build your whole page in React. Add React to your existing <br /> HTML page, and render interactive React components anywhere on it.
          </>
        }
        lastButton={
          <button className='rounded-pill px-3 pt-2 pb-2 bg-light border border-dark-subtle fw-semibold'>
            <i class="bi bi-code-slash m-2"> </i>
            Add React to your page
            <i class="bi bi-chevron-right m-2 "> </i>
          </button>
        }
      />







      <InterfaceComponents
        heading={
          <>
            Go full-stack <br />
            with a framework
          </>}
        para={
          <>
            React is a library. It lets you put components together, but it doesn’t prescribe <br /> how to do routing and data fetching. To build an entire app with React, we <br /> recommend a full-stack React framework like <code> Next.js</code> or  <code>Remix</code>.
          </>
        }
        hCode="confs/[slug].js"
        code={
          <>
            {`import { db } from './database.js';
import { Suspense } from 'react';

async function ConferencePage({ slug }) {
  const conf = await db.Confs.find({ slug });
  return (
    <ConferenceLayout conf={conf}>
      <Suspense fallback={<TalksLoading />}>
        <Talks confId={conf.id} />
      </Suspense>
    </ConferenceLayout>
  );
}

async function Talks({ confId }) {
  const talks = await db.Talks.findAll({ confId });
  const videos = talks.map(talk => talk.video);
  return <SearchableVideoList videos={videos} />;
}  );
}`}
          </>
        }


        scrollDiv={
          <div className="scrollDiv position-absolute  pt-3  rounded-4  bg-white overflow-auto">
            <div className='d-flex align-items-center justify-content-center mb-3 border-bottom border-dark-subtle'>
              <span className='form-control pt-0 pb-0 mt-1 mb-3 mx-3 text-center rounded-pill bg-body-secondary text-body-tertiary'>
                <i class="bi bi-lock"></i>
                example.com/videos.html
              </span>
            </div>
            {/* Header */}
            <div className=''>
              <div className=" mx-2 mb-4 px-3">
                <h1 className="fw-bold">React Videos</h1>
                <p className="text-muted">A brief history of React</p>
              </div>

              {/* Search Bar */}
              <div className="form mx-3">
                <i className="bi bi-search pb-2"></i>
                <input type="text" className="form-control form-input rounded-pill bg-body-secondary text-body-tertiary" placeholder="  Search " />
              </div>

              {/* Video List */}
              <h5 className="mb-3 mt-3 mx-2 px-3">{Scrollvideos.length} Videos</h5>
              <div className="list-group px-3 ">
                {Scrollvideos.map((Scrollvideos) => (
                  <div key={Scrollvideos.id} className="list-group-item d-flex align-items-center">
                    <img
                      src={Scrollvideos.image}
                      alt={Scrollvideos.title}
                      className="rounded me-3"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{Scrollvideos.title}</h6>
                      <small className="text-muted">{Scrollvideos.description}</small>
                    </div>
                    <button className="btn btn-outline-secondary btn-sm">♡</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        }


        lpara={
          <>
            React is also an architecture.Frameworks that implement it let you fetch data in <br /> asynchronous components that run on the server or even during the build.Read < br /> data from a file or a database, and pass it down to your interactive components.
          </>
        }
        lastButton={
          < button className='rounded-pill px-3 pt-2 pb-2 bg-light border border-dark-subtle fw-semibold' >
            <i class="bi bi-boxes m-2"></i>
            Get started with a framework
            < i class="bi bi-chevron-right m-2 " > </i >
          </button >
        }
      />




    </>
  )
}

export default App