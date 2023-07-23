import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/festures/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-screen gap-10">

      <button onClick={() => dispatch(increment())}>Plus</button>

      <h1>{count}</h1>

      <button onClick={() => dispatch(decrement())}>Minus</button>

    </div>
  );
}

export default App;
