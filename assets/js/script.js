const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "imagen1.webp",
        descripcion:
            "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor en la Montaña",
        src: "imagen10.jpg",
        descripcion:
            "Este apartamento acogedor está perfectamente situado con impresionantes vistas a la ciudad",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        banos: 2,
        costo: 3200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "imagen3.jpg",
        descripcion:
            "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 2,
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Gran Casa en zona Residencial",
        src: "imagen7.jpg",
        descripcion:
            "Casa en zona residencial",
        ubicacion: "7310 Andalien, Santiago, Chile",
        habitaciones: 4,
        banos: 4,
        costo: 6500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Casa con Piscina",
        src: "imagen8.jpg",
        descripcion: "Casa para familia numerosa ",
        ubicacion: "Chicureo, Comuna de Colina",
        habitaciones: 3,
        banos: 2,
        costo: 8000,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Departamento con vista al Mar",
        src: "imagen9.jpg",
        descripcion: "Departamento de lujo con vista al mar",
        ubicacion: "San Alfonso del Mar, Algarrobo",
        habitaciones: 3,
        banos: 2,
        costo: 7000,
        smoke: false,
        pets: true,
    },
];

const propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "imagen4.jpg",
        descripcion:
            "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 912348",
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "imagen5.jpg",
        descripcion:
            "Este hermoso apartamento ofrece una vista impresionante al mar.",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "imagen6.jpg",
        descripcion:
            "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Casa Rustica",
        src: "imagen10.jpg",
        descripcion:
            "Preciosa casa en gran terreno plano",
        ubicacion: "Marchihue, sexta region",
        habitaciones: 2,
        banos: 1,
        costo: 2800,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Departamento con vista a la ciudad",
        src: "imagen11.jpg",
        descripcion:
            "Departamento ubicado en el centro de la Ciudad",
        ubicacion: "Changos #2233",
        habitaciones: 2,
        banos: 1,
        costo: 3500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Departamento Duplex",
        src: "imagen12.jpg",
        descripcion:
            "Departamento Duplex",
        ubicacion: "Alvaro Casanova, La Reina, Santiago",
        habitaciones: 4,
        banos: 3,
        costo: 5800,
        smoke: false,
        pets: false,
    },
];


const getCardsTemplate = (data, numberOfCards = data.length) => {
    let template = "";

    for (let i = 0; i < numberOfCards; i++) {
        template += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="./assets/img/${data[i].src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="cardd-title">
                        ${data[i].nombre}
                    </h5>
                    <p class="cardd-text">
                        ${data[i].descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        ${data[i].ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${data[i].habitaciones
            } Habitaciones |
                        <i class="fas fa-bath"></i> ${data[i].banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${data[i].costo}</p>
                    <p class="${data[i].smoke ? "text-success" : "text-danger"
            }">
                        ${data[i].smoke
                ? '<i class="fas fa-smoking"></i> Permitido fumar'
                : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
            }
                    </p>
                    <p class="${data[i].pets ? "text-success" : "text-danger"}">
                        ${data[i].pets
                ? '<i class="fas fa-paw"></i> Mascotas permitidas'
                : '<i class="fas fa-ban"></i> No se permiten mascotas'
            }

                    </p>
                </div>
            </div>
        </div>
        `;
    }

    return template;
};


const sellContainer = document.querySelector("#venta .row");
const rentContainer = document.querySelector("#alquiler .row");


const currentPage = location.pathname;

switch (currentPage) {
    case "/index.html":
        rentContainer.innerHTML = getCardsTemplate(propiedades_alquiler, 3);
        sellContainer.innerHTML = getCardsTemplate(propiedades_venta, 3);
        break;

    case "/propiedades_alquiler.html":
        rentContainer.innerHTML = getCardsTemplate(propiedades_alquiler);
        break;

    case "/propiedades_venta.html":
        sellContainer.innerHTML = getCardsTemplate(propiedades_venta);
        break;

    default:
        console.error("Página no reconocida:", currentPage);
        break;
}