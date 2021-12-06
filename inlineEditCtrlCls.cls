public with sharing class inlineEditCtrl {
    
    // metodo para buscar a lista de registros da conta.  
    @AuraEnabled
    public static List < account > fetchAccount() {
        
        List < Account > returnList = new List < Account > ();
        List < Account > lstOfAccount = [select id, Name, Phone, Accountnumber from account];
        
        for (Account acc: lstOfAccount) {
            returnList.add(acc);
        }
        return returnList;
    }
    
    // metodo para registros de atualização apos a edição.
    @AuraEnabled
    public static List < account > saveAccount(List<Account> lstAccount) {
        update lstAccount;
        return lstAccount;
    }    
      
    // metodo para deletar registros de atualização apos a edição.
    @AuraEnabled
    public static Boolean deleteSelect(Id recId) {
        account n = [SELECT Id FROM account WHERE Id = :recId];
        
        try{
            delete n;
            return true;
        } catch (Exception e){
            return false;
        }
        
    }
    
    // metodo para trazer a lista de contato de uma conta pelo ID dela.
    @AuraEnabled
    public static list<Contact> getContactlist(Id showId){
        
        return [SELECT Id, Name, phone, Email FROM Contact WHERE AccountId = :showId LIMIT 3];
        
    }
    
    // metodo para inserir um contato para conta correspondente.
    @AuraEnabled
    public static Contact saveContact(Id showId, String FirstName, String LastName, String Phone, String Email) {
        
        Contact con = new Contact();
        con.FirstName = FirstName;
        con.LastName = LastName;
        con.Phone = Phone;   
        con.Email = Email;
        
        con.AccountId = showId;
        insert con;
        return con;
        
    }
    
    // metodo para deletar contato adicionado a conta.
    @AuraEnabled
    public static Boolean deleteContact(Id ConId) {
        contact n = [SELECT Id FROM contact WHERE Id = :ConId];
        
        try{
            delete n;
            return true;
        } catch (Exception e){
            return false;
        }
        
    }
    
}