import React from 'react'

function InterfaceComponents() {
    return (
        <>


            <div className="container-fluid px-5 pt-5 bg-light-subtle">
                <div className="interfaceComponent-section">
                    <h1 className="fw-bold">Create user interfaces <br /> from components</h1>
                    <p className="text-muted text-light-emphasis">
                        React lets you build user interfaces out of individual pieces called components.<br />
                        Create your own React components like <code>Thumbnail</code>, <code>LikeButton</code>, and <code>Video</code>.
                    </p>
                </div>


                <div className="row justify-content-center align-items-center">

                    <div className="col-md-6 px-0">
                        <div className="code-section">
                            <div className='bg-body-secondary px-4 p-2 rounded-top'>Video.js </div>
                            <pre className="code px-4 p-5 rounded-pill">

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
}
                                `}


                            </pre>
                        </div>
                    </div>


                    <div className="as h-100 p-5 col-md-6 rounded-end  d-flex align-items-center justify-content-center">
                        <div className="highlight-box">
                            <div className="video-card">
                                <div className="video-icon">
                                    <i className="bi bi-play-fill fs-3"></i>
                                </div>
                                <div>
                                    <p className="mb-0 fw-bold">My video</p>
                                    <p className="text-muted">Video description</p>
                                </div>
                                <div className="heart-icon">
                                    <i className="bi bi-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="text-center mt-4">
                    <p className="text-muted text-light-emphasis">
                        Whether you work on your own or with thousands of other developers, using React feels the same.
                        It is designed to let you seamlessly combine components written by independent people, teams, and organizations.
                    </p>
                </div>
            </div>





        </>
    )
}

export default InterfaceComponents








