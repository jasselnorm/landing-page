import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  color: #fff;
  border-radius: 300px;
  width: 230px;
  height: 50px;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  border: none;

  &:hover {
    color: #fff;
  }
`

const colors = {
  blue: {
    'background': 'linear-gradient(90deg, #009AFF 0%, #7BCBFF 100%)',
    'boxShadow': '0px 12px 90px #009AFF'
  }
}

export default ({text, color, action}) => (
  <StyledButton onClick={action} style={colors[color]} >{text}</StyledButton>
)