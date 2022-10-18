< script >
  function genQuote() {
    var quotes = [
      "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney",
      "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison",
      "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
      "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"<br>- Nelson Mandela ",
      "\"The way to get started is to quit talking and begin doing .\"<br> - Walt Disney",
      "\"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\"<br> - Steve Jobs ",
      "\"If life were predictable it would cease to be life, and be without flavor.\"<br> -Eleanor Roosevelt ",
      "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\"<br> -Oprah Winfrey",
      "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success .\"<br> -James Cameron ",
      "\"Life is what happens when you're busy making other plans .\"<br> -John Lennon ",
      "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"<br> -Mother Teresa ",
      "\"When you reach the end of your rope, tie a knot in it and hang on .\"<br> -Franklin D. Roosevelt ",
      "\"Always remember that you are absolutely unique. Just like everyone else .\"<br> -Margaret Mead ",
      "\"Don't judge each day by the harvest you reap but by the seeds that you plant .\"<br> -Robert Louis Stevenson ",
      "\"The future belongs to those who believe in the beauty of their dreams .\"<br> -Eleanor Roosevelt ",
      "\"Tell me and I forget. Teach me and I remember. Involve me and I learn .\"<br> -Benjamin Franklin ",
      "\"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart .\"<br> -Helen Keller ",
      "\"It is during our darkest moments that we must focus to see the light .\"<br> -Aristotle ",
      "\"Whoever is happy will make others happy too .\"<br> -Anne Frank ",
      "\"Do not go where the path may lead, go instead where there is no path and leave a trail .\"<br> -Ralph Waldo Emerson ",
    ];
    var randNum = Math.floor(Math.random() * quotes.length)
    document.getElementById('quote').innerHTML = quotes[randNum];
  }
genQuote(); <
/script>

<
body onload = 'genQuote()' >
  <
  div id = 'quote' > < /div> <
  /body>
