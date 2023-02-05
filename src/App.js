import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Part1 from './components/part1/part1';
import Part2 from './components/part2/part2';
import Part3 from './components/part3/part3';
import Part4 from './components/part4/part4';
import Part5 from './components/part5/part5';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Part1></Part1>
      <Part2></Part2>
      <Part3></Part3>
      <Part4></Part4>
      <Part5></Part5>
    </div>
  );
}

export default App;
