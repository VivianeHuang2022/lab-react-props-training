function Greetings({ lang, children }) {
    const greetings = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour'
    };
  
    // Get the greeting based on the provided language
    const greeting = greetings[lang] || 'Hello'; // Default to 'Hello' if lang not found
  
    return (
      <div>
        {greeting} {children}
      </div>
    );
  }
  
  export default Greetings;