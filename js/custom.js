$(document).ready(function() {
  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        
          quote = response.quoteText;
          author = response.quoteAuthor;
          
          $('#quoteText').text(quote);
          
          if(author) {
              $('#quoteAuthor').text('said by ' + author);
          } else {
              $('quoteAuthor').text('- unknown');
          }
          $('#getQuote').on('click', function(event) {
              event.preventDefault();
              getNewQuote();
          });
          
          $('#tweetThis').on('click' ,function(event) {
             event.preventDefault();
              window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '-- by ' +  author));
          });
      }
    });
  }
  getNewQuote();
});