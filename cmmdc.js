function write_cmmdc(id_container, id_rezultat) {
    var sir_numere = document.getElementById(id_container).value,
        obiect_rezultat = document.getElementById(id_rezultat);
        
    var arr_numere = sir_numere.replace(/\D/mg, ' ').split(/\s+/); 
    
    //var rezultat = get_cmmdc(arr_numere); 
    obiect_rezultat.innerHTML = get_cmmdc(arr_numere);
}

function get_cmmdc(T) { // T referă un tablou de numere

    return divide(0, T.length - 1); // determină CMMDC folosind "divide et impera"

    function divide(p, q) { // CMMDC-ul numerelor din secvenţa T[p], ..., T[q]
        var m, d1, d2;
        // m = mijlocul secvenţei p-q 
        // d1, d2 = CMMDC pentru prima şi a doua jumătate a secvenţei

        if(q - p <= 1) return cmmdc(T[p], T[q]);

        m = (p+q) >> 1; // deplasare la dreapta cu 1 bit (împărţire întreagă la 2)
        d1 = divide(p, m); // CMMDC pentru primul subtablou, apoi pentru al doilea
        d2 = divide(m+1, q);
        return cmmdc(d1, d2); // CMMDC-ul celor două valori obţinute pe subtablouri
    };
    
    function cmmdc(a, b) { // varianta clasică (Euclid)
        while(b) {
            var t = b;
            b = a % b;
            a = t;
        }
        return a;
    };
};


