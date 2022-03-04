const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/chiaSeed_drink.jpg" alt="Chia Fruit Shake" />
                    <div>
                        https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <a href="/index"></a>
            </main>
        </Def>
    )
}

module.exports = home