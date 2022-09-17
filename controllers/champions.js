import fetch from 'node-fetch';

const response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json');
const championList = await response.json();


export async function index(req,res){


  res.render('home.ejs', {championList});
}


export async function championDetails(req,res){

    res.render('details.ejs', {championList})
}
