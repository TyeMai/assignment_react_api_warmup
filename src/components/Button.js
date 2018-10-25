import React from 'react'


const Button = (props) => {
  const {type, color, children, onClick} = props
  //const sizeClass = size ? `btn-${size}` : ''
  //console.log(props)
  return (
    <button
      type={type}
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'default',
  children: 'submit'
}

export default Button
