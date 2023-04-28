import './App.css';
import { Button, Title } from './lib';

function App() {
  return (
    <div className="showcase">
      <h1>Kads Design System Components</h1>

      <section className="showcase-section">
        <h2>Button</h2>

        <div className="showcase-component">
          <Button>Go Home</Button>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Title</h2>

        <div className="showcase-component">
          <Title order="1">Heading #1 Level</Title>
          <Title order="2">Heading #2 Level</Title>
          <Title order="3">Heading #3 Level</Title>
          <Title order="4">Heading #4 Level</Title>
          <Title order="5">Heading #5 Level</Title>
          <Title order="6">Heading #6 Level</Title>
        </div>
      </section>
    </div>
  );
}

export default App;
