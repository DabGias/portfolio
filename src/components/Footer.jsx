import styled from 'styled-components'

const StyleFooter = styled.footer `
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #d9d9d9;
    padding: 10px;

    h1 {
        color: #ecec31;
        margin-bottom: 40px;
    }

    p {
        margin-bottom: 20px;
    }

    p span {
        color: #ecec31;
    }

    a {
        display: block;
        text-decoration: none;
        color: #d9d9d9;
        margin-bottom: 20px;
        transition: 150ms;
    }

    a:hover {
        color: #ecec31;
        transition: 150ms;
    }
`

function Footer() {
    return(
        <>
            <StyleFooter>
                <h1>Contatos</h1>
                <p><span>Email:</span> gabrielfurlaneti@gmail.com</p>
                <a rel='noreferrer' href="https://github.com/DabGias" target={"_blank"}>🐙 GitHub 🐙</a>
                <a rel='noreferrer' href="https://www.linkedin.com/in/gabrielfurlaneti" target={"_blank"}>👔 LinkedIn 👔</a>
            </StyleFooter>
        </>
    )
}

export default Footer