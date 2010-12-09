test("Popcorn Footnote Plugin", function () {
  
  var popped = Popcorn("#video"),
      expects = 5, 
      count = 0,
      iframeInterval,
      iframeInterval2,
      iframeInterval3,
      iframeInterval4;
  
  expect(expects);
  
  function plus() {
    if ( ++count===expects) {
      start();
    }
  }
  
  stop();
   
  ok ('footnote' in popped, "footnote is a mehtod of the popped instance");
  plus();
  
  ok ( document.getElementById('footnotediv').innerHTML === "", "initially, there is nothing inside the footnotediv" );
  plus();
  
  popped.footnote({
      start: 5, // seconds
      end: 15, // seconds
      text: 'This video made exclusively for drumbeat.org',
      target: 'footnotediv'
    } )
    .footnote({
      start: 35, // seconds
      end: 45, // seconds
      text: 'Visit webmademovies.org for more details',
      target: 'footnotediv'
    } )
    .play();
  
  
  interval = setInterval( function() {
    if( popped.currentTime() > 5 && popped.currentTime() <= 15 ) {
      ok (document.getElementById('footnotediv').innerHTML === "This video made exclusively for drumbeat.org", "footnote displaing correct information" );
      plus();
      clearInterval( interval );
    }
  }, 5000);
  
  interval2 = setInterval( function() {
    if( popped.currentTime() > 15 && popped.currentTime() < 35  ) {
      ok (document.getElementById('footnotediv').innerHTML === "", "footnote cleared properly" );
      plus();
      clearInterval( interval2 );
    }
  }, 5000);
  
  interval3 = setInterval( function() {
    if( popped.currentTime() > 35 && popped.currentTime() < 45 ) {
      ok (document.getElementById('footnotediv').innerHTML === "Visit webmademovies.org for more details", "footnote displaing correct information" );
      plus();
      clearInterval( interval3 );
    }
  }, 5000);
  
});