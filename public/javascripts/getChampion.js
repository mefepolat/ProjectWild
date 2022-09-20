import fetch from 'node-fetch';

export async function getChampion(championName){
    const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/${championName}.json`);
      let championData = await response.json();
    return await championData.data;
}