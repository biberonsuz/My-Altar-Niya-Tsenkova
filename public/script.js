const button = document.querySelector('button')
const text = document.querySelector('h1')

const animationDuration = 2 * 1000 //2 mins

let quotes = 
['“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney', 
'“The secret of getting ahead is getting started.” – Mark Twain',
'“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash',
'“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb',
'"If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz',
'"We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington',
'"Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon',
'"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey',
'"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman',
'"Everything you can imagine is real.”― Pablo Picasso',
'"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ― Helen Keller',
'"Do one thing every day that scares you.”― Eleanor Roosevelt',
'"It’s no use going back to yesterday, because I was a different person then.”― Lewis Carroll',
'"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates',
'"Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt',
'"Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV',
'"Whatever you are, be a good one.” ― Abraham Lincoln',
'"If we have the attitude that it’s going to be a great day it usually is.” – Catherine Pulsifier',
'"Impossible is just an opinion.” – Paulo Coelho',
'"Your passion is waiting for your courage to catch up.” – Isabelle Lafleche',
'"Magic is believing in yourself. If you can make that happen, you can make anything happen.” – Johann Wolfgang Von Goethe',
'"If something is important enough, even if the odds are stacked against you, you should still do it.” – Elon Musk',
'"Hold the vision, trust the process.” – Unknown',
'"Don’t be afraid to give up the good to go for the great.” – John D. Rockefeller',
'"People who wonder if the glass is half empty or full miss the point. The glass is refillable.” – Unknown',
'"No one is to blame for your future situation but yourself. If you want to be successful, then become "Successful.”― Jaymin Shah',
'"Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln',
'"Without hustle, talent will only carry you so far.” – Gary Vaynerchuk',
'"Work like there is someone working twenty four hours a day to take it away from you.” – Mark Cuban',
'"We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle',
'"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.” – Sheryl Sandberg',
'"If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.” – Vincent Van Gogh',
'"How wonderful it is that nobody need wait a single moment before starting to improve the world.” – Anne Frank',
'"Great things are done by a series of small things brought together” – Vincent Van Gogh',
'"Very often, a change of self is needed more than a change of scene.’ – A.C. Benson',
'"It’s not the load that breaks you down, it’s the way you carry it.” – Lou Holtz',
'"If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.” – Wayne Dyer',
'"Keep your eyes on the stars, and your feet on the ground.” – Theodore Roosevelt',
'"You can waste your lives drawing lines. Or you can live your life crossing them.” – Shonda Rhimes',
'"In a gentle way, you can shake the world.” – Mahatma Gandhi',
'"Work hard in silence, let your success be the noise.” – Frank Ocean',
'"Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo Da Vinci, Thomas Jefferson, and Albert Einstein.” – H. Jackson Brown Jr.',
'"Hard work beats talent when talent doesn’t work hard.” – Tim Notke',
'"If everything seems to be under control, you’re not going fast enough.” – Mario Andretti',
'"Opportunity is missed by most people because it is dressed in overalls and looks like work.” – Thomas Edison',
'"The only difference between ordinary and extraordinary is that little extra.” – Jimmy Johnson',
'"If you work on something a little bit every day, you end up with something that is massive.” – Kenneth Goldsmith',
'"At any given moment you have the power to say: this is not how the story is going to end.” – Unknown',
'"Amateus sit around and wait for inspiration. The rest of us just get up and go to work.” – Stephen King',
'"Nothing will work unless you do.” – Maya Angelou',
'"Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.” – Christine Caine',
'"Everyone has inside them a piece of good news. The good news is you don’t know how great you can be! How much you can love! What you can accomplish! And what your potential is.” – Anne Frank',
'"Don’t quit yet, the worst moments are usually followed by the most beautiful silver linings” – Unknown',
'"In the middle of every difficulty lies opportunity.” – Albert Einstein',
'"Start where you are. Use what you have. Do what you can.” – Arthur Ashe',
'"Keep your face always toward the sunshine – and shadows will fall behind you.” – Walt Whitman',
'"Make each day your masterpiece. – John Wooden',
'"Wherever you go, go with all your heart” – Confucius',
'"Begin anywhere.” – John Cage']

button.addEventListener('click', () => {
    $(button).fadeOut(animationDuration)
    setTimeout(function(){ 
        $(text).fadeIn(animationDuration)
        text.innerHTML = quotes[Math.floor(Math.random()*quotes.length)]
    }, animationDuration);
    
    //go back to the start button after 15 secs
    setTimeout(function(){ 
        $(text).fadeOut(animationDuration)
        setTimeout(function(){ 
            $(button).fadeIn(animationDuration)
            text.innerHTML = quotes[Math.floor(Math.random()*quotes.length)]
        }, animationDuration);
       
    }, 15000);
})

