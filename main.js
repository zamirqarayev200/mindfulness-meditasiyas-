var cauntValue = 0;

    function train478(){
        var balon = document.getElementById("train478");
        var timer = document.getElementById("timer");
        var nefesAlSayimSaniye = 1;
        var nefesSaxlaSayimSaniye = 1;
        var nefesBuraxSayimSaniye = 1;
        

        if(cauntValue < 4){
            cauntValue++;

            //4 saniyede boyut
            //balon.style.width = "500px";
            //balon.style.height = "500px"
                timer.innerText = 'Nəfəs al';
               var nefesAl = setInterval(function(){
                    nefesAlSayimSaniye++;
                    timer.innerText = nefesAlSayimSaniye;
                        if(nefesAlSayimSaniye == 4){
                            clearInterval(nefesAl);
                        }
                }, 1000);
                balon.style.animation = "aToz 4s";
                //command.document.innerHTML = 'Nefes al';

             setTimeout(function(){
                     //7 saniye gozle
                     // balon.style.animationPlayState = "paused";
                    balon.style.width = "200px";
                    balon.style.height = "200px";

                    timer.innerText = 'Nəfəs saxla';

                    var nefesSaxla = setInterval(function(){

                        nefesSaxlaSayimSaniye++;
                        timer.innerText = nefesSaxlaSayimSaniye;
                        if(nefesSaxlaSayimSaniye == 7){
                            clearInterval(nefesSaxla);
                        }
    
                    }, 1000);

                 setTimeout(function(){
                    //8 saniye balaca et
                  
                    timer.innerText = 'Nəfəsi burax';

                    var nefesBurax = setInterval(function(){
                        nefesBuraxSayimSaniye++;
                        timer.innerText = nefesBuraxSayimSaniye;
                        if(nefesBuraxSayimSaniye == 8){
                            clearInterval(nefesBurax);
                        }
                    }, 1000);
                    balon.style.animation = "zToa 8s 1";
                   
                      setTimeout(function(){
                            train478();
                             balon.style.width = "100px";
                             balon.style.height = "100px";
                     }, 8000);
                 }, 8000,);
                
            }, 4000);
               
                if (cauntValue == '4'){
                    window.location.reload();
                }
        } 
    }

    function train4444() {
        var balon = document.getElementById("train4444");
        var timer = document.getElementById("timer4444");
        var nefesAlSayimSaniye = 1;
        var nefesSaxlaSayimSaniye = 1;
        var nefesBuraxSayimSaniye = 1;
    
        if (cauntValue < 4) {
            cauntValue++;
    
            // Nefes alma aşaması
            timer.innerText = 'Nəfəs al';
            var nefesAl = setInterval(function () {
                nefesAlSayimSaniye++;
                timer.innerText = nefesAlSayimSaniye;
                if (nefesAlSayimSaniye == 4) {
                    clearInterval(nefesAl);
                }
            }, 1000);
            balon.style.animation = "aToz 4s";
    
            setTimeout(function () {
                // Gözleme aşaması
                balon.style.width = "200px";
                balon.style.height = "200px";
                timer.innerText = 'Nəfəs saxla';
                var nefesSaxla = setInterval(function () {
                    
                    nefesSaxlaSayimSaniye++;
                    timer.innerText = nefesSaxlaSayimSaniye;
                    if (nefesSaxlaSayimSaniye == 4) {
                        clearInterval(nefesSaxla);
                    }
                }, 1000);
    
                setTimeout(function () {
                    // Küçülme aşaması
                    timer.innerText = 'Nəfəs ver';
                    var nefesBurax = setInterval(function () {
                        nefesBuraxSayimSaniye++;
                        timer.innerText = nefesBuraxSayimSaniye;
                        if (nefesBuraxSayimSaniye == 4) {
                            clearInterval(nefesBurax);
                            // 4 saniyelik bir duraklatma
                                balon.style.width = "100px";
                                balon.style.height = "100px";
                                timer.innerText = 'Nefes Saxla';
                            
                                    setTimeout(function () {
                                        // train4444 fonksiyonunu tekrar çağır
                                        train4444();
                                    }, 4000);
                        }
                    }, 1000);
                    balon.style.animation = "zToa 4s 1";
                }, 4000);
            }, 4000);
    
            // Diğer işlemler
            if (cauntValue == 4) {
                window.location.reload();
            }
        }
    }
    
    