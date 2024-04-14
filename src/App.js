import bjp from "./public/bjp.jpg";
import inc from "./public/inc.png";
import dmk from "./public/dmk.jpg";
import cpm from "./public/cpm.png";
import { useState } from "react";
function App() {
  let partyNames = {
    bjp: "Bharatiya Janatha Party",
    inc: "Indian National Congress",
    dmk: "Dravida Munnetra Kazhagam",
    cpm: "Communist Party Of India",
  };
  const [votes, setVotes] = useState({
    bjp: 0,
    inc: 0,
    cpm: 0,
    dmk: 0,
  });

  const handleVote = (party) => {
    setVotes({ ...votes, [party]: votes[party] + 1 });
    alert("Thank you for exercising your right to vote");
  };

  const showResults = (e) => {
    e.preventDefault();
    let inputPassword = prompt("Please enter admin password", "admin");
    if (inputPassword !== "admin") {
      return;
    }
    let parties = Object.keys(votes);
    let winner = parties[0];
    for (let party of parties) {
      console.log(party);
      if (votes[party] > votes[winner]) {
        winner = party;
      }
    }
    alert(`${partyNames[winner]} is the winner with ${votes[winner]} votes`);
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="text-center mb-3">
        <strong> Voting App</strong>
      </h2>
      <div className="d-flex flex-row ">
        <div class="card me-5" style={{ width: "18rem" }}>
          <img
            src={bjp}
            class="card-img-top"
            alt="..."
            width={100}
            height={250}
          />
          <div class="card-body d-flex align-items-center flex-column">
            <h5 class="card-title">BJP</h5>
            <p class="card-text">Bharatiya Janatha Party</p>
            <button
              href="/"
              class="btn btn-primary w-100"
              onClick={(e) => handleVote("bjp")}
            >
              Vote
            </button>
          </div>
        </div>

        <div class="card ms-5" style={{ width: "18rem" }}>
          <img
            src={inc}
            class="card-img-top"
            alt="..."
            width={100}
            height={250}
          />
          <div class="card-body d-flex align-items-center flex-column">
            <h5 class="card-title">INC</h5>
            <p class="card-text">Indian National Congress</p>
            <button
              href="/"
              class="btn btn-primary w-100"
              onClick={(e) => handleVote("inc")}
            >
              Vote
            </button>
          </div>
        </div>

        <div class="card ms-5" style={{ width: "18rem" }}>
          <img
            src={cpm}
            class="card-img-top"
            alt="..."
            width={100}
            height={250}
          />
          <div class="card-body d-flex align-items-center flex-column">
            <h5 class="card-title">CPI</h5>
            <p class="card-text">Communist Party Of India</p>
            <button
              href="/"
              class="btn btn-primary w-100"
              onClick={(e) => handleVote("cpm")}
            >
              Vote
            </button>
          </div>
        </div>

        <div class="card ms-5" style={{ width: "18rem" }}>
          <img
            src={dmk}
            class="card-img-top"
            alt="..."
            width={100}
            height={250}
          />
          <div class="card-body d-flex align-items-center flex-column">
            <h5 class="card-title">DMK</h5>
            <p class="card-text">Dravida Munnetra Kazhagam</p>
            <button
              href="/"
              class="btn btn-primary w-100"
              onClick={(e) => handleVote("dmk")}
            >
              Vote
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-success w-25" onClick={showResults}>
          Results
        </button>
      </div>
    </div>
  );
}

export default App;
