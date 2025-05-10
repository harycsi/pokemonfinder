function leghosszabbSzo(){
    const szavak= ["alma", "banán", "áfonya"];
    let szo = szavak[0];
    for (let index = 1; index < szavak.length; index++) {
       if (szavak[index].length > szo.length) {
            szo = szavak[index];
       }else{}
    }
    console.log(szo);
}

function rovidites(){
    const szavak_2 = ["JavaScript", "Object", "Notation"];
    const kezdoBetu = [];
    for (let index = 0; index < szavak_2.length; index++) {
        kezdoBetu.push(szavak_2[index][0]);
    }
    console.log(kezdoBetu);
}

function osszesString(){
    const emberek = [{nev:"Anna"},{nev:"Béla"}];
    const nevTomb = emberek.map(({nev}) => {return nev})
    console.log(nevTomb.join(', '))
}

function feltetelesKereses(){
    const pontszamok = [{nev:"Anna",pont:78},{nev:"Béla",pont:92}]
    const a  = pontszamok.filter(({pont}) => pont > 80);
        console.log(a)
}

function duplikacio(){
    const szamTomb = new Set ([1,2,2,3,4,4]);
    console.log(Array.from(szamTomb));
}

function leggyakoribbSzam(){
    const tomb = [1,1,2,3,3,3,4];
    
}

leghosszabbSzo();
rovidites();
osszesString();
feltetelesKereses();
duplikacio();
leggyakoribbSzam();