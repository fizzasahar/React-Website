import React from 'react'

function InterfaceComponents({ heading, para, lpara }) {
    return (
        <>


            <div className="container-fluid px-5 pt-5 bg-light-subtle">
                <div className="interfaceComponent-section">
                    <br />
                    <h1>{heading}</h1><br />
                    <p className="text-muted text-light-emphasis fs-5">
                        {para}
                    </p><br />
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
                                <div className="video-icon mx-3">
                                    <i className="bi bi-play-fill fs-3"></i>
                                </div>
                                <div className='me-5'>
                                    <p className="mb-0 fw-bold fs-5">My video</p>
                                    <p className="text-muted fs-6 mx-1">Video description</p>
                                </div>
                                <div className="heart-icon mx-2 mt-3">
                                    <i className="bi bi-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <div className="text-center mt-4">
                    <p className="text-muted text-light-emphasis fs-5"><br />
                        {lpara}
                    </p>
                </div>
                <br />
            </div>





        </>
    )
}

export default InterfaceComponents








