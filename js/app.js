function getGifs() {
  $.ajax({
    //3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL
    url: 'http://api.giphy.com/v1/gifs/search?api_key=3K2ZmyEMrXGGyR7EGBGnbti1HZNk2TZL&q=laughter&limit=10'
  }).then(function(res) {
    var gifs = res.data; // array of gif objects
    
    for ( var i = 0; i < gifs.length; i++ ) {
      var gif = gifs[i];
      var animated = gif.images.downsized.url;
      var still = gif.images.downsized_still.url;
      var el = $('<div class="image" style="background-image: url(' + still + ')"></div>');
      
      el.data('active', false);
      el.data('still', still);
      el.data('animated', animated);

      $('#gifs').append(el);
      // console.log(gifs[i]);
      // $('#gifs').append(
      //   // '<div class="image">' +
      //   //   '<img src="' + gifs[i].images.downsized.url + '">' +
      //   // '</div>'
        
      // );
    }
  });
}

getGifs();

function toggleGif() {
  if ( $(this).data('active') ) {
    $(this).data('active', false);
    $(this).css('background-image', 'url(' + $(this).data('still') + ')');
  } else {
    $(this).data('active', true);
    $(this).css('background-image', 'url(' + $(this).data('animated') + ')');
  }
}

// Event delegation
$(document).on('click', '.image', toggleGif);

// $('button').on('click', function() {
//   $(this).addClass('clicked');
// });


// $('button.clicked')

// $('#gifs').append('<h1>Test</h1>');
// $('#gifs').append('<h1>Another</h1>');