# Narrative

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/akshatvg/Narrative?logo=github&style=social)](https://github.com/akshatvg/) [![GitHub last commit](https://img.shields.io/github/last-commit/akshatvg/Narrative?style=social&logo=git)](https://github.com/akshatvg/) [![GitHub stars](https://img.shields.io/github/stars/akshatvg/Narrative?style=social)](https://github.com/akshatvg/Narrative/stargazers) [![GitHub forks](https://img.shields.io/github/forks/akshatvg/Narrative?style=social&logo=git)](https://github.com/akshatvg/Narrative/network)

<p align="center">
<a href="https://narrative.akshatvg.com">
<img src="assets/img/border-logo.png" width="400px" alt="Narrative Logo"/>
</a>
</p>

![Generic badge](https://img.shields.io/badge/Narrative-Modernising_Comics-orange) 

#### Link for [demo](https://narrative.akshatvg.com) 
[![Generic badge](https://img.shields.io/badge/view-demo-orange)](https://narrative.akshatvg.com)

## Introduction
Remember when reading the newest edition of Tintin or Archies or Tinkle was the highlight of your day? With the writing and publishing trends of comics going down, we are here to save the day with a technological twist.

With **Narrative**, anyone can express themself creatively and make exciting comics in minutes through voice based commands and a simple UI.

## About Narrative
Narrative is a web app where the user can speak/ type a story which will get converted into relevant comic style images where you can also add narrative text boxes and character speech bubbles.

## Features
- Speech to Text
- Text to Image
- Cartoonification
- Real time generation
- Eliminates need to know how to draw
- Share on Twitter
- Share on WhatsApp
- Simple UI
- Help mode


## Applications
- Artists who relied on drawing and drafting all their content themselves have been suffering huge financial losses since they haven't been able to adapt to the digital trends. This means lesser number of copies sold and wastage of paper. Through our technological twist, the same non-tech-savvy artists will be able to make digital comics.
- Creative youth like us who have ideas but are too lazy to write and pen down their ideas will be able to express themselves better.
- Utilisation of time during COVID- an idle mind is the devil's playground.


## Marketing and business model
- We intend to keep the product free for at least a year to ensure we get the marketing we deserve- happy and long lasting user retention is our goal.
- We will charge minor subscription fees after a month's free trial (Freemium model) to keep the servers running.
- Major source of our revenue will be by running advertisements on our site.

## How it works
1. JavaScript Web Speech API for audio transcription (default with HTML5)
2. The transcribed or written text is searched for relevant images using the Custom Search API in GCP and an image is returned to user which can be used as the comic background
3. Since we get human like images, we cartoonify the images using OpenCV
4. The core functionalities like adding bubbles or text-boxes or headings or sharing are done through Vanilla JS and jQuery.

## Tech Stack
- **Front-end:** HTML, CSS, JavaScript, jQuery
- **Back-end:** Django with PostgreSQL
- **Design and PPT:** AdobeXD
- **Deployment:** Heroku and Netlify
- **Image API**: *Custom Search API* on Google Cloud Platform and *Custom Search Engine* on [cse.google.com/cse/all](https://cse.google.com/cse/all)
- **Cartoonification:** OpenCV

## Requirements
The source code of this project is written in **`HTML/CSS/JS`**. So, you do not require anything extra to run this project.

## Instructions to run front-end

[![chrome](https://img.shields.io/badge/Open-index.html-lightgrey.svg?logo=google-chrome&style=popout&logoColor=red)](https:/?narrative.akshatvg.com)

Extract the folder and run `index.html`

## Instructions to run back-end
```bash
$ git clone https://github.com/akshatvg/Narrative
$ cd Narrative
$ pip3 install -r requirements.txt
$ python3 manage.py runserver
```

## Contributors
- [Akshat Gupta](https://github.com/akshatvg)
- [Sai Sandeep](https://github.com/raysandeep)
- [Muskan Tewari](https://github.com/muskantewari)
- [Nishi Jain](https://github.com/nishijjain)


## Need help?


Feel free to contact me via [Facebook](https://www.facebook.com/akshatvg).

Invite me to connect on [LinkedIn](https://www.linkedin.com/in/akshatvg/).

[![Facebook](https://img.shields.io/badge/Facebook-add-blue.svg?logo=facebook&logoColor=white)](https://www.facebook.com/akshatvg) [![Quora](https://img.shields.io/badge/Quora-ask-red.svg?logo=quora)](https://www.quora.com/profile/Akshat-Gupta-279) [![Instagram](https://img.shields.io/badge/Instagram-follow-purple.svg?logo=instagram&logoColor=white)](https://www.instagram.com/akshatvg/) [![Snapchat](https://img.shields.io/badge/Snapchat-add-yellow.svg?logo=snapchat&logoColor=white)](https://www.snapchat.com/add/akshatvg) [![Medium](https://img.shields.io/badge/Medium-follow-black.svg?logo=medium&logoColor=white)](https://medium.com/@akshatvg)


```bash



 _____ _                 _     __   __            
|_   _| |               | |    \ \ / /            
  | | | |__   __ _ _ __ | | __  \ V /___  _   _   
  | | | '_ \ / _` | '_ \| |/ /   \ // _ \| | | |  
  | | | | | | (_| | | | |   <    | | (_) | |_| |  
  \_/ |_| |_|\__,_|_| |_|_|\_\   \_/\___/ \__,_|  
                                                  
                                                  
______                                            
|  ___|                                           
| |_ ___  _ __                                    
|  _/ _ \| '__|                                   
| || (_) | |                                      
\_| \___/|_|                                      
                                                  
                                                  
______      _               _   _               _ 
| ___ \    (_)             | | | |             | |
| |_/ / ___ _ _ __   __ _  | |_| | ___ _ __ ___| |
| ___ \/ _ \ | '_ \ / _` | |  _  |/ _ \ '__/ _ \ |
| |_/ /  __/ | | | | (_| | | | | |  __/ | |  __/_|
\____/ \___|_|_| |_|\__, | \_| |_/\___|_|  \___(_)
                     __/ |                        
                    |___/                         

 


```

## License

**MIT &copy; [Akshat Gupta](https://github.com/akshatvg/Narrative/blob/master/LICENSE)**

[![GitHub license](https://img.shields.io/github/license/akshatvg/Narrative?style=social&logo=github)](https://github.com/akshatvg/Narrative/blob/master/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/akshatvg?style=social)](https://twitter.com/akshatvg)

---------

```javascript

if (youEnjoyed) {
    starThisRepository();
}

```

-----------

