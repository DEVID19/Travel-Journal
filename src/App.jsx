import Content from "./components/Content";
import Header from "./components/Header";
import data from "./Data/data.js";
function App() {
  const DataContent = data.map((data) => {
    return <Content key={data.id} data={data} />;
  });

  return (
    <>
      <Header />
      <main>{DataContent}</main>
    </>
  );
}

export default App;
