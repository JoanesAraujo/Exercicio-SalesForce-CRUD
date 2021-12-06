({
    
    doInit: function(component, event, helper) {
        //call apex class method
        var action = component.get('c.getContactlist');
        var currentRecordId = component.get("v.singleRec.Id");
        action.setParams({
			"showId": currentRecordId
		}); 
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                //set response value in contactList attribute on component.
                var responseData = response.getReturnValue();
                component.set('v.contactList', responseData);
            }
        });
        $A.enqueueAction(action);
    },
        
    inlineEditName : function(component,event,helper){   
        // show the name edit field popup 
        component.set("v.nameEditMode", true); 
        // after the 100 millisecond set focus to input field   
        setTimeout(function(){ 
            component.find("inputId").focus();
        }, 100);
    },
    
    inlineEditPhone : function(component,event,helper){   
        // show the name edit field popup 
        component.set("v.PhoneEditMode", true); 
        // after the 100 millisecond set focus to input field   
        setTimeout(function(){ 
            component.find("inputId").focus();
        }, 100);
    },
    
    inlineEditAcc : function(component,event,helper){   
        // show the name edit field popup 
        component.set("v.AccEditMode", true); 
        // after the 100 millisecond set focus to input field   
        setTimeout(function(){ 
            component.find("inputId").focus();
        }, 100);
    },
        
    onNameChange : function(component,event,helper){ 
        // if edit field value changed and field not equal to blank,
        // then show save and cancel button by set attribute to true
        if(event.getSource().get("v.value").trim() != ''){ 
            component.set("v.showSaveCancelBtn",true);
        }
    },
    
    onPhoneChange : function(component,event,helper){ 
        // if edit field value changed and field not equal to blank,
        // then show save and cancel button by set attribute to true
        if(event.getSource().get("v.value").trim() != ''){ 
            component.set("v.showSaveCancelBtn",true);
        }
    },
    
    onAccChange : function(component,event,helper){ 
        // if edit field value changed and field not equal to blank,
        // then show save and cancel button by set attribute to true
        if(event.getSource().get("v.value").trim() != ''){ 
            component.set("v.showSaveCancelBtn",true);
        }
    },

 
    onRatingChange : function(component,event,helper){ 
        // if picklist value change,
        // then show save and cancel button by set attribute to true
        component.set("v.showSaveCancelBtn",true);
    },     
    
    closeNameBox : function (component, event, helper) {
      // on focus out, close the input section by setting the 'nameEditMode' att. as false   
        component.set("v.nameEditMode", false); 
      // check if change/update Name field is blank, then add error class to column -
      // by setting the 'showErrorClass' att. as True , else remove error class by setting it False   
        if(event.getSource().get("v.value").trim() == ''){
            component.set("v.showErrorClass",true);
        }else{
            component.set("v.showErrorClass",false);
        }
    },
    
    closePhoneBox : function (component, event, helper) {
      // on focus out, close the input section by setting the 'nameEditMode' att. as false   
        component.set("v.PhoneEditMode", false); 
      // check if change/update Name field is blank, then add error class to column -
      // by setting the 'showErrorClass' att. as True , else remove error class by setting it False   
        if(event.getSource().get("v.value").trim() == ''){
            component.set("v.showErrorClass",true);
        }else{
            component.set("v.showErrorClass",false);
        }
    },
    
    closeAccBox : function (component, event, helper) {
      // on focus out, close the input section by setting the 'nameEditMode' att. as false   
        component.set("v.AccEditMode", false); 
      // check if change/update Name field is blank, then add error class to column -
      // by setting the 'showErrorClass' att. as True , else remove error class by setting it False   
        if(event.getSource().get("v.value").trim() == ''){
            component.set("v.showErrorClass",true);
        }else{
            component.set("v.showErrorClass",false);
        }
    },
    
    deleteSelected : function(component, event, helper) {        
        var nomeContato = event.currentTarget.value;
        if(confirm('Deseja Deletar o Contato de : ' + nomeContato + ' ?!'))
        helper.deleteSelected(component, event);
        
    },
    
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
    },
    
    closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
    },
    
    clickCreateContact: function(component, event, helper) {        
        helper.createContact(component,event,helper); //chama o createContact no helper
        
    },
    
    deleteContacted : function(component, event, helper) {        
        var nomeContato = event.currentTarget.value;
        var id = event.currentTarget.dataset.index; //pega o data-index do botao deletar.
        if(confirm('Deseja Deletar o Contato de : ' + nomeContato + ' ?!'))
        helper.deleteContacted(component, event, id);//chama o deleteContacted no helper
        
    },
})