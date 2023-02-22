import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras  from "./palavras";

export default function App() {

  const [underlines, setUnderlines] = useState("");
  const [botoesHabilitados, setBotoesHabilitados] = useState(false);


  const escolherPalavra = () => {
    const randomPalavras = palavras[Math.floor(Math.random() * palavras.length)];
    const underlinesString = " _ ".repeat(randomPalavras.length);
    setUnderlines(underlinesString);
    setBotoesHabilitados(true);
  }

  return (
    <div>
      <Jogo 
        escolherPalavra={escolherPalavra} 
        underlines={underlines} 
      />
      <Letras 
        botoesHabilitados={botoesHabilitados}
      />
    </div>
  );
}