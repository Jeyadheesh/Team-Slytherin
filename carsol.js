function fun()
{
    var eb,gb,ob,tr,flig,news,alu,ans;
    eb=parseInt(document.getElementById("inp1").value);
    gb=parseInt(document.getElementById("inp2").value);
    ob=parseInt(document.getElementById("inp3").value);
    tr=parseInt(document.getElementById("inp4").value);
    flig=parseInt(document.getElementById("inp5").value);
    news=(document.getElementById("inp6"));
    alu=(document.getElementById("inp8"));
   
    eb=eb*105;
    gb=gb*105;
    ob=ob*113;
    tr=tr*.79;
    flig=flig*4400;
   
    console.log(news);
   
    ans=eb+gb+ob+tr+flig;
    document.getElementById("solu").value=ans;
}