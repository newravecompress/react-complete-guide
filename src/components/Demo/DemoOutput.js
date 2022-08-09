import React, { memo } from 'react'

const DemoOutput = props => {
  console.log('Demo output')
  return <p>{props.show ? 'This is new!' : ''}</p>
}

export default memo(DemoOutput)