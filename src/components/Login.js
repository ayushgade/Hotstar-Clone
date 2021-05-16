import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
      <Container>
          <Content>
                <LogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
                </Description>
                <LogoTwo src="/images/cta-logo-two.png" />
          </Content>
      </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{
        background-image: url("/images/login-background.jpg");
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.9;
        z-index: -1;
    }
`
const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;

`
const LogoOne = styled.img`
`
const SignUp = styled.a`
    width: 100%;
    border-radius: 5px;
    background-color: #0063e5;
    padding: 17px 0;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 250ms;
    margin-top: 10px;
    margin-bottom: 15px;
    letter-spacing: 1.5px;

    &:hover {
        background: #0483ee;
    }

`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const LogoTwo = styled.img`
    padding: 0 20px;
`