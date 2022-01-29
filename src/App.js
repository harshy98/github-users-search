import "./styles.css";
import { useState, useEffect } from "react";
function App({ user }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userid, setUserid] = useState("");
  const input = (event) => {
    setUserid(event.target.value);
  };
  useEffect(() => {
    fetch(`https://api.github.com/users/${userid}`)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userid]);
  console.log(data);
  if (loading) return "Please wait, loading...";
  else {
    return (
      <div className="App">
        <input type="text" onChange={input} />
        <h1>Name:{data.name}</h1>
        <p>Location:{data.location}</p>
        <p>Followers:{data.followers}</p>
        <p>Following:{data.following}</p>
      </div>
    );
  }
}
export default App;
