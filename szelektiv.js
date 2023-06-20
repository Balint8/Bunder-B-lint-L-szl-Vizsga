var kukaNevek = [];
kukaNevek["1"] = "Újságok, folyóiratok, füzetek, könyvek, hullámpapírok, csomagolópapírok, kartondobozok.";
kukaNevek["2"] = "Üdítős és ásványvizes PET palackok, kiöblített háztartási flakonok és azok lecsavart kupakjai, háztartásban előforduló tiszta fóliák, kimosott tejes-, joghurtos poharak, kiöblített italos kartondobozok gyűjtésére alkalmas, a különféle háztartási fémhulladékok és fémdobozok.";
kukaNevek["3"] = "Kizárólag színes üvegek kerülhetnek bele. Ha összetört az sem baj.";
kukaNevek["4"] = "Kizárólag fehér üvegek kerülhetnek bele. Ha összetört az sem baj.";
kukaNevek["5"] = "A háztartásban előforduló fémhulladékok, ilyen például az alumínium doboz, kések és egyéb eszközök.";


function szamKiiras(elem, index) {
    var ujElem = document.createElement("option");
    var ujSzoveg = document.createTextNode(index);
    ujElem.appendChild(ujSzoveg);
    document.getElementById("kSzam").appendChild(ujElem);
}

function kukaKiiras(kuka) {
    document.getElementById("veg").innerHTML = kukaNevek[kuka];
}