# RiddleQ

**A Project**

---

### The Reality Check

Let me be honest - I didn't start with some grand vision. I just thought:
- Quizzes are fun
- Bootstrap exists so I don't have to make things look good from scratch (thank god)

But then... I actually got into it. Like really into it. 

---

### Technologies I Actually Used

**JavaScript**
- Not gonna lie, this was tough at first
- Spent way too many hours debugging semicolons
- But once it clicked? Chef's kiss
- Handles all the quiz logic, scoring, and making things interactive

**Bootstrap 5**
- My savior for making things look professional without a design degree
- Responsive by default (mobile-friendly without crying)
- Pre-made components = less CSS headaches
- Made my project look 10x better than my coding skills deserve

**jQuery**
- Yeah yeah, I know it's "old school" but it WORKS
- Made DOM manipulation so much easier
- Shortened my code significantly

### Why Single Page Application?

Honestly? I learned about SPAs in class and thought "that sounds fancy, let me try it." Turns out:
- No annoying page refreshes
- Everything feels smooth and modern
- It's actually not that hard once you get the hang of it
- Made my project stand out from the basic multi-page submissions

---

### What I Built

**Dashboard**
The home page where everything starts. Clean, simple, gets you into a quiz fast. No unnecessary fluff because let's be real, I had a deadline.

