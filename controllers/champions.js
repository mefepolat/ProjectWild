import fetch from 'node-fetch';

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
    console.log(Object.keys(championList.data[trimmed]))
    console.log(Object.values(championList.data[trimmed]))
    if(championList.data[trimmed] === undefined){
      return res.redirect('/champions');
    }else {
      champion = championList.data[trimmed];
      const response2 = await fetch(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${champion.key}.json`);
      let championData = await response2.json();
      console.log(Object.keys(championData))
      console.log(Object.values(championData['spells'][0]))
      championData = Object.values(championData)
      const fileName = champion.key.toString().padEnd(champion.key.length + 3, '000')
      const imgSrc = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${champion.key}/${fileName}.jpg`
      res.render('details.ejs', {champion, imgSrc, championData})
    }
    
    
}
