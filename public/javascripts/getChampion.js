import fetch from 'node-fetch';

export async function getChampion(championKey){
    const response = await fetch(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${championKey}.json`);
      let championData = await response.json();
    return await championData;
}