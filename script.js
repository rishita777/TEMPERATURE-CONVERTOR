// const caltemp=()=>
// {
//    const temp=document.getElementByIdt('temp').value;
//   //  console.log(temp)
//   const t=document.getAnimations('temp_diff');
//  const v= temp_diff.options[tempSelected.selectedIndex];
// }

var cal=document.getElementById('cel');

var fah=document.getElementById('feh');

cal.addEventListener('click',function()
{
  let c=this.value;
  let f=(c*9/5)+32;
  if(!Number.isInteger(f))
  {
    f=f.toFixed(4);
  }
  fah.value=f;
});




fah.addEventListener('click',function()
{
  let f=this.value;
  let c=(f-32)*5/9;
  if(!Number.isInteger(c))
  {
    c=c.toFixed(4);
  }
  cal.value=c;
});