//Code 01 : Composant Fonctionnel avec Props

import React from 'react';

// 1. Définir une interface pour les props
interface GreetingProps {
  name: string;
}

// 2. Utiliser l'interface dans le composant
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
