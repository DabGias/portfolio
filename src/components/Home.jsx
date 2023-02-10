import styled from "styled-components"

const StyleMain = styled.main `
    width: 80%;
    margin: 20px auto;

    h1 {
        text-align: center;
        color: #d9d9d9;
        margin-bottom: 20px;
    }

    h1 span {
        color: #627dff;
    }

    h2 {
        text-align: center;
        color: #d9d9d9;
    }

    h2 span {
        color: #57ad57;
    }

    .info {
        display: flex;
        justify-content: space-between;
        margin: 40px auto;
        color: #d9d9d9;
    }

    .info h2 {
        color: #627dff;
        margin-bottom: 20px;
    }

    .info .hist p, .objtvs p {
        margin: 0px 20px;
        text-align: justify;
        text-indent: 30px;
    }
`

function Home() {
    return(
        <>
            <StyleMain>
                <h1>Meu nome é <span>Gabriel Dias</span></h1>

                <h2>E meu objetivo com a criação desse portfolio é contar minha história e mostrar as minhas capacidades, habilidades e dotes na área de <span>programação</span> e <span>web design</span>!</h2>

                <section className="info">
                    <div className="hist">
                        <h2>Minha história</h2>

                        <p>Desde criança eu já possuia um certo contato com computadores, nada profundo, mas o suficinete para gerar interesse e uma certa habilidade. Durante minha adolecência mantive o contato com computadores, porém tinha um grande interesse e tirava boas notas em biologia, logo acreditei que essa era uma boa profissão, mas durante os últimos anos do meu ensino médio comecei um tecnólogo na área de manutenção e suporte em informática, e apesar do curso ser focado em hardware, o curso também abordava programação, porém após algumas semanas depois do início do tecnólogo a pandemia chegou e acabou com o curso que era totalmente baseado em prática e atividades laboratoriais, logo as únicas matérias que se mantiveram inalteradas foram as que abordavam programação, e nessas eu vi uma oportunidade de seguir a carreira que sigo hoje.</p>
                    </div>
                    <div className="objtvs">
                        <h2>Meus objetivos</h2>

                        <p>Meu principal objetivo é poder crescer como profissional e como pessoa, sempre aprendendo e buscando melhorar, mas também busco o equilíbrio, apesar de querer melhorar a todo momento, acredito que não se deve apenas seguir uma trilha sem se questionar ou analisar os seus arredores. No mercado de trabalho espero poder aplicar meus conhecimentos de forma consistente, e se cometer algums erros, aprender com eles. Também procuro ser dinâmico, mantendo o conhecimento em dia e a mente aberta para novas possibilidades de soluções ou abordagens.</p>
                    </div>
                </section>
            </StyleMain>
        </>
    )
}

export default Home