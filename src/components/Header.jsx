import styled from "styled-components"

const StyleHeader = styled.div `
    text-align: center;
    padding: 20px;
    width: 50%;
    margin: auto;
    margin-bottom: 100px;

    h1 {
        color: #627dff;
        font-size: 45px;
    }

    h1 span {
        color: #d9d9d9;
    }
`

function Header() {
    return(
        <>
            <StyleHeader>
                <h1>Bem-vindo(a) <span>ao meu portfolio!</span></h1>
            </StyleHeader>
        </>
    )
}

export default Header