const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({ botoesHabilitados }) {
    return (
        <div className="letras">
            {alfabeto.map((letra, index) => (
                <button 
                    key={index} 
                    disabled={!botoesHabilitados} 
                    style={{backgroundColor: botoesHabilitados ? "#E1ECF4" : "#798A9F"}}
                >
                {letra}
                </button>
            ))}
        </div>
    );
}