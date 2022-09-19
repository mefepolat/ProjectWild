export function getChampionImage(championKey){
    const fileName = championKey.toString().padEnd(championKey.length + 3, '000');
    const imgSrc = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${championKey}/${fileName}.jpg`;
    return imgSrc;
}