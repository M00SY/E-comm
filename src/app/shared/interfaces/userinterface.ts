
export interface Login{
    email:string;
password:string;


}

export interface Register extends Login {

name:string;
rePassword:string;
phone:string;
}





