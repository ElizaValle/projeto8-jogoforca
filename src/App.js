import { useState } from "react";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras  from "./palavras";

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function App() {
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [letras, setLetras] = useState([]); /* estado de array de letras correspondente a palavra adivinhada */
  const [erros, setErros] = useState(0); /* nº de erros do usuário */
  const [botoes, setBotoes] = useState(       /* array de objetos onde cada botão é uma letra */
    alfabeto.map((letra) => ({ letra: letra, habilitado: false }))
  );
  const [imagemForca, setImagemForca] = useState(imagensForca[0]);  
  //const [fimDoJogo, setFimDoJogo] = useState(false);
  //const [resultadoDoJogo, setResultadoDoJogo] = useState("");

  console.log('erros: ', erros);

  /* sorteia palavra aleatória do array palavras[] */
  const escolherPalavra = () => {
    const randomPalavras = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSorteada(randomPalavras);
    setLetras(new Array(randomPalavras.length).fill("_"));
    setBotoes(alfabeto.map((letra) => ({ letra: letra, habilitado: true })));
    setImagemForca(imagemForca);
    //setFimDoJogo(false);
    setErros(0);
  };

  /* função acionada quando usuário clica em um botão de letra */
  const botaoLetra = (letra, index) => {
    const novasLetras = [...letras];  /* cópia do estado de letras */
    let acertou = false;
    for(let i = 0; i < palavraSorteada.length; i++) {
      if(palavraSorteada[i] === letra) {
        novasLetras[i] = letra;
        acertou = true;
      }
    }
    if(acertou) {
      setLetras(novasLetras);
      const novosBotoes = [...botoes];  /* cópia do estado de botões */
      novosBotoes[index].habilitado = false;
      setBotoes(novosBotoes);
    } else {
        const novoNumeroDeErros = erros + 1;
        setErros(novoNumeroDeErros);
        setImagemForca(imagensForca[novoNumeroDeErros]);
      }
    };

    const palavraAdivinhada = letras.every((letra) => letra !== "_");

   /*  const fimJogo = (totalDeErros) => {
      if(totalDeErros >= 6) {
        setLetras(palavraSorteada);
        setResultadoDoJogo("perdeu");
        const novosBotoes = [...botoes];  
        novosBotoes.habilitado = false;
        escolherPalavra();
      } else if(!letras.includes("_")) {
        setResultadoDoJogo("ganhou");
        const novosBotoes = [...botoes];
        novosBotoes.habilitado = false;
        escolherPalavra();
      }
    }; */

  return (
    <div>
      <Jogo 
        escolherPalavra={escolherPalavra} 
        letras={letras}
        imagemForca={imagemForca}
        //fimDoJogo={fimDoJogo}
        erros={erros}
        palavraAdivinhada={palavraAdivinhada}
      />
      <Letras 
        botaoLetra={botaoLetra}
        botoes={botoes}
      />
    </div>
  );
}