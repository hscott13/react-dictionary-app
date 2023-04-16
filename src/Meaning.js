import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <h3 className="type fst-italic">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="meaning" key={index}>
            <li>
              <div className="definition">{definition.definition}</div>
              <div className="example">{definition.example}</div>

              <Synonyms synonyms={definition.synonyms} />
            </li>
          </div>
        );
      })}
    </div>
  );
}
