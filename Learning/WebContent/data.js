/**
 * 
 */

var year = 2015;

var header = "";
var body= "1";



	var id = window.location.search.substring(4);
	if(id == "")
		{
		read("Page-1.html");
		}
	else
		{
	read("Page-" + id + ".html");
		}
	
	document.title = header;

function read(filename)
{
var xhr;
if(window.ActiveXObject){   
    xhr = new ActiveXObject("Microsoft.XMLHTTP");   
} else {   
    if(window.XMLHttpRequest){   
        xhr = new XMLHttpRequest(); 
    }   
}  
xhr.open("GET",filename,true); //assuming kgr.bss is plaintext
xhr.overrideMimeType("text/xml");
xhr.onreadystatechange = function(){
	if (xhr.readyState==4 && xhr.status==200)
	{
		body = xhr.responseXML.documentElement.getElementsByTagName("body")[0].firstChild.data;
		header = xhr.responseXML.documentElement.getElementsByTagName("head")[0].firstChild.data;
		master = xhr.responseXML.documentElement.getElementsByTagName("master")[0].firstChild.data;
		
		document.title=header;
		document.getElementById("content").innerHTML = body;
		document.getElementById("title").innerHTML = header;
		document.getElementById("master-title").innerHTML = master;
	}
};
xhr.send();
}
