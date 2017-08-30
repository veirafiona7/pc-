
var xmlhttp;  
if(window.XMLHttpRequest){  
	 xmlhttp = new XMLHttpRequest();  
	 //alert(123);
}

else{
	 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  
	 
}
  var url = "http://127.0.0.1/lyq/app/php/app.php";  
 xmlhttp.open("POST",url,true);  
 xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xmlhttp.send(null);  
 
 xmlhttp.onreadystatechange=function()  
        {  
		
           if (xmlhttp.readyState==4 && xmlhttp.status==200)  
            {  
			  var html = '<div>';
			  var data = JSON.parse(xmlhttp.responseText); 
			  //alert(data);
			// alert(xmlhttp.responseText);
			for (var i = 0; i < data.length; i++) {
              html+= '<div class="container-fluid">'+'<div class="row">'+'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left mar-t015 padd-t15 padd-b15 bg-white border-tgrey-1" >'+'<div class="col-xs-5 col-lg-5 col-md-5 col-sm-5">'+'<img src="'+data[i].i_img+'" />'+'</div>'+'<div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">'+'<h4 class="font-siz-40" >'+data[i].i_title+'</h4>'+'<p class="help-block font-siz-35" >'+data[i].i_subtitle+'</p>'+'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left font-siz-35 padd-t10" >'+'<span class="glyphicon glyphicon-time text-color-grey text-color-red"  >'+data[i].i_count+'</span>'+'<span class="text-color-grey" >'+'课时全'+'</span>'+'</div>'+'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left font-siz-35 padd-t10" >'+' <span class="glyphicon glyphicon-use text-color-grey  text-color-red">'+data[i].i_people+'</span>'+'<span class="text-color-grey">'+'人学习'+'</span>'+'</div>'+'<h2 class="all padd-t40" >'+'&yen;'+'<span>'+data[i].i_price+'</span>'+'</h2>'+'</div>'+'</div>'+'</div>'+'</div>';
			 }
			  html += '</div>';
			  document.getElementById('app').innerHTML=html;
			  //alert(document.getElementById('result').lastChild.innerHTML);
            }  
        }  

