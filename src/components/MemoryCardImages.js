import bellatrix from "../images/Bellatrix.jpeg";
import draco from "../images/Draco.jpeg";
import dumbledore from "../images/Dumbledore.jpeg";
import hagrid from "../images/Hagrid.jpeg";
// import harry from "../images/Harry.jpeg";
// import hermione from "../images/Hermione.jpeg";
// import lupin from "../images/Lupin.jpeg";
// import ron from "../images/Ron.jpeg";
// import sirius from "../images/Sirius.jpeg";
// import slughorn from "../images/Slughorn.jpeg";
// import snape from "../images/Snape.jpeg";
// import voldemort from "../images/Voldemort.jpeg";

const CardImages = (props) => {
  return (
    [
      {
        id: 1,
        clicked: false,
        name: "Bellatrix",
        image: bellatrix
      },
      {
        id: 2,
        clicked: false,
        name: "Draco",
        image: draco
      },
      {
        id: 3,
        clicked: false,
        name: "Dumbledore",
        image: dumbledore
      },
      {
        id: 4,
        clicked: false,
        name: "Hagrid",
        image: hagrid
      },
      // {
      //   id: 5,
      //   clicked: false,
      //   name: "Harry",
      //   image: harry
      // },
      // {
      //   id: 6,
      //   clicked: false,
      //   name: "Hermione",
      //   image: hermione
      // },
      // {
      //   id: 7,
      //   clicked: false,
      //   name: "Lupin",
      //   image: lupin
      // },
      // {
      //   id: 8,
      //   clicked: false,
      //   name: "Ron",
      //   image: ron
      // },
      // {
      //   id: 9,
      //   clicked: false,
      //   name: "Sirius",
      //   image: sirius
      // },
      // {
      //   id: 10,
      //   clicked: false,
      //   name: "Slughorn",
      //   image: slughorn
      // },
      // {
      //   id: 11,
      //   clicked: false,
      //   name: "Snape",
      //   image: snape
      // },
      // {
      //   id: 12,
      //   clicked: false,
      //   name: "Voldemort",
      //   image: voldemort
      // }
    ]
  )
}

export default CardImages;
