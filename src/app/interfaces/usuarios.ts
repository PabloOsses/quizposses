export interface Usuarios {
    id:number;
    nombre:string;
    apellido:string;
    genero:string;
    pais:string;
    ciudad:string;
}
export const ListaUsuarios:Array<Usuarios>=[
    {
        id:1,
        nombre:"lorenzo ",
        apellido:"mascarpone",
        genero:"hombre",
        pais:"italia",
        ciudad:"genova",
    },
    {
        id:2,
        nombre:"Olga ",
        apellido:"romanov",
        genero:"mujer",
        pais:"rusia",
        ciudad:"moscu"
    },
    {
        id:3,
        nombre:"Boris ",
        apellido:"toddbringer",
        genero:"hombre",
        pais:"alemania",
        ciudad:"midland"
    }
];
