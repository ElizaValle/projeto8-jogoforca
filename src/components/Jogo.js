export default function Jogo({ escolherPalavra, letras, imagemForca }) {
    return (
        <div className="conteudo">
            <div className="forca-btn-palavra">
                <div className="forca">
                    <img src={imagemForca} alt={`Forca ${imagemForca}`} />  
                </div>
                <div className="btn-palavra">
                    <div className="btn">
                        <button onClick={escolherPalavra}>Escolher Palavra</button>
                    </div>
                    <div className="palavra-secreta">
                        {letras.join(" ")}
                    </div>
                </div>
            </div>
        </div>
    );
}