import { Layout } from "./components/Layout";
import styled from "styled-components";


const Box = styled.div`
  background-color: #0A5C36;
  padding-top: 5px;
  margin-top: 5px;
  color: white;
`

function App() {
  return (
    <Layout>
        <div>
          <Box>
            <h1>Faça o Login</h1>
          </Box>
          <p>Para acesso a plataforma de logs.</p>
          <label htmlFor="emailInput">
            Email
          </label>
          <input id="emailInput" type="email" />

          <label htmlFor="passwordInput">
            Senha
          </label>
          <input id="passwordInput"  type="password" />


          <button>
            Entrar
          </button>
        </div>
    </Layout>
  );
}

export default App;
