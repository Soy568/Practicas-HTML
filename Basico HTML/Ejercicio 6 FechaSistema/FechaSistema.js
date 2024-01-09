function FechaSistema() {
    meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    data = new Date();
    index = data.getMonth();
    diaSemana = new Array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");

    indexday = data.getDay();
    if(indexday == 0)
        indexday = 7;
        any = data.getYear();

    if(any < 1900)
    any = 1900 + any;

    document.write(diaSemana[indexday-1]+" , "+''+data.getDay()+" / "+meses[index]+" / "+any);
};