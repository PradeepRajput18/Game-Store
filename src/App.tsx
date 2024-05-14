import Message from './Message'
import ListGroup from "./Components/ListGroup";

function App(){
  // return <div> <Message></Message></div>
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Mumbai"];

  const handleSelectItem =(item:string)=>{
    console.log(item);
  }
  return <div><ListGroup items={cities} heading='cities' onSelectItem={handleSelectItem}/></div>;
}


export default App;