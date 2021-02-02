import bellatrix from "../images/Bellatrix.jpeg";
import draco from "../images/Draco.jpeg";
import dumbledore from "../images/Dumbledore.jpeg";
import hagrid from "../images/Hagrid.jpeg";
import harry from "../images/Harry.jpeg";
import hermione from "../images/Hermione.jpeg";
import lupin from "../images/Lupin.jpeg";
import ron from "../images/Ron.jpeg";
import sirius from "../images/Sirius.jpeg";
import slughorn from "../images/Slughorn.jpeg";
import snape from "../images/Snape.jpeg";
import voldemort from "../images/Voldemort.jpeg";

const CardImages = (props) => {
  return (
    [
      {
        id: 1,
        clicked: false,
        name: "Bellatrix",
        image: bellatrix,
        backgroundColor: "green"
      },
      {
        id: 2,
        clicked: false,
        name: "Draco",
        image: draco,
        backgroundColor: "red"
      },
      {
        id: 3,
        clicked: false,
        name: "Dumbledore",
        image: dumbledore,
        backgroundColor: "orange"
      },
      {
        id: 4,
        clicked: false,
        name: "Hagrid",
        image: hagrid,
        backgroundColor: "brown"
      },
      {
        id: 5,
        clicked: false,
        name: "Harry",
        image: harry,
        backgroundColor: "blue"
      },
      {
        id: 6,
        clicked: false,
        name: "Hermione",
        image: hermione,
        backgroundColor: "white"
      },
      {
        id: 7,
        clicked: false,
        name: "Lupin",
        image: lupin,
        backgroundColor: "#ddd"
      },
      {
        id: 8,
        clicked: false,
        name: "Ron",
        image: ron,
        backgroundColor: "pink"
      },
      {
        id: 9,
        clicked: false,
        name: "Sirius",
        image: sirius,
        backgroundColor: "yellow"
      },
      {
        id: 10,
        clicked: false,
        name: "Slughorn",
        image: slughorn,
        backgroundColor: "lightblue"
      },
      {
        id: 11,
        clicked: false,
        name: "Snape",
        image: snape,
        backgroundColor: "lightgreen"
      },
      {
        id: 12,
        clicked: false,
        name: "Voldemort",
        image: voldemort,
        backgroundColor: "grey"
      }
    ]
  )
}

export default CardImages;
