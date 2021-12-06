({
    doInit : function(component, event, helper) {
        var cont = {
            'Name':'',
            'phone':'',
            'accountNumber':''};
        component.set('v.Account',cont);
        
    },
   
    
    save2 : function(component, event, helper){
        helper.insertAccount(component,event,helper); //chama o insertAccount no helper                       
        //helper.insertAccount(component);        
        //helper.getAccountList(component);
        
    },
    
})