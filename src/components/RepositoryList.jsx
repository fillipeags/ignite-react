const repositoryName = "unform2";

export function RepositoryLIst(){
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositório</a>
        </li>
        
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositório</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
}