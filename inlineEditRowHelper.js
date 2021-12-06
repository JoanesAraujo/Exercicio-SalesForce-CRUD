({
    /**===================================================**/
    /** ESSE DELETE DO TOAST EVENT FUNCIONA COM APPBUILD  **/
    /**===================================================**/
    
    /**
    deleteSelected2: function(component, event){
        var toastEvent = $A.get("e.force:showToast");  
        var currentRecordId = component.get("v.singleRec.Id");
        var deletar = component.get('c.deleteSelect');
        
        //alert ('Current Record Id ' + currentRecordId + '. Now you could pass the current record Id to server to delete the record.' )
        
        deletar.setParams({
            "recId" : currentRecordId
        });
        
        deletar.setCallback(this, function(response) {
            var state = response.getState();
            if(state == "SUCCESS"){
                var msg = response.getReturnValue(); 
                if (msg) {
                    toastEvent.setParams({
                        'type': 'success',
                        'title': 'Sucesso!',
                        'message': 'A conta foi removida com sucesso'
                    });
                    toastEvent.fire();
                    $A.get('e.force:refreshView').fire();
                } else { 
                    toastEvent.setParams({
                        'type': 'error',
                        'title': 'Erro',
                        'message': 'Aconteceu algum erro'
                    });
                    toastEvent.fire();
                }
            } else {
                toastEvent.setParams({
                    'type': 'error',
                    'title': 'Erro!',
                    'message': 'Ocorreu um erro. Favor entrar em contato com o administrador do sistema.'
                });
                toastEvent.fire();
            } 
        }); 
        $A.enqueueAction(deletar);
        
        
    },
    **/
    deleteSelected: function(component, event){  
        var currentRecordId = component.get("v.singleRec.Id");
        var deletar = component.get('c.deleteSelect');  
        // pass the all selected record's Id's to apex method 
        deletar.setParams({
            "recId" : currentRecordId
        });        
        deletar.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();            
            if (state === "SUCCESS") {                
				console.log(state);
                if (response.getReturnValue() != '') {
                    // if getting any error while delete the records , then display a alert msg/
                    alert('The following error has occurred. while Delete record-->' + response.getReturnValue());
                } else {
                    console.log('check it--> delete successful');
                }
                // call the onLoad function for refresh the List view    
                //this.onLoad(component, event);
                   location.reload();
            }
        });
        $A.enqueueAction(deletar);
    },
    
    createContact: function(component, event, helper){
        var ShowId = component.get("v.singleRec.Id"); // pega o ID de Account.      
        var action = component.get("c.saveContact"); //chama o metodo do apex saveContact.
        var con    = component.get("v.con"); //chama o atributo con do cmp.
        
        action.setParams({ 
            showId : ShowId,
            FirstName : con.FirstName,
            LastName : con.LastName,
            Phone : con.Phone,
            Email : con.Email            
            
        });
                       
        action.setCallback(this, function(response) {
            var state = response.getState();            
            if (state === "SUCCESS") {                             
                alert("From server: " + response.getReturnValue());
            }
            alert('Inseriu que eu vi :) !!!');
          	location.reload();
        });
        
        $A.enqueueAction(action);
    },
    
    deleteContacted: function(component, event, id){
        var currentRecordId = id;	       
        var deletar = component.get('c.deleteContact');        
        // pass the all selected record's Id's to apex method 
        deletar.setParams({
            "ConId" : currentRecordId
            
        });	
        deletar.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();            
            if (state === "SUCCESS") {                
				console.log(state);
                if (response.getReturnValue() != '') {
                    // if getting any error while delete the records , then display a alert msg/
                    alert('The following error has occurred. while Delete record-->' + response.getReturnValue());
                } else {
                    console.log('check it--> delete successful');
                }
                // call the onLoad function for refresh the List view 
                   location.reload();
            }
        });
        $A.enqueueAction(deletar);
    }
           
        
})