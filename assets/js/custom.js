$(document).ready(function(){
   
   $('.owl-carousel').owlCarousel({
      loop:true,
      nav:true,
      responsive:{
         0:{
            items:1
         },
         600:{
            items:2
         },
         1000:{
            items:3
         }
      }
   });
   
   // console.log(titulos.first());
   
   // Configuração de produtos
   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')
   
   
   
   /*
   * Ouvinte de eventos .nav-modal-open
   */
   $('.nav-modal-open').on('click', function(e){
      
      e.preventDefault();
      
      let elem = $(this).attr('rel')
      
      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())
      if(elem == 'sobre'){
         $('#accordion').accordion({
            heightStyle: 'content',
            header : 'h3'
         })
         $('#accordion').find('p').css({
            'color': '#fff'
         })
      }
      
      let myModal = new bootstrap.Modal($('#modelId'))
      
      myModal.show()
      
      
   })
   
   
   /*
   * TODO: incrementar a validação
   * - checar se o nome é válido (mais de 2 caracteres)
   * - checar se o email é válido com ao menos um "@" e "."
   * - checar se o cpf é válido com regex
   */
   function validate( elem ){
      const cpfvalido = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
      const emailvalido = /^[a-z0-9.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i
      const cepvalido = /^[0-9]{5}\-[0-9]{3}$/
      const datavalido = /^(\d{2})\/(\d{2})\/(\d{4})$/
      const horavalido = /^[0-9]{2}\:[0-9]{2}$/
      if( elem.val() == '') {
         
         elem.addClass('invalid')
         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
         elem.parent().find('.text-muted').show()
         
      }
      else{
         if(elem.attr('name') == 'cpf'){
            
            if(elem.val().match(cpfvalido)){
               elem.parent().find('.text-muted').hide()
               elem.removeClass('invalid')
            }
            else
            {
               elem.parent().find('.text-muted').show()
               elem.addClass('invalid')
            }
         }
         else if(elem.attr('name') == 'email'){
            if(elem.val().match(emailvalido)){
               elem.parent().find('.text-muted').hide()
               elem.removeClass('invalid')
            }
            else
            {
               elem.addClass('invalid')
               elem.parent().find('.text-muted').show()
               
            }
         }
         else if(elem.attr('name') == 'nome'){
            
            if(elem.val().length > 2){
               elem.parent().find('.text-muted').hide()
               elem.removeClass('invalid')
            }
            else
            {
               elem.parent().find('.text-muted').show()
               elem.addClass('invalid')
            }
         }
         else if(elem.attr('name') == 'cep'){
            
            if(elem.val().match(cepvalido)){
               elem.parent().find('.text-muted').hide()
               elem.removeClass('invalid')
            }
            else
            {
               elem.parent().find('.text-muted').show()
               elem.addClass('invalid')
            }
         }
         else if(elem.attr('name') == 'date'){
            if(elem.val().match(datavalido)){
               elem.parent().find('.text-muted').hide()
               elem.removeClass('invalid')
            }
            else
            {
               elem.parent().find('.text-muted').show()
               elem.addClass('invalid')
            }
         }
         else if(elem.attr('name') == 'time'){
            
            if(elem.val().match(horavalido)){
               elem.parent().find('.text-muted').hide()
               elem.removeClass('invalid')
            }
            else
            {
               elem.parent().find('.text-muted').show()
               elem.addClass('invalid')
            }
         }
         else{
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
         } 
      }
   }   
   $('body').on('submit', '.modal-body .form', function(e){
      
      e.preventDefault()
      
      const inputName = $('#nome')
      const inputEmail = $('#email')
      const inputdate = $('#date')
      const inputcep = $('#cep')
      const inputtime = $('#time')
      const inputcpf = $('#cpf')
      const inputphone = $('#phone')
      
      validate(inputName)
      validate(inputEmail)
      validate(inputdate)
      validate(inputcep)
      validate(inputcpf)
      validate(inputtime)
      validate(inputphone)
      
      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputdate.hasClass('invalid') || inputcep.hasClass('invalid') || inputcpf.hasClass('invalid') || inputtime.hasClass('invalid') || inputphone.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } 
      else {
         $(this).submit()  
      }
      
   })
   
   $('body').on('blur', '#nome', function(){
      validate($(this))
   })
   
   $('body').on('blur', '#email', function(){
      validate($(this))
   });
   
   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000');
   }) ;
   $('body').on('focus', '#date', function(){
      $(this).mask('00/00/0000');
   });
   
   $('body').on('blur', '#time', function(){
      validate($(this))
      $(this).mask('00:00');
   });
   $('body').on('focus', '#time', function(){
      $(this).mask('00:00');
   });
   
   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
   });
   $('body').on('focus', '#cep', function(){
      $(this).mask('00000-000');
   });
   
   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('00000-0000');
   });
   $('body').on('focus', '#phone', function(){
      $(this).mask('00000-0000');
   });
   
   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
   });
   $('body').on('focus', '#cpf', function(){
      $(this).mask('000.000.000-00');
   });
   let produtosquant = {'Item 1': 20, 'Item 2': 25, 'Item 3': 10, 'Item 4': 8, 'Item 5': 13, 'Item 6': 5}
   let produtos = $('.featured-item')
   for(produto of produtos){
      let pos = $(produto).find('img').attr('alt');
      let num = produtosquant[pos];
      $(produto).find('button span').html(num)
   }
   $('.featured-item').find('#estilo').hide()
   $('.featured-item').mouseover(function(){
      $(this).find('#estilo').show()
      
   })
   $('.featured-item').mouseout(function(){
      $(this).find('#estilo').hide()
   })
})
