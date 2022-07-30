'use strict';

{
  var a = 0;

  function get1(){
    goukei(10);
  }

  function get2(){
    goukei(50);
  }

  function get3(){
    goukei(100);
  }

  function goukei(goukei){
    a += goukei;
    document.getElementById('gou').textContent = a + '円';
    console.log (a);
    if( a >= 120){
      document.getElementById('nedan120').disabled = false;
    }
    if(a >= 150){
      document.getElementById('nedan150').disabled = false;
    }
  }

  document.getElementById('ten').addEventListener('click', get1);
  document.getElementById('fif').addEventListener('click', get2);
  document.getElementById('han').addEventListener('click', get3);
  
  function buy120(){
    buy(120);
  }

  function buy150(){
    buy(150);
  }

  function buy(buy){
    a -= buy;
    document.getElementById('gou').textContent = a;
    if(a < 120){
      document.getElementById('nedan120').disabled = true;
    }
    if(a < 150){
      document.getElementById('nedan150').disabled = true;
    }
  }

  document.getElementById('nedan120').addEventListener('click', buy120);
  document.getElementById('nedan150').addEventListener('click', buy150);
}