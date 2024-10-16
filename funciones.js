let a =0;

const like = () => {
    a = a + 1;
    document.getElementById("megusta").innerHTML = a + " me gusta";
    document.getElementById("corazon").style.color="red";
}


const fotos = [
    {usuario: "Josefina Flores", imgusuario: "usuario1.jpg", imagen: "zapatilas1.jpg", megustas: "0", comentrios: "0"},
    {usuario: "Mia Cerrudo", imgusuario: "usuario2.jpg", imagen: "vans.jpg", megustas: "0", comentrios: "0"},
    {usuario: "Eugenia Codaro", imgusuario: "usuario3.jpg", imagen: "adidas.jpg", megustas: "0", comentrios: "0"}
]

function cargarfotos(){
    for(const foto of fotos){
        let contenedor = document.createElement("div")
        contenedor.innerHTML= ` <div id="boxfoto">
                                    <div id="boxusuario">
                                        <img src=${foto.imgusuario} alt="" id="imgusuario">
                                        <h2>${foto.usuario}</h2>
                                    </div>
                                    <img src= ${foto.imagen} alt="foto de paisaje" id="imgfoto">
                                    <div id="boxbotones">
                                        <button onclick="like()">
                                            <span class="material-symbols-outlined" id="corazon">
                                            favorite
                                            </span>
                                        </button>
                                        <button>
                                            <span class="material-symbols-outlined">
                                                chat_bubble
                                            </span>
                                        </button>
                                        <button>
                                            <span class="material-symbols-outlined">
                                                send
                                            </span>
                                        </button>
                                    </div>
                                    <div class="boxmegusta">
                                        <p id="megusta">O me gusta</p>
                                    </div>
                                </div>`;
        document.body.appendChild(contenedor)
    }
}

cargarfotos()