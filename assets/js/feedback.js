fetch("https://scratchaddons-feedback.glitch.me/",{mode:"no-cors"});const version=new URL(location.href).searchParams.get("version");let sent=!1;document.getElementById("send-feedback").onclick=async function(){if(sent||document.querySelector("textarea").value.length<=2)return;sent=!0,this.style.display="none",document.getElementById("sending").style.display="block";const e={version:version,userAgent:navigator.userAgent,language:navigator.language,content:document.getElementById("mainfeedback").value,username:document.getElementById("username").value};try{if(!(await fetch("https://scratchaddons-feedback.glitch.me/send",{method:"POST",body:JSON.stringify(e)})).ok)throw"";document.getElementById("thanks").style.display="block",document.getElementById("mainfeedback").setAttribute("readonly","true"),document.getElementById("username").setAttribute("readonly","true")}catch(t){alert("Error sending feedback! Try again?"),sent=!1,this.style.display="block"}document.getElementById("sending").style.display="none"},window.addEventListener("load",()=>document.querySelector("textarea").focus());