//import { useState } from "react"
import forca0 from "../assets/forca0.png"
/* import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png" */

export default function Jogo({ escolherPalavra, underlines, erros }) {

    
    return (
        <div className="conteudo">
            <div className="forca-btn-palavra">
                <div className="forca">
                    <img src={forca0} alt="forca" />  
                </div>
                <div className="btn-palavra">
                    <div className="btn">
                        <button onClick={escolherPalavra}>Escolher Palavra</button>
                    </div>
                    <div className="palavra-secreta">
                        {underlines}
                    </div>
                </div>
            </div>
        </div>
    );
}



