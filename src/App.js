import "./styles.css";
import Nav from "./components/Nav";
// function App() {
//   return (
//     <div className="App">
//       <h1>DevTown</h1>
//     </div>
//   );
// }

const App = () => {
  const name = "Hello World";
  // React fragments
  return (
    <>
      <Nav />
      <h1>{name}</h1>
      <span style={{ color: "red" }}>
        lorem dsjknjfnv fnadjvnkdjfvnjd fdnkjvdnj
      </span>
    </>
  );
};

export default App;
