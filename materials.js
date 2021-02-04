const shopping = []

const materials = [
  { 
    item: 'ALFINETE',
    type: 'CX',
    previousInventory: 3,
    currentInventory:3,
    defaultInventory:1,
  },
    
  { 
    item: 'APONTADOR',
    type: 'UNI',
    previousInventory: 11,
    currentInventory:11,
    defaultInventory:12,
  },
  { 
    item: 'APONTADOR',
    type: 'UNI',
    previousInventory: 11,
    currentInventory:11,
    defaultInventory:12,
  }
]

   const BUY = (item) =>{
  let buy = 0
  buy = item.defaultInventory - item.previousInventory
  return buy <= 0 ? 'não comprar'
               : buy
}


for( x in materials){
  shopping.push(`${materials[x].item} - ${BUY(materials[x])}`)
}


for( x in shopping){
  console.log(shopping[x])
}