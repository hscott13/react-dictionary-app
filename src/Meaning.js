import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <h3 className="type fst-italic">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <li>
              <p className="definition">{definition.definition}</p>
              <p className="example">{definition.example}</p>
            </li>
          </div>
        );
      })}
    </div>
  );
}
