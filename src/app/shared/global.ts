export class Global{
    public static EMAIL_REGEX:any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_#{}+":;'\[\]~`()/])[A-Za-z\d$@$!%*?&_#{}+":;'\[\]~`()/]{8,}/;
    public static MOBILE_REGEX:any = /^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/;
    public static PASSWORD_REGEX:any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_#{}+":;'\[\]~`()/])[A-Za-z\d$@$!%*?&_#{}+":;'\[\]~`()/]{8,}/;
    public static PRODUCT_URL:string;
    public static USER_URL:string;
    public static CART_URL:string;
    public static NOTIFICATION_URL:string;
    constructor(url:string){
        /*if(url.includes("localhost")){
            //this.setLocal();
			this.setGlobal();
        }else{
            this.setGlobal();
        }*/
		this.setGlobal();
    }

    setLocal(){
        try{
            console.log("IN LOCAL");
            Global.PRODUCT_URL = "http://localhost:3001/products";
            Global.USER_URL = "http://localhost:3001/users";
            Global.CART_URL = "http://localhost:3001/carts";
            Global.NOTIFICATION_URL = "http://localhost:3001/notification";
        }catch(error){
            console.error(error);
        }
    }

    setGlobal(){
        try{
            console.log("IN GLOBAL")
            Global.PRODUCT_URL = "https://sheltered-crag-25135.herokuapp.com/products";
            Global.USER_URL = "https://sheltered-crag-25135.herokuapp.com/users";
            Global.CART_URL = "https://sheltered-crag-25135.herokuapp.com/carts";
            Global.NOTIFICATION_URL = "https://sheltered-crag-25135.herokuapp.com/notification";
        }catch(error){
            console.error(error);
        }
    }
}

(function(){
    let url = location.href;
    console.log(url);
    new Global(url);
})()