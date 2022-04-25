
import defauldImg from '../defaultImage.jpg';
import avocado from '../avocado.jpg';
import grandma from '../grandma.png'
import dude from '../sheDoesntEvenGoHere.jpg';


// list of contacts for each user
const contacts = [{
    name: 'shoval', cont: [
        { picture: grandma, nickname: "grandma" },
        { picture: defauldImg, nickname: "roomie" },
        { picture: defauldImg, nickname: "Gili" },
        { picture: dude, nickname: "dude" },
        { picture: avocado, nickname: "Shir" }]
},
{
    name: 'itamar', cont: [
        { picture: grandma, nickname: "grandma" },
        { picture: defauldImg, nickname: "roomie" },
        { picture: defauldImg, nickname: "Simi" },
        { picture: dude, nickname: "dude" },
        { picture: avocado, nickname: "Shir" }]
}
]

export default contacts;