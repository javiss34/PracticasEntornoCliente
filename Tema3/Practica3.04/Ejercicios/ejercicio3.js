"use strict";
export const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];


export const insertarUsuario = (nuevoUsuario) => {
  return [...usuarios,nuevoUsuario]; //De esta forma crea una copia de usuarios sin modificar el original.
}

export const mayoresDeEdad = (usuarios) => {
  return usuarios.filter(usuario => usuario.preferencias.edad>=18);
}

export const filtrarCorreoYahoo = (usuarios) => {
  return usuarios.filter(usuario => usuario.contacto.correoelectronico.includes("@yahoo"));

}

export const filtrarTemaClaroMayorEdadYEspañoles = (usuarios) => {
  //Convierto las cadenas de texto en minúsculas por si el usuario pone Claro, España o EsPaÑa.
  return usuarios.filter(usuario => usuario.preferencias.tema.toLowerCase() === "claro" 
  && usuario.preferencias.edad>=18 
  && usuario.contacto.direccion.pais.toLowerCase() === "españa");
}

export const filtrarPorFaltaDatos = (usuarios) => {
  return usuarios.filter(usuario => {
    //Creo un array con las propiedades de cada objeto
    let valores = [usuario.nombre, 
      ...Object.values(usuario.preferencias ),//Con Object.values() convierto los valores de los objetos en un array.
      ...Object.values(usuario.contacto ),
      ...Object.values(usuario.contacto?.direccion)];//Con el encadenamiento opcional si contacto no existe devuelve undefined.
    return valores.some(valor => valor === "" || valor === null);//Si algun valor del array es nulo o cadena vacía dice true y devuelve el usuario
  });
}

export const añadirApellidos = (usuarios) => {
  return usuarios.map(usuario => ({
    ...usuario, //Copia todo el objet usuario 
    apellidos: "No indicado" //Añade la propiedad apellidos con "No indicado" como defecto.
  }));
}

export const añadirCodigoADireccion = (usuarios) => {
  //En este caso tenemos que ir copiando parte por parte del objeto ya que tenemos que añadir codigo en el objeto dirección.
  return usuarios.map(usuario => ({
    ...usuario,
    contacto: {
      ...usuario.contacto,
      direccion: {
        ...usuario.contacto.direccion,
        codigo: "00000"
      }
    }
  }));
}