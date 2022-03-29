import React from 'react'

const InputBar = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Enter new value here"
        onChange={props.onChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default InputBar
