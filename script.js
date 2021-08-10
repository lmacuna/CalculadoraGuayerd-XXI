let start;
const num7 = (id)=>{let numero =document.querySelectorAll("button")
    for(let i =0;i<numero.length;i++){
            if(id===numero[i].id&&start===true){
                n7=document.querySelector("#resultado").innerText+=id;
            }
    }
}


const num8 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n8=document.querySelector("#resultado").innerText+=id;
    }
}

}
const num9 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n9=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num4 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n4=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num5 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n5=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num6 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n6=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num1 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n1=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num2 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n2=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num3 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n3=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num0 = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n0=document.querySelector("#resultado").innerText+=id;
    }
}
}
const num = (id)=>{let numero =document.querySelectorAll("button")
for(let i =0;i<numero.length;i++){
    if(id===numero[i].id&&start===true){
        n=document.querySelector("#resultado").innerText+=id;
    }
}
}



const simbolo=(id)=>{let op= document.querySelectorAll("button")
for(let i=0;i<op.length;i++){
    if(id===op[i].id&&start===true){
       simb= document.querySelector("#resultado").innerText+=id;
    }
}

}


const operacion=()=>{
     let datos=document.querySelector("#resultado").innerText
     let n1=[];
     let n2=[]; 
    
    
        for(let i =0;i<datos.length;i++){
            
            if(datos[i]==="+"||datos[i]==="-"||datos[i]==="x"||datos[i]==="/"){
                break;
            }
                n1+=datos[i];   
                   
        }
        for(let j =n1.length+1;j<datos.length;j++){
            
          
            if(datos[j]!=="+"||datos[j]!=="-"||datos[j]!=="x"||datos[j]!=="/"){
                
                n2+=datos[j];
            }
            

        }
        
           n1=parseFloat(n1);
           n2=parseFloat(n2); 

       
                    
    
        for(let i =0;i<datos.length;i++){
                   
              if(datos[i]==="+"){
                
                
                 let r=parseFloat(n1)+parseFloat(n2);
                  return document.querySelector("#resultado").innerText=parseFloat(r);
              }else if(datos[i]==="-"){
                  let r =parseFloat(n1)-parseFloat(n2);
                  return document.querySelector("#resultado").innerText=r;
              }else if(datos[i]==="x"){
                  let r =parseFloat(n1)*parseFloat(n2);
                  return document.querySelector("#resultado").innerText=r;
              }else if(datos[i]==="/"){
                  let r =parseFloat(n1)/parseFloat(n2);
                  return document.querySelector("#resultado").innerText=r.toFixed(2);
              }
              console.log(n1)
              console.log(n2); 
             
        }             
      
}
 
const borrar =()=>document.querySelector("#resultado").innerText="";n1=0;n2=0;


   
const apagar=()=>{
  
    console.log(document.querySelector(".power").classList.replace("power","pantalla"));borrar();
     start=false;
        
}  
              
   
const encender=(id)=>{
      let estado = document.querySelectorAll("button")
      for(let i=0;i<estado.length;i++){
          if(estado[i].id===id){
            console.log(document.querySelector(".pantalla").classList.replace("pantalla","power"));start=true;
          }
      }
    
}

