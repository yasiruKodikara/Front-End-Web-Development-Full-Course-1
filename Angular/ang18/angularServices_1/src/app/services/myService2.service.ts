export class MyService2{
    constructor(){
        console.log('MyService2 constructor called');

        
    }
    private MotherMessage2:String='Hello world 2';


    updateMessage(newMessage:String){
        this.MotherMessage2 = newMessage;
    }



    get getTheMessage2(){
        return this.MotherMessage2; 
    }
}