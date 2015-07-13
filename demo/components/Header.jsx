
import React from 'react'

class Header extends React.Component {

  render () {
    let { title } = this.props

    return (
      <header className='px2 border-bottom'>
        <h1 className='h3'>
          {title}
        </h1>
      </header>
    )
  }

}

export default Header

