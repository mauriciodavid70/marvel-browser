const characters = [
  {
    "id": 1009220,
    "name": "Captain America",
    "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
    "modified": "2020-04-04T19:01:59-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
      "extension": "jpg"
    }
  },
  {
    "id": 1009262,
    "name": "Daredevil",
    "description": "Abandoned by his mother, Matt Murdock was raised by his father, boxer \"Battling Jack\" Murdock, in Hell's Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.",
    "modified": "2020-03-04T16:09:36-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee",
      "extension": "jpg"
    }
  },
  {
    "id": 1009619,
    "name": "Gwen Stacy",
    "description": "Peter Parker's first true love, Gwen Stacy was killed during a rescue attempt by Spider-Man, the guilt from which Peter has never overcome.",
    "modified": "2016-08-19T09:00:14-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/40/4c003ad20ab78",
      "extension": "jpg"
    }
  }
]

function App() {
  return (
    <>
      <h1>Characters</h1>
      {
        characters.map((character, index) => (
          <div key={index}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <img height="75" alt={character.name} src={character.thumbnail.path + '.' + character.thumbnail.extension}></img>
          </div>
        ))
      }
    </>


  );
}

export default App;
