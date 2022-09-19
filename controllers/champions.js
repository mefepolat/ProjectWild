import fetch from 'node-fetch';
import { getChampion } from '../public/javascripts/getChampion.js';
import { getChampionImage } from '../public/javascripts/getChampionImage.js';
const response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json');
const championList = await response.json();


export async function index(req,res){


  res.render('home.ejs', {championList});
}


export async function championDetails(req,res){
    const {name} = req.params;
    let trimmed = name.replaceAll(' ','');
    if(trimmed == 'Nunu&Willump'){
      trimmed = 'Nunu';
    } else if(trimmed == 'Wukong'){
      trimmed = 'MonkeyKing'
    }
    let champion;
    if(championList.data[trimmed] === undefined){
      return res.redirect('/champions');
    }else {
      champion = championList.data[trimmed];
      const championData = await getChampion(champion.key);
      const imgSrc = getChampionImage(champion.key);
      res.render('details.ejs', {champion, imgSrc, championData})
    }
    
    
}
