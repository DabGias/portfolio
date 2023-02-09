import styled from "styled-components"

const StyleHeader = styled.div `
    text-align: center;
    padding: 20px;
    width: 50%;
    margin: auto;

    h1 {
        color: #002bff;
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
                <h1>Bem-vindo(a) <span>ao meu portifólio!</span></h1>
            </StyleHeader>
        </>
    )
}

export default Header