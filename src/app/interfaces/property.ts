import {Image} from "./image";
export interface Property {
    houseId  : number,
    houseName: string,
    location:  string,
    description : string,
    price :       string,
    carPack : number,
    garden : number,
    oneBedroom : number,
    twoBedroom : number,
    threeBedroom : number,
    oneBathroom : number,
    twoBathroom : number,
    threeBathroom : number,
    owner : string,
    email : string,
    image : string,
    phone : string,
    guestRoom : number,
    library  : number,
    solarPannels : number,
    class_exists : boolean
    distance     : number,
    createdAt    : string
    images ?     : [Image]
}
