import  { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import text from '../../text'
import JoinBox from '../../components/join-box'
import JoinJuror from '../../assets/images/join-juror.png'
import JoinPartner from '../../assets/images/join-partner.png'
import Button from '../../components/button'

const StyledContainer = styled.div`
  padding: 20px 10%;
`
const StyledHeading = styled.div`
  color: #FFFFFF;
  font-weight: 600;
  font-size: 54px;
  line-height: 74px;
  text-align: center;
`
const StyledSubtext = styled.div`
  color: #D8B6FF;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin-top: 50px;
  text-align: center;
`

export default ({language}) => {
  const heading = text[language].home.justiceRevolution.heading
  const subtext = text[language].home.justiceRevolution.subtext

  const joinJurorHeading = text[language].home.justiceRevolution.joinJurorHeading
  const joinJurorSubtext = text[language].home.justiceRevolution.joinJurorSubtext
  const joinJurorButtonText = text[language].home.justiceRevolution.joinJurorButtonText
  const joinPartnerHeading = text[language].home.justiceRevolution.joinPartnerHeading
  const joinPartnerSubtext = text[language].home.justiceRevolution.joinPartnerSubtext
  const joinPartnerButtonText = text[language].home.justiceRevolution.joinPartnerButtonText

  return (
    <StyledContainer>
      <StyledHeading>{heading}</StyledHeading>
      <StyledSubtext>{subtext}</StyledSubtext>
      <Row>
        <Col lg={12}>
          <JoinBox
            image={JoinJuror}
            title={joinJurorHeading}
            subtext={joinJurorSubtext}
            button={(
              <Button text={joinJurorButtonText} color={'blue'} action={() => {window.location = "https://blog.kleros.io/become-a-juror-blockchain-dispute-resolution-on-ethereum/"}} />
            )}
          />
        </Col>
        <Col lg={12}>
          <JoinBox
            image={JoinPartner}
            title={joinPartnerHeading}
            subtext={joinPartnerSubtext}
            button={(
              <Button text={joinPartnerButtonText} color={'purple'} action={() => {window.location = "https://kleros.io/en/partner"}} />
            )}
          />
        </Col>
      </Row>
    </StyledContainer>
  )
}
