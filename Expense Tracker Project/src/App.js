import Expenses from "./components/Expenses";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "school fee",
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Books",
      amount: 230,
      date: new Date(2021, 2, 22),
    },
    {
      id: "e3",
      title: "House Rent",
      amount: 700,
      date: new Date(2021, 4, 2),
    },
    {
      id: "e4 edited",
      title: "Food",
      amount: 540,
      date: new Date(2021, 5, 5),
    },
  ];
  return (
    <div>
      <h2>lets get started</h2>
      <Expenses item={expenses} />
    </div>
  );
}
export default App;
