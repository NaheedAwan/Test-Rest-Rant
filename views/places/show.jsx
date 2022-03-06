const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                {/* <div className="row"> */}
                    <div className="col-sm-6">
                        <img className="m-4" src={data.place.pic} alt={data.place.name} />
                        <h3 className="text-center">
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <h1>{data.place.name}</h1>

                    <h2>Rating</h2>
                    <h5>Not Rated</h5>


                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>


                    </form>
                {/* </div> */}
                <h2>Comments</h2>
                <h5>No comments yet!</h5>
            </main>
        </Def>
    )
}

module.exports = show