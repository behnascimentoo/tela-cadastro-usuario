import "./style.css";
import Trash from "../../assets/excluir.png";

function Home() {
  const users = [
    {
      id: "3589skjnuj",
      name: "Brenda",
      age: 23,
      email: "belinda@gmail.com",
    },
    {
      id: "2393gkjnuj",
      name: "Arthur",
      age: 27,
      email: "Arthur@gmail.com",
    },
    {
      id: "2994gfgg",
      name: "Braian",
      age: 18,
      email: "braian@gmail.com",
    },
  ];

  return (
    <div className="conteiner">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="Email" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
