$( ".inner-switch" ).on("click", function() {
  if( $( "body" ).hasClass( "dark" )) {
    $( "body" ).removeClass( "dark" );
    $( ".inner-switch" ).text( "WYŁ" );
  } else {
    $( "body" ).addClass( "dark" );
    $( ".inner-switch" ).text( "WŁ" );
  }
});

(function(global){
    var contactsList = function(namesurname,mobile,email){
      return new contactsList.init(namesurname,mobile,email);
    };

    contactsList.prototype = {

        data:[
        ],
        searcherResults:[

        ],
        addContact:function(namesurname,mobile,email){
          this.data.push({
            namesurname: namesurname,
            mobile: mobile,
            email:email
          });
          return this;
        },

        returnAllContacts:function(){
          return this.data;
        },

        displayContacts:function(){
          this.log(this.data);
          return this;
        },


        searchContacts:function(searchConTerm){
          if(this.data.length){
            for(var i=0;i<this.data.length;i++){
              if(this.data[i].namesurname.toLowerCase() == searchConTerm.toLowerCase()){
                console.error(this.data[i]);
                this.searcherResults.push(this.data[i]);
              }
            }

            return this.searchResults;
          }else{
            console.log("Brak wyników");
          }
          return this;
        },

        Results:function(){
          return this.searcherResults;
        }
    }

      contactsList.init=function(namesurname,mobile,email){
        var self = this;
        if(namesurname || mobile || email){
          self.addContact(namesurname || "", mobile||"", email||"");
        }



      }

      contactsList.init.prototype = contactsList.prototype;

  global.contactsList = $ab = contactsList;

    }
)(window);

if(!window.contactList){
    window.contactList=$ab();
   }


var form  = document.getElementById('new-contact');
form.addEventListener('submit', function(){


   if(!window.contactList){
   window.contactList=$ab(form.namesurname.value,form.mobile.value,form.email.value);
  } else {

    contactList.addContact(form.namesurname.value,form.mobile.value,form.email.value);
  }

  form.namesurname.value = '';
  form.mobile.value = '';
  form.email.value = '';

   event.preventDefault();
});



document.getElementById('js-contact-list').addEventListener('click', function(){
    if(window.contactList){
       document.getElementById('panel-View').innerHTML = '';

     var contacts = contactList.returnAllContacts();
     console.log(contacts);
      if(contacts.length>0){
        for(var i = 0;i<contacts.length;i++){
        document.getElementById('panel-View').innerHTML += '<div class="contact-item">Imię i Nazwisko:  '+contacts[i].namesurname+'<br>Numer telefonu:  '+contacts[i].mobile+'<br>Email:  '+contacts[i].email+'<br></div><hr>';
        }
      }else{
        document.getElementById('panel-View').innerHTML += '<div class="contact-item">Brak kontaktów.</div><hr>';
      }
    }
    document.getElementById('panel-View').style.display = 'block';


    document.getElementById('panel-contact').style.display = 'none';
  });


  document.getElementById('js-contact-add').addEventListener('click', function(){
    document.getElementById('panel-View').style.display = 'none';

    document.getElementById('panel-contact').style.display = 'block';
  });
