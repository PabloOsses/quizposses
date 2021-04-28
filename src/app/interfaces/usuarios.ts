export interface Usuarios {
    
    nombre:string;
    apellido:string;
    genero:string;
    pais:string;
    ciudad:string;
}
export const ListaUsuarios:Array<Usuarios>=[
    {
        
        nombre:"Lorenzo ",
        apellido:"Mascarpone",
        genero:"hombre",
        pais:"Italia",
        ciudad:"Genova",
    },
    {
        
        nombre:"Olga ",
        apellido:"Romanov",
        genero:"mujer",
        pais:"Rusia",
        ciudad:"Moscu"
    },
    {
       
        nombre:"Boris ",
        apellido:"Toddbringer",
        genero:"hombre",
        pais:"Alemania",
        ciudad:"Midland"
    }
];
