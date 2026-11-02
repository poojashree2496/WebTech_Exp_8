import { useState } from "react";

const labels = { name: "Name", regno: "Register No", dept: "Department", year: "Year", game: "Favourite Game" };

function Players() {
  const [player, setPlayer] = useState({
    name: "Pooja Shree", regno: "URK24CS1277", dept: "CSE", year: "2", game: "Valorant", rank: "Diamond"
  });
  const [list, setList] = useState([]);
  const update = (e) => setPlayer({ ...player, [e.target.name]: e.target.value });

  return (
    <div className="players">
      <div className="card">
        <h2>Student Player Details</h2>
        {Object.keys(labels).map((f) => (
          <div className="field" key={f}>
            <label>{labels[f]}</label>
            <input name={f} value={player[f]} onChange={update} />
          </div>
        ))}
        <label>Rank</label>
        <select name="rank" value={player.rank} onChange={update}>
          {["Bronze", "Silver", "Gold", "Platinum", "Diamond"].map((r) => <option key={r}>{r}</option>)}
        </select>
        <button onClick={() => setList([...list, player])}>Add Player</button>
      </div>
      <div>
        <div className="card profile">
          <div className="avatar">{player.name.charAt(0) || "?"}</div>
          <h2>{player.name || "Player Name"}</h2>
          <p>{player.regno} | {player.dept} - Year {player.year}</p>
          <p>Main Game: <b>{player.game}</b></p>
          <span className={"rank " + player.rank.toLowerCase()}>{player.rank}</span>
        </div>
        {list.length > 0 && (
          <div className="card">
            <h3>Added Players ({list.length})</h3>
            <table>
              <thead><tr><th>Name</th><th>Reg No</th><th>Game</th><th>Rank</th></tr></thead>
              <tbody>
                {list.map((p, i) => (
                  <tr key={i}><td>{p.name}</td><td>{p.regno}</td><td>{p.game}</td><td>{p.rank}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Players;
