import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
        <div>
          <h1>Logging Service</h1>
          <Card  
            id={1} 
            ip= 'test'
            date = 'test'
            name = 'test'
            type ='test'
            text = 'test'
          />
        </div>
    </Layout>
  );
}

export default App;
