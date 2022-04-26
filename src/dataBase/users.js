import defauldImg from '../defaultImage.jpg';
import avocado from '../avocado.jpg';
import grandma from '../grandma.png'

const hardCodedContacts =
    [
        { picture: grandma, nickname: "grandma" },
        { picture: avocado, nickname: "Dan" },
        { picture: defauldImg, nickname: "Gili" },
        { picture: defauldImg, nickname: "Maya" },
        { picture: defauldImg, nickname: "Shir" }
    ];


const users = [{ username: "shoval", nickname: "shov", password: "12345678Aa", profilePic: avocado, contacts: hardCodedContacts },
{ username: "itamar", nickname: "ita", password: "12345678Aa", profilePic: avocado, contacts: hardCodedContacts},
{ username: "Emma", nickname: "grandma", password: "12345678Aa", profilePic: grandma, contscts: [] },
{ username: "Dan", nickname: "Dan", password: "12345678Aa", profilePic: avocado, contscts: []},
{ username: "Gil", nickname: "Gili", password: "12345678Aa", profilePic: defauldImg, contscts: [] },
{ username: "Maya", nickname: "Maya", password: "12345678Aa", profilePic: defauldImg, contscts: [] },
{ username: "Shir", nickname: "Shiruch", password: "12345678Aa", profilePic: defauldImg, contscts: [] }];

export default users;