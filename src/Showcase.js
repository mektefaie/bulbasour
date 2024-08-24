import pic from "./images/bulbasaur.jpg";
import "./Showcase.css";
function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };

  const imageStyle = {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <div className="main">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={pic} style={imageStyle} alt="favPokemon" />
      <h2>
        Bulbasaur's type is{" "}
        <span className="p-type">{pokeCharacteristics.type}</span>
        and one of their moves is{" "}
        <span className="p-move">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
