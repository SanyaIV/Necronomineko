window.onload = function(){
    //Elements
    var textField = document.getElementById("text");
    var decodeBttn = document.getElementById("decodeBttn");
    var encodeBttn = document.getElementById("encodeBttn");
    
    //Regex
    var regex = [
        {latin: "A", Dauntless: "ㅏ", regexde: /ㅏ/gi, regexen: /A/gi},
        {latin: "B", Dauntless: "Б", regexde: /Б/gi, regexen: /B/gi},
        {latin: "C", Dauntless: "C", regexde: /C/gi, regexen: /C/gi},
        {latin: "D", Dauntless: "Δ", regexde: /Δ/gi, regexen: /D/gi},
        {latin: "E", Dauntless: "Э", regexde: /Э/gi, regexen: /E/gi},
        {latin: "F", Dauntless: "Ф", regexde: /Ф/gi, regexen: /F/gi},
        {latin: "G", Dauntless: "Г", regexde: /Г/gi, regexen: /G/gi},
        {latin: "H", Dauntless: "ㅎ", regexde: /ㅎ/gi, regexen: /H/gi},
        {latin: "I", Dauntless: "И", regexde: /И/gi, regexen: /I/gi},
        //{latin: "J", Dauntless: "", regexde: //gi, regexen: /J/gi},
        {latin: "K", Dauntless: "ㅋ", regexde: /ㅋ/gi, regexen: /K/gi},
        {latin: "L", Dauntless: "Λ", regexde: /Λ/gi, regexen: /L/gi},
        {latin: "M", Dauntless: "ロ", regexde: /ロ/gi, regexen: /M/gi},
        {latin: "N", Dauntless: "N", regexde: /N/gi, regexen: /N/gi},
        {latin: "O", Dauntless: "Ω", regexde: /Ω/gi, regexen: /O/gi},
        {latin: "P", Dauntless: "Π", regexde: /Π/gi, regexen: /P/gi},
        //{latin: "Q", Dauntless: "", regexde: //gi, regexen: /Q/gi},
        {latin: "R", Dauntless: "ㄹ", regexde: /ㄹ/gi, regexen: /R/gi},
        {latin: "S", Dauntless: "Σ", regexde: /Σ/gi, regexen: /S/gi},
        {latin: "T", Dauntless: "T", regexde: /T/gi, regexen: /T/gi},
        {latin: "U", Dauntless: "U", regexde: /U/gi, regexen: /U/gi},
        {latin: "V", Dauntless: "", regexde: /V/gi, regexen: /V/gi},
        {latin: "W", Dauntless: "W", regexde: /W/gi, regexen: /W/gi},
        //{latin: "X", Dauntless: "", regexde: //gi, regexen: /X/gi},
        {latin: "Y", Dauntless: "Y", regexde: /Y/gi, regexen: /Y/gi}
        //{latin: "Z", Dauntless: "", regexde: //gi, regexen: /Z/gi}
    ];
    
    decodeBttn.onclick = function(){
        for(var i = 0; i < regex.length; i++){
            textField.value = textField.value.replace(regex[i].regexde, regex[i].latin);
        }
    }
    
    encodeBttn.onclick = function(){
        for(var i = 0; i < regex.length; i++){
            textField.value = textField.value.replace(regex[i].regexen, regex[i].Dauntless);
        }
    }
}