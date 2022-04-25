import defauldImg from '../defaultImage.jpg';
import avocado from '../avocado.jpg';
import grandma from '../grandma.png'
import contacts from './Contacts';

const users = [{ username: "shoval", nickname: "shov", password: "12345678Aa", profilePic: avocado, contacts: contacts },
{ username: "itamar", nickname: "ita", password: "12345678Aa", profilePic: avocado, contacts: contacts},
{ username: "Emma", nickname: "grandma", password: "12345678Aa", profilePic: grandma, contscts: [] },
{ username: "Dan", nickname: "Dan", password: "12345678Aa", profilePic: avocado, contscts: []},
{ username: "Gil", nickname: "Gili", password: "12345678Aa", profilePic: defauldImg, contscts: [] },
{ username: "Maya", nickname: "Maya", password: "12345678Aa", profilePic: defauldImg, contscts: [] },
{ username: "Shir", nickname: "Shiruch", password: "12345678Aa", profilePic: defauldImg, contscts: [] }];

export default users;