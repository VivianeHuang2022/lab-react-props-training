function Random({ min, max }) {
    // Calculate a random integer between min and max (inclusive)
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return (
      <div>
        Random value between {min} and {max} =&gt; {randomValue}
      </div>
    );
  }
  export default Random;
  