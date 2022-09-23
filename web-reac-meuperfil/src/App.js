import logo from './foto-perfil.jfif';
import './App.css';

function App() {
  return (
    <section className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <section className="perfil-descricao">
        <div>

          <h1>Dadados Pessoais</h1>
          <p1><strong>Nome:</strong> João Pedro Frediani</p1><br></br>
          <p2><strong>RA:</strong> G2212F0</p2><br></br>

        </div>

        <div>

          <h1>Formação</h1>
          <p1><strong>Ensino:</strong> Ensino Superior - Análise e desenvolvimento de sistemas/UNIP</p1><br></br>
          <h1>Cursos</h1>
          <p2><strong className="tracos">-</strong> Suporte em TI Google - Coursera</p2><br></br>
          <p3><strong className="tracos">-</strong> Web desenvolvimento - Alura</p3><br></br>
          <p4><strong className="tracos">-</strong> Manut. em computadores - Senai</p4><br></br>
          <p5><strong className="tracos">-</strong> Manut. em computadores - Senai</p5><br></br>

        </div>

        <div>
        <h1>Experiências</h1>
          <p1><strong className="tracos">-</strong> Suporte em TI - Katel Magazine</p1><br></br>
          <p2><strong className="tracos">-</strong> Vendedor de Info. - Kalunga</p2><br></br>
          <p3><strong className="tracos">-</strong> Dev. Front-end - ModalGR</p3><br></br>
        </div>

        <div>
        <h1>Projetos</h1>
          <p1><strong className="tracos">-</strong> EM BREVE</p1><br></br>
        </div>
      </section>
      </div>
    </section>
  );
}

export default App;
