// Mostra a página Principal
$(function(){
    $('#btnHome').click(function(){    
        if ($("#div_principal").is(":visible"))
        {                        
            // Some com os componentes
            $('#div_principal').fadeOut('slow');                      
            $('#home_texto').fadeOut('slow');

            // Volta devagar com os componentes
            $('#div_principal').fadeIn(1000);                 
            $('#home_texto').delay(1000);                    
            $('#home_texto').fadeIn(1000);        
        }
        else
        {
            // Some com o texto
            $('#div_bugs').fadeOut('slow');
            $('#home_texto').fadeOut('fast');            
            // Volta devagar com os componentes
            $('#div_principal').fadeIn(1000);                 
            $('#home_texto').delay(1000);                    
            $('#home_texto').fadeIn(1000);
        }
    });
});

// Mostra a página de Bugs
$(function(){
    $('#btnBugs').click(function(){
        if ($("#div_bugs").is(":visible"))
        {            
            // Some com os componentes
            $('#div_bugs').fadeOut('slow');
            $('#bugs_texto').fadeOut('slow');            

            // Volta devagar com os componentes
            $('#div_bugs').fadeIn(1000);                 
            $('#bugs_texto').delay(1000);                    
            $('#bugs_texto').fadeIn(1000);
        }
        else
        {
            // Some com os componentes
            $('#div_principal').fadeOut('slow')
            $('#bugs_texto').fadeOut('fast');
            // Volta devagar com os componentes
            $('#div_bugs').fadeIn(1000);                 
            $('#bugs_texto').delay(1000);                    
            $('#bugs_texto').fadeIn(1000);
        }
    });
});

// Botão de Contato
$(function(){
    $('#btnContato_whats').click(function(){
        window.open("https://api.whatsapp.com/send?phone=5516982216853");
        
    });
});
