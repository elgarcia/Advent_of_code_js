const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

//const gifts = ['juego', 'puzzle']
//const materials = 'jlepuz'

//manufacture(gifts, materials) // ["puzzle"]

/* const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // [] */

function manufacture(gifts, materials) {
    let flag = 0;
    const made = new Array;
    for (let i = 0; i < gifts.length; i++)
    {
        let palabra = new String(gifts[i]);
        for (let j = 0; j < palabra.length; j++)
        {
            if (!materials.includes(palabra.charAt(j)))
            {
                flag = 1;
                break ;
            }   
        }
        if (flag == 0)
            made.push(gifts[i]);
        flag = 0;
    }
    return made;
}