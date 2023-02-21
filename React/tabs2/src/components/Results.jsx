import React from 'react'

const Results = (props) => {
    const {tablist, tabIndex} = props;
  return (
    <div>
    { tablist[tabIndex].content}
    </div>
  )
}

export default Results
