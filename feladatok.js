
const users = [
    { userId: 1, name: "Alice", age: 29, email: "alice@example.com", purchases: [120, 340, 560] },
    { userId: 2, name: "Bob", age: 35, email: "bob@example.com", purchases: [45, 67, 89] },
    { userId: 3, name: "Charlie", age: 40, email: "charlie@example.com", purchases: [1200, 2300, 150] },
    { userId: 4, name: "David", age: 28, email: "david@example.com", purchases: [500, 200] },
    { userId: 5, name: "Emma", age: 32, email: "emma@example.com", purchases: [150, 330, 780] },
    { userId: 6, name: "Frank", age: 44, email: "frank@example.com", purchases: [90, 120, 50] },
    { userId: 7, name: "Grace", age: 38, email: "grace@example.com", purchases: [700, 450] },
    { userId: 8, name: "Helen", age: 25, email: "helen@example.com", purchases: [300, 500, 600] },
    { userId: 9, name: "Ian", age: 31, email: "ian@example.com", purchases: [220, 330, 440] },
    { userId: 10, name: "Julia", age: 37, email: "julia@example.com", purchases: [1500, 1200, 800] }
];


// 1. Összes vásárlás összegzése
// Írj egy függvényt, amely kiszámítja az összes felhasználó összes vásárlásának összegét!
// Kimenet példa:
// 11,856

function feladat_1_totalPurchases(){
    let osszes = 0;
    let vasarlas  = users.map(({purchases}) => {return purchases})
    for (let index = 0; index < vasarlas.length; index++) {
        const element = vasarlas[index];
        for (let index = 0; index < element.length; index++) {
            osszes += element[index]
        }
    }   
    console.log(osszes)
}

// 2. Legidősebb és legfiatalabb felhasználó keresése
// Határozd meg a legidősebb és legfiatalabb felhasználót az életkoruk alapján!
// Kimenet példa:
// Legidősebb: Frank, Legfiatalabb: Helen


function feladat_2_findOldestAndYoungest(){
    let kor = users.map(({age}) => {return age})
    let legFiatalabb= kor[0];
    let legIdosebb = kor[0];
    let kiAzaFiatal = 0;
    let kiAzazIdos = 0;
    for (let index = 0; index < kor.length; index++) {
        if (kor[index] < legFiatalabb) {
            legFiatalabb = kor[index]
            kiAzaFiatal = index
        } else if(kor[index] > legIdosebb) {
            legIdosebb = kor[index]
            kiAzazIdos = index
        }
    }
    console.log(users[kiAzaFiatal].name, users[kiAzazIdos].name)
        
}

// 3. Felhasználó keresése e-mail alapján
// Feladat: Készíts egy függvényt, amely megadott e-mail alapján visszaadja a hozzá tartozó felhasználót!
// Kimenet példa:
// { userId: 2, name: "Bob", age: 35, email: "bob@example.com", purchases: [45, 67, 89] }

function feladat_3_findUserByEmail(mail){
    const felhasznalo  = users.filter(({email}) => email == mail);
    console.log(felhasznalo)
}

// 4. Felhasználók listájának szűrése életkor alapján
// Írj egy függvényt, amely visszaadja azokat a felhasználókat, akik egy meghatározott életkor felett vannak!
// Kimenet példa:
// [{userId: 2, name: "Bob", ...}, {userId: 3, name: "Charlie", ...}, ...]

function feladat_4_filterUsersByAge(kor){
    const felhasznalo  = users.filter(({age}) => age > kor);
    console.log(felhasznalo)
}

// 5. A legtöbb értékben vásárló felhasználó keresése
// Feladat: Találd meg azt a felhasználót, akinek a vásárlásainak összegzése a legnagyobb!
// Kimenet példa:
// { userId: 10, name: "Julia", purchases: [1500, 1200, 800], ... }

function feladat_5_fingBiggestPurchaseUser(){
    let maxOsszeg = 0;
    let osszes = 0;
    let kiAz = 0;
    let vasarlas  = users.map(({purchases}) => {return purchases})
    for (let index = 0; index < vasarlas.length; index++) {
        const element = vasarlas[index];
        for (let index = 0; index < element.length; index++) {
            osszes += element[index]
        }
        if (osszes > maxOsszeg) {
            maxOsszeg = osszes
            kiAz = index
        }
    }
    console.log(users[kiAz])
}

// 6. Átlagos életkor számítása
// Feladat: Számítsd ki a felhasználók átlagéletkorát!
// Kimenet példa:
// 34.4

function feladat_6_averageUserAge(){
    let atlagEletkor = 0;
    let osszesen = 0;
    let eletkor = users.map(({age}) => {return age})
    for (let index = 0; index < eletkor.length; index++) {
        osszesen += eletkor[index];
    }
    atlagEletkor = osszesen / eletkor.length
    console.log(atlagEletkor)
}

// 7. Felhasználók vásárlásainak átlaga
// Feladat: Számítsd ki minden felhasználó vásárlásainak átlagát!
// Kimenet példa:
// [{ userId: 1, name: "Alice", ..., averagePurchase: 340 }, ...]

function feladat_7_averagePurchases(){

}

// 8. Legtöbb vásárlással rendelkező felhasználó
// Feladat: Találd meg azt a felhasználót, aki a legtöbb vásárlást hajtotta végre!
// Kimenet példa:
// { userId: 1, name: "Alice", purchases: [120, 340, 560], ... }

function feladat_8_findMostTransactions(){

}

// 9. Email-címek kisbetűsítés
// Feladat: Alakítsd át az összes email-címet kisbetűssé!
// Kimenet példa:
// [{userId: 1, email: "alice@example.com", ...}, ...]

function feladat_9_lowercaseEmails(){

}

// 10. Új felhasználó hozzáadása
// Feladat: Írj egy függvényt, amely egy új felhasználót ad hozzá a tömbhöz!
// Kimenet példa:
// addUser({ userId: 11, name: "Kevin", age: 26, email: "kevin@example.com", purchases: [100, 200] });
// { userId: 11, name: "Kevin", ... }

function feladat_10_addUser(){

}

feladat_1_totalPurchases();
feladat_2_findOldestAndYoungest();
feladat_3_findUserByEmail("bob@example.com");
feladat_4_filterUsersByAge(34);
feladat_5_fingBiggestPurchaseUser();
feladat_6_averageUserAge();








