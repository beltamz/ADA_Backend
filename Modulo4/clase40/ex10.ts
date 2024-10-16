/*Ejercicio 10: Uso de enum para niveles de acceso
1. Declara un enum llamado NivelesDeAcceso con los valores: Admin,
Usuario, Invitado.
2. Crea una función que reciba un nivel de acceso y devuelva un mensaje
indicando el tipo de permisos disponibles para ese nivel.
3. Usa el enum para llamar a la función con el nivel Usuario y muestra el
resultado por consola. */
export enum NivelesDeAcceso{
    Admin,
    Usuario,
    Invitado
};

tipoDePermisosDisponibles(NivelesDeAcceso.Usuario);

function tipoDePermisosDisponibles(nivel:NivelesDeAcceso): void {
    switch (nivel) {
        case NivelesDeAcceso.Admin:
            console.log(`El administrador tiene el más alto nivel de permisos. Puede realizar cualquier acción dentro del sistema operativo: \n~Crear/ gestionar cuentas de usuario e invitados\n~Gestionar actualizaciones de sistemas\n~Acceder y modificar cualquier archivo`);
        break;
        case NivelesDeAcceso.Usuario:
            console.log(`El usuario tiene permisos limitados y solo puede realizar tareas que afecten su propia cuenta. Puede: \n~Instalar software para su cuenta\n~Modificar su perfil\n~Guardar y eliminar archivos propios`);
        break;
        case NivelesDeAcceso.Invitado:
            console.log(`El invitado tiene el nivel más bajo de permisos y, en general, no puede realizar cambios permanentes en el sistema:\n~Puede ejecutar programas basicos y navegar por la web\n~No puede instalar ni desinstalar software\n~Su cuenta generalmente es temporal, y sus datos se eliminan después de cerrar sesión`);        
        default:
            console.log("Opcion no valida");  
        break;
    };
};