**Quiz Generation**
This is where the magic happens:
- Random every time (so you can't just memorize answers)

**Score Tracking**
Real-time score updates as you go through the quiz. Added some animations to make it feel satisfying when you get answers right. The little dopamine hits keep you going!

**Answer Review**
Click to expand and see what you got wrong (and right). Learning from mistakes is important, right? That's what I told my professor anyway.

**Quiz History**
Your past attempts are saved so you can see your progress. Used localStorage for this - no backend needed! (Which saved me a LOT of time)

**Retake Option**
Because sometimes you bomb a quiz and just want redemption. We've all been there.

**Admin Panel**
Built a separate admin page to control quiz settings. Made me feel professional even though it's just me using it during demos.

### What I Learned Building This

Real talk - I learned more building this than I did in half my lectures:
- Async JavaScript is your friend AND enemy
- User experience matters (tested it on my friends)
- Git commits should be more descriptive than "fixed stuff"
- Stack Overflow is a developer's best friend

---

### Project Structure

```
RiddleQ/
├── index.html        
├── admin.html         
├── styles.css     
├── js/        
│   ├── quiz.js        
│   └── admin.js         
└── questions/             
```

### The Flow

1. User lands on page - Bootstrap makes it look good
2. Clicks start quiz - JavaScript kicks in
3. Score calculated - JavaScript does the math
4. Save to history - localStorage to the rescue

### Technologies Breakdown

| What | Why I Used It | What I Learned |
|------|---------------|----------------|
| **JavaScript** | It's required + does everything | Closures, promises, async/await |
| **Bootstrap 5** | I can't design to save my life | Grid system, components, utilities |
| **jQuery** | Makes JS easier | DOM manipulation, event handling |
| **localStorage** | Save data without a server | Browser storage, JSON stringify/parse |

### Challenges I Faced

**Async Issues**
Questions loading after the quiz already started? Yeah, that was fun to debug. Promises and async/await became my best friends.

**Mobile Responsiveness**
Looked great on my laptop, broken on phones. Bootstrap helped but I still had to tweak media queries.

**Cross-Browser Compatibility**
Works perfect in Chrome, weird in Safari. Spent hours on this. Still not 100% but it's good enough™️

---

### For Users 

1. Go to [https://raiku99x.github.io/Kwizard/](https://raiku99x.github.io/Kwizard/)
2. Click around, take a quiz
3. See your score
4. Try to beat it!

### For Developers 

```bash
# Clone this repo
git clone https://github.com/raiku99x/Kwizard.git

# Go into the folder
cd Kwizard

# Open index.html in your browser
# That's it! No npm install, no build process, just HTML/CSS/JS
```

### File Structure Quick Guide

- `index.html` - Main quiz interface (start here)
- `admin.html` - Admin panel for quiz settings
- CSS files - Make things pretty
- JS files - Make things work
- Just open in browser - No server needed!

---

### My Philosophy (Fancy Way of Saying "My Reasoning")

**Keep It Simple**
I'm a student, not a UX designer. So I focused on making it functional first, pretty second. Bootstrap did most of the heavy lifting on the "pretty" part anyway.

**Make It Fast**
Nobody wants to wait for a quiz to load. I optimized images, minimized API calls, and kept the code relatively clean. Also my internet sucks so if it works for me, it'll work for anyone.

**Mobile First-ish**
Everyone's on their phones these days. Used Bootstrap's responsive grid so it works on phones, tablets, whatever. Tested it on my phone, my friend's iPad, even my mom's ancient Samsung.

**Accessibility Matters**
Added proper labels, contrast ratios, keyboard navigation. Not perfect but I tried! Also my professor mentioned it's important for grading so... yeah.

### What I'd Do Next

If I had more time:
- Better error handling (it kinda crashes sometimes)
- Dark mode (everyone wants dark mode)
- Better animations (the ones I have are kinda basic)
- More quiz customization options
- Proper testing (I mostly just clicked around hoping it worked)

---

### By The Numbers

- 100% Frontend (no backend to worry about)
- 0 Cost to run (GitHub Pages is free!)
- 1 Stressed Student (me)
- Too many cups of coffee consumed during development

### What Works Well

- Fast loading times  
- Mobile responsive  
- Free to use  
- No ads (because I don't know how to add them)  
- Actually educational  
- My friends used it to study and it helped!

### What Could Be Better
 
- No user accounts (would need a backend)  
- Limited customization  
- Code could be cleaner (it works though!)
- 
---

### Ideas I'd Love Help With

- Bug fixes (there are definitely bugs)
- Better mobile experience
- Code optimization (I know it's not perfect)
- New features
- Documentation improvements
- Translations to other languages

### Tech Stack Summary

Just so you know what i'm working with:

```
Frontend: HTML5, CSS3, JavaScript (ES6+)
Framework: Bootstrap 5
Library: jQuery 3.x
API: OpenTDB (Open Trivia Database)
Hosting: GitHub Pages
```

### Tags For Discoverability

`#javascript` `#bootstrap` `#jquery` `#quiz-app` `#college-project` `#student-project` `#opentdb` `#spa` `#web-development` `#learning` `#education` `#api-integration`

---

### Built With

- Caffeine - Lots and lots of caffeine
- Stack Overflow - My real professor
- YouTube Tutorials - Shoutout to all the coding channels
- Trial and Error - Mostly error

### Special Thanks To

**Bootstrap Team** - For making me look like I know design

**GitHub** - For free hosting and version control

**Stack Overflow Community** - For answering questions I didn't even know I had

**Future Me** - Sorry about the messy code. 

---

## License

This is a college project made for educational purposes. 
MIT License or whatever lets you use this freely. I'm not a lawyer, I'm a student.

---

## Connect & Links

**Live Demo:** [https://raiku99x.github.io/Kwizard/](https://raiku99x.github.io/Kwizard/)

**GitHub:** Check out the code, fork it, whatever!

---

## Final Thoughts

This project taught me more than I expected. Sure, I learned about JavaScript, and web development - but I also learned about problem-solving, perseverance, and that 3 AM coding sessions are both productive and terrible for your health.

Is it perfect? Nope.  
Does it work? Mostly.  
Am I proud of it? Absolutely.

**raiku99x** | College Project 2024-2025 (deployed to github @2026)

---

**Documentary-Style Credits:**
- Created By: One college student with a dream (and a deadline)
- Starring: JavaScript, Bootstrap, jQuery, and questionable life choices
- Special Effects: Console.log debugging
- Runtime: Too many hours to count
- Genre: Educational 
- Rating: Four stars (One star deducted for the bugs I haven't found yet)

*"It's not a bug, it's a feature"* - Me, probably

---
