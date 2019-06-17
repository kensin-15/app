var nama=document.getElementById("nama");
var email=document.getElementById("email");
var jkl=document.getElementById("jkl");
var jkp=document.getElementById("jkp");
var situgoogle=document.getElementById("google");
var situsyahoo=document.getElementById("yahoo");
var komentar=document.getElementById("komentar");
var hoby=document.getElementById("hoby");

document.getElementById("btn").addEventListener("click",function()
{
   document.getElementById("hasilnama").innerText="Nama Saya "+nama.value;
   document.getElementById("hasilemail").innerText="Email Saya "+email.value;
   if(jkl.checked)
   {
       document.getElementById("hasiljk").innerText="Jenis Kelamin "+jkl.value;
   }
   else if(jkp.checked)
   {
       document.getElementById("hasiljk").innerText="Jenis Kelamin "+jkp.value;
   }
   if((situsyahoo.checked) && (situgoogle.checked)) {
       document.getElementById("hasilsitus").innerText = "Situs ini berasal dari Google Dan Yahoo";
   }

   else if(situgoogle.checked)
   {
       document.getElementById("hasilsitus").innerText="Situs ini berasal dari Google";

   }
   else if(situsyahoo.checked)
   {
       document.getElementById("hasilsitus").innerText="Situs ini berasal dari Yahoo";
   }

    document.getElementById("hasilkomentar").innerText="Komentar "+komentar.value;
    document.getElementById("hasilhoby").innerText="Hoby Saya "+hoby.value;

    document.getElementById("btn2").addEventListener("click",function()
    {
        nama.value="";
        email.value="";
        jkl.checked=false;
        jkp.checked=false;
        hoby.value="Pilih Hoby";
        situgoogle.checked=false;
        situsyahoo.checked=false;
        komentar.value="";
        document.getElementById("hasilhoby").innerText="";
        document.getElementById("hasilkomentar").innerText="";
        document.getElementById("hasilsitus").innerText="";
        document.getElementById("hasiljk").innerText="";
        document.getElementById("hasilemail").innerText="";
        document.getElementById("hasilnama").innerText="";
    });
});