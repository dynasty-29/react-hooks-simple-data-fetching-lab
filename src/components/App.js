// create your App component here
import React, {useState, useEffect} from "react";

function App() {
  const [pic, setPic] = useState(null);
  const[isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((data) => {
        setPic(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <img src={pic} alt="A Random Dog" />
  );
}
export default App;
