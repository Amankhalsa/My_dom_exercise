//database file 
// var database = [ { username: 'aman', password: '123' }] ;


// 1st news 
 var newsFeed = [
{ username: 'aman', password: '123' },
 { username:'john', timeline:'Yeah i am so exited' },//object 
//2nd news 
{username:'Tommy', timeline:'Yeah i am so tired' }]; //2nd object &  list 
  document.write(newsFeed.username);
//user input function 

	// body...


//function define here 
function signIn(userNamePrompt,passwordPrompt) 
{


	  if(userNamePrompt == newsFeed[0].username &&   passwordPrompt == newsFeed[0].password ) 
		//if else start here 
     {
     	// document.write(newsFeed);
     	// document.write(newsFeed);
 
      	return  document.write("<br>",newsFeed[1].username," ",newsFeed[2].timeline,"<br>",newsFeed[2].username," ",newsFeed[2].timeline);
     	 // document.write("<br>",newsFeed[1].username," ",newsFeed[1].timeline);



		// console.log(newsFeed[1]); 
		} 	//if closed here 
	 else 
	//else start here 
			{
 document.write('<br>Your password and Username does not match');
					}//else closed here 
}// function closed here 

// calling to funtion
var userNamePrompt = prompt('Please enter you username');
var passwordPrompt = prompt('Please enter you password');


signIn(userNamePrompt,passwordPrompt);

