function displaySpan(){
    var span_Text = document.getElementById("textarea").innerText;
    var temp = ""
    var EnglishWord = new Array(1000);
    var VietnameseWord = new Array(1000);
    var position = 0;
    var ifFirst = true;
    for (var i=0;i<span_Text.length;i++){
        if(i == span_Text.length-1){
            temp+=span_Text[i];
            VietnameseWord[position] = temp;
            position++;
        }
        if(span_Text[i]=='-'){
            if(ifFirst){
                ifFirst = false;
                EnglishWord[position] = temp;
                temp = "";
            } 
            else{
                ifFirst = true;
                VietnameseWord[position] = temp;
                temp = ""
                position++;
            }
        }
        else{
            temp+=span_Text[i];
        }
    }
    for(var i=0;i<position;++i){
        if(EnglishWord[i] == undefined){
            console.log(VietnameseWord[i]);
        }
        else if(VietnameseWord[i] == undefined){
            console.log(EnglishWord[i]);
        }
        else{
            console.log(EnglishWord[i] + "=" + VietnameseWord[i]);
        }
    }
}