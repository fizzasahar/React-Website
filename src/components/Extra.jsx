import React from 'react'



const Extra= () => {
  const videos = [
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
    // Add more video objects here
  ];

  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">React Videos</h1>
        <p className="text-muted">A brief history of React</p>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input type="text" className="form-control" placeholder="Search" />
      </div>

      {/* Video List */}
      <h5 className="mb-3">{videos.length} Videos</h5>
      <div className="list-group">
        {videos.map((video) => (
          <div key={video.id} className="list-group-item d-flex align-items-center">
            <img
              src={video.image}
              alt={video.title}
              className="rounded me-3"
              style={{ width: "60px", height: "60px" }}
            />
            <div className="flex-grow-1">
              <h6 className="mb-0">{video.title}</h6>
              <small className="text-muted">{video.description}</small>
            </div>
            <button className="btn btn-outline-secondary btn-sm">♡</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
