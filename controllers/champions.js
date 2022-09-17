import fetch from 'node-fetch';

const response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json');
const championList = await response.json();


export async function index(req,res){

    console.log(championList.data)
  res.render('home.ejs', {championList});
}

