export default function Letras({ botaoLetra, botoes}) {
    return (
        <div className="letras">
            {botoes.map((botao, index) => (
                <button
                key={index}
                disabled={!botao.habilitado}
                style={{ backgroundColor: botao.habilitado ? "#E1ECF4" : "#798A9F" }}
                className={ botao.habilitado ? 'letra-habilitada' : 'letra-desabilitada' }
                onClick={() => botaoLetra(botao.letra, index)}
                >
                    {botao.letra}
                </button>
            ))}
        </div>
    );
}