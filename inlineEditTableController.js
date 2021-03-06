({
    initRecords: function(component, event, helper) {
      // call the apex class method and fetch account list  
         var action = component.get("c.fetchAccount");
             action.setCallback(this, function(response) {
              var state = response.getState();
              if (state === "SUCCESS") {
                  var storeResponse = response.getReturnValue();
                  console.log(JSON.stringify(storeResponse));
               // set AccountList list with return value from server.
                  component.set("v.AccountList", storeResponse);
            }
        });
        $A.enqueueAction(action);
    },
    
    Save: function(component, event, helper) {
      // ver o campo requerido (Name) primeiro no helper com o retorno true/false
        if (helper.requiredValidation(component, event)){
              // chame o método apex saveAccount para atualizar a atualização dos campos de edição em linha 
               var action = component.get("c.saveAccount");
                  action.setParams({
                    'lstAccount': component.get("v.AccountList")
                  });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var storeResponse = response.getReturnValue();
                    // set AccountList list with return value from server.
                    component.set("v.AccountList", storeResponse);
                    // Hide the save and cancel buttons by setting the 'showSaveCancelBtn' false 
                    component.set("v.showSaveCancelBtn",false);
                    alert('Atualizado !!!...');
                }
            });
            $A.enqueueAction(action);
        } 
    },
    
    cancel : function(component,event,helper){
       // on cancel refresh the view (This event is handled by the one.app container. It’s supported in Lightning Experience, the Salesforce app, and Lightning communities. )        
        $A.get('e.force:refreshView').fire();
        
    } 
    
})