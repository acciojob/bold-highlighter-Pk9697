const allStrongElements=document.querySelectorAll('p strong')

function highlight() {
    //Write your code here
	for(const strongElement of allStrongElements){
		strongElement.style.color='green'
	}

}


function return_normal() {
    //Write your code here
	for(const strongElement of allStrongElements){
		strongElement.style.color='black'
	}
}
