const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="m-4" src={data.place.pic} alt={data.place.name} />
                        <h3 className="text-center">
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1 className="m-4">{data.place.name}</h1>

                        <h2>Rating</h2>
                        <h5>Not Rated</h5>

                        <div className="d-flex justify-content-center">
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning mx-4">
                                Edit 
                            </a>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger btn-md">
                                    Delete <i className="fas fa-trash-alt"></i>
                                </button>


                            </form>
                        </div>
                    </div>
                </div>
                <h2>Comments</h2>
                <h5>No comments yet!</h5>
            </main>
        </Def>
    )
}

module.exports = show