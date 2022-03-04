const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="/images/fruit drink.jpg" alt="Chia Fruit Drink" />
                  <div>
                  https://unsplash.com/photos/8yji1QSu58U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink  
                  </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404