function displaySpan(){
    var span_Text = document.getElementById("textarea").innerText
    var temp = ""
    var EnglishWord = new Array(1000)
    var VietnameseWord = new Array(1000)
    var position = 0
    for (var i=0;i<span_Text.length;i++){
        if(span_Text[i] == span_Text.length-1){
            VietnameseWord[position] = temp
            break
        }
        if(span_Text[i] == '-'){
            EnglishWord[position] = temp
            temp=""
        }
        else if(span_Text[i] == '\n'){
            VietnameseWord[position] = temp
            position++
            temp="" 
        }
        else{
            temp+=span_Text[i];
        }
    }
    for(var i=0;i<=position;++i){
        if(EnglishWord[i] == undefined || VietnameseWord[i] == undefined){
            document.write("<br></br>")
        }
        else document.write(EnglishWord[i] + VietnameseWord[i])
    }
}