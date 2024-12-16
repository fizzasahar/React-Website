import React from 'react'

function InterfaceComponents() {
    return (
        <>


            <div class="container-fluid px-5 pt-5 bg-light-subtle">
                <div class="interfaceComponent-section">
                    <h1 class="fw-bold">Create user interfaces <br /> from components</h1>
                    <p class="text-muted text-light-emphasis">
                        React lets you build user interfaces out of individual pieces called components.<br />
                        Create your own React components like <code>Thumbnail</code>, <code>LikeButton</code>, and <code>Video</code>.
                    </p>
                </div>


                <div class="row justify-content-center align-items-center">

                    <div class="col-md-6 px-0">
                        <div class="code-section">
                            <div class='bg-body-secondary px-4 p-2 rounded-top'>Video.js </div>
                            <pre class="code px-4 p-5 rounded-pill">

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


                    <div class="as h-100 p-5 col-md-6 rounded-end  d-flex align-items-center justify-content-center">
                        <div class="highlight-box">
                            <div class="video-card">
                                <div class="video-icon">
                                    <i class="bi bi-play-fill fs-3"></i>
                                </div>
                                <div>
                                    <p class="mb-0 fw-bold">My video</p>
                                    <p class="text-muted">Video description</p>
                                </div>
                                <div class="heart-icon">
                                    <i class="bi bi-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="text-center mt-4">
                    <p class="text-muted text-light-emphasis">
                        Whether you work on your own or with thousands of other developers, using React feels the same.
                        It is designed to let you seamlessly combine components written by independent people, teams, and organizations.
                    </p>
                </div>
            </div>





        </>
    )
}

export default InterfaceComponents








