public class Formcad {
    
    @AuraEnabled
    public static Formcad.Result saveAccount(string name, string phone, string num){
        
        Formcad.Result result = new Formcad.Result();
        
        try
        {
            Account acc = new Account();
            acc.Name = name;
            acc.Phone = phone;   
            acc.AccountNumber =  num;
            insert acc;  
            
            result.isSuccess = true;
            result.cliente = acc;
            result.msg = 'success';
            
            return result;
        } catch (Exception e) {
            
            system.debug('Erro: '+e.getMessage());
            
            result.isSuccess = false;
            result.cliente = null;
            result.msg = e.getMessage();
            return result;
            
        }
        
    }
    
    public class Result{
        
        @AuraEnabled public Boolean isSuccess {get;set;}
        @AuraEnabled public String msg {get;set;}
        @AuraEnabled public Account cliente {get;set;}
        
    }
    
}