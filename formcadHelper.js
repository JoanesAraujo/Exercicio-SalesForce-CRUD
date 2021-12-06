({
    formcadHelper: function(component, Account) {
        var cont = component.get("v.Account");
 
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newcont = JSON.parse(JSON.stringify(cont));
 
        cont.push(newcont);
        component.set("v.Account", cont);
    },
    
    getAccountList: function(component) {
        var action = component.get('c.getAccounts');
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
         component.set('v.accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
      },
    
    insertAccount : function(component, event, helper){
               
        var action = component.get("c.saveAccount"); //chama a classe do apex saveAccount
        var acc    = component.get("v.Account"); 
        
        action.setParams({ 
            name : acc.Name,
            phone : acc.phone,
            num : acc.accountNumber
        });
                       
        action.setCallback(this, function(response) {
            var state = response.getState();            
            if (state === "SUCCESS") {                             
                alert("From server: " + response.getReturnValue());
            }
            //alert('cheguei aqui'); 
          	location.reload();
        });
        
        $A.enqueueAction(action);
    }
})