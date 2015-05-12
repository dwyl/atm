test("check h1#hello (inside iFrame) is 'Hello World!'", function(){
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  var initial = target.getElementById('hello').innerHTML;
  console.log('>>> '+initial)
  equal(initial, 'Hello World!', 'it works!!');
});

setTimeout(function() { // this is only here so you can see the page change!
  test("click on a link in the iframe to change page", function(assert){
    var done = assert.async();
    var iframe = document.getElementById('iframe');
    var target = iframe.contentDocument || iframe.contentWindow.document;
    target.getElementById('clickme').click();

    // wait for the next page to load
    setTimeout(function() {
      var iframe = document.getElementById('iframe');
      var target = iframe.contentDocument || iframe.contentWindow.document;
      var hello = target.getElementById('hello').innerHTML;
      console.log('>>> '+hello)
      equal(hello, 'Hello FAC5!', 'as expected');
      done();
    }, 200);
  });
}, 2000); // wait two seconds before running the second test!
