import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { increament , decreament , increamentby30 } from './redux/Slice/counterSlice';

// to use the value of the store is useSelector;
// to update the value of the store is useDispatch;

function App() {
  const count = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <center>
        <button onClick={()=>dispatch(increament())}>
          +
        </button>
        {count.value ? count.value : count}
        <button onClick={()=>dispatch(decreament())}>
          -
        </button>
        <button onClick={()=>dispatch(increamentby30({
          content : "increamented by 30",
          value : 30
        }))}>
          increament by 30
        </button>

      </center>
    </div>
  );
}

export default App;
