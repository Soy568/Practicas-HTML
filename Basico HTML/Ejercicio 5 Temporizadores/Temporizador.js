function InicioSesionUsuario() {
    let hora = new Date();
    let hrs = hora.getHours();
    let min = hora.getMinutes();
    let sec = hora.getSeconds();
    let hoy = new Date();
    let m   = new Array();
    let d   = new Array();
    let an  = hoy.getYear();
    m[0]="Enero";
    m[1]="Febrero";
    m[2]="Marzo";
    m[3]="Abril";
    m[4]="Mayo";
    m[5]="Junio";
    m[6]="Julio";
    m[7]="Agosto";
    m[8]="Septiembre";
    m[9]="Octubre";
    m[10]="Noviembre";
    m[11]="Diciembre";


    /*
    document.write("Coneccion a chat "+hrs+":"+min+":"+sec+"("); 
    document.write(hoy.getDate());
    document.write(" de ");
    document.write(m[hoy.getMonth()]);
    document.write(")");
    */

    document.write("Coneccion a chat "+hrs+":"+min+":"+sec+ " ("+hoy.getDate()+" de "+m[hoy.getMonth()]+")");
}

