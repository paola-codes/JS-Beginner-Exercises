//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter >= 0)
	{
        console.log(counter);
        counter--;
	}
	
	return counter;
}

startCounting();

/*I dont get why while(counter >= 0) isntead of while(counter > 0) was correct*/