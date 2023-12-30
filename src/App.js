const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const arrayOfPets = ['a','b','c','d',]

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Heidi",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Heidi2",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Heidi3",
      breed: "Husky",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
