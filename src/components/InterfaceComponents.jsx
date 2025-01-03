import React from 'react'

function InterfaceComponents({ heading, para, lpara, code, hCode, videoCard, lastButton ,scrollDiv}) {


    return (
        <>


            <div className="container-fluid px-5 pt-5 bg-light">
                <div className="interfaceComponent-section">
                    <br />
                    <h1>{heading}</h1><br />
                    <p className="text-muted text-light-emphasis fs-5">
                        {para}
                    </p><br />
                </div>


                <div className="row justify-content-center align-items-center">

                    <div className="col-md-6 px-0 ">
                        <div className="code-section rounded-4 border border-dark-subtle">
                            <div className='bg-light border px-4 p-2 rounded-top-4 '>{hCode} </div>
                            <pre className="code p-3 fs-6  rounded-bottom-4 ">

                                {code}


                            </pre>
                        </div>
                    </div>


                    <div className="as pt-5 pb-5 col-md-6 rounded-end-4 border border-dark-subtle d-flex align-items-center justify-content-center">
                        {videoCard}
                        {scrollDiv}


                    </div>
                </div>

                <br />
                <div className="text-center mt-4">
                    <p className="text-muted text-light-emphasis fs-5"><br />
                        {lpara}
                    </p>
                </div>
                <br />
                <div className='d-flex justify-content-center align-items-center mb-5 pb-5'>{lastButton} </div>
            </div>


        </>
    )
}

export default InterfaceComponents








