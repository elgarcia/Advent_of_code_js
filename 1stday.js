const giftIds3 = [5, 1, 5, 1]

function findFirstRepeated(gifts) {
	const repeated_index = [];
	const list_index = [];
	for (let i = 0; i < gifts.length; i++)
	{
		if (list_index.includes(gifts[i]))
			repeated_index.push(gifts[i]);
		list_index.push(gifts[i]);
	}
	if (repeated_index.length > 0)
		return (repeated_index[0]);
	return -1;
  }

const firstRepeatedId = findFirstRepeated(giftIds3)
console.log(firstRepeatedId) // 3s