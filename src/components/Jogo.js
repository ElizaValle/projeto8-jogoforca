export default function Jogo({ escolherPalavra, letras, imagemForca, palavraAdivinhada, erros}) {
    return (
        <div className="conteudo">
            <div className="forca-btn-palavra">
                <div className="forca">
                    <img src={imagemForca} alt={`Forca ${imagemForca}`} data-test="game-image" />  
                </div>
                <div className="btn-palavra">
                    <div className="btn">
                        <button onClick={escolherPalavra} data-test="choose-word">Escolher Palavra</button>
                    </div>
                    <div className="palavra-sorteada">
                        <span 
                            key={letras} 
                            data-test="word"
                            className={erros >= 6 || (palavraAdivinhada && erros <= 6) ? "#FF0000" : "#27AE60"}
                        >
                                {letras.join(" ")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}