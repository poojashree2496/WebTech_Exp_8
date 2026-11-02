import { Link } from "react-router-dom";

const games = ["Valorant", "Call of Duty", "Minecraft", "GTA V"];

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Level Up <span>Together</span></h2>
        <p>Join tournaments, find your squad and climb the leaderboard.</p>
        <Link className="button" to="/register">Register Now</Link>
      </section>
      <div className="grid">
        {games.map((g) => (
          <div className="card small" key={g}>
            <h3>{g}</h3>
            <p>Weekly tournaments and community scrims.</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
