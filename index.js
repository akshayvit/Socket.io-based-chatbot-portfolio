
const express = require('express')
const path = require('path')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const PORT = 8000

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res, next)=>{
    res.render('index')
})

io.on('connection', (socket)=>{
    console.log("a user connected via socket!")
    socket.on('disconnect', ()=>{
        console.log("a user disconnected!");
    })
    socket.on('chat message', (msg)=>{
        console.log("Message: "+msg)

        io.emit('chat message', msg)
        const msglst=msg.split(" ");
        if(msg.includes("hi") || msglst.includes("hi") || msglst.includes("hello") || msglst.includes("hey") || msglst.includes("holla")) {
            let hour=new Date().getHours();
            var greeting="";
            if(hour<12) {
                greeting="Good Morning";
            } else if(hour>=12 && hour<=17) {
                greeting="Good afternoon";
            } else {
                greeting="Good Evening";
            }
            let reply=`
              <strong> ${greeting} , Hello Sir/Madam </strong> , <br/><pre> It's nice to meet you. I am curious to let you know about my proffesional background.</pre>
            `;
            socket.emit('chat reply',reply);
            setTimeout(()=>{

                reply="Kindly let me know about your queries. <pre>You will get to know everything that's truthful to my knowledge.</pre><hr/><strong style='font-weight:bold;'> Thank you,<br/>Regards 😊</strong>";
                socket.emit('chat reply',reply);
            },2000);

        }
        if(msg.includes("about") || msg.toLowerCase().includes("akshay")) {
            let reply=`<pre>
Early Experienced software engineer having fair programming skills and keen in cross 
platforms application development and have good problem solving capabilities. I have 
published 4 research papers in B.Tech. Has  qualified both GATE 2021 and 2022 exams . 
Also taught competitive programming basics in a YouTube channel for self interest. 
Currently a 5 star coder at Codechef and aiming to learn something at my best always
,keeping up my quick learning ability. My native languages are Hindi, English
and Bengali.
               </pre>
               <br/>
                  <strong><a style="text-decoration:none;" href="cv.docx" download>You can check my resume here</a></strong>
              
            `;
            socket.emit('chat reply',reply);
        }
        if(msg.includes("education") || msg.includes("Education") || msg.includes("career") || msg.includes("background")){
            let reply=`
              <strong>My Education: [Click to expand]</strong> <br/>

              <ul class="list-group">

              <li  class="list-group-item">

              <details>
              <summary>Class X</summary>
              <pre>West Bengal Board of Secondary Education (Patha Bhavan School) , 2001-2013


              Secured Marks in Class-X Examination: 89.5 %</pre>

</details>
</li>
<li  class="list-group-item">

              <details>
              <summary>Class XII</summary>
             <pre>West Bengal Board of Higher Secondary Education (Patha Bhavan School) , 

              2013-2015 Secured Marks in Class-XII Examination: 79 %</pre>
</details>
</li>
<li  class="list-group-item">

              <details>
              <summary>Bachelor in Technology</summary>
              <pre>
St.Thomas' College of Engineering & Technology 122

Bachelor of Technology (BTech), Computer Science Engineering, 2017 – 2021

Secured DGPA(Degree GPA) : 8.24

Vellore Institute of Technology

(I was admitted to VIT/Vellore in the year 2015 in the electrical and electronics(EEE) branch. But due to extreme passion in computer science subjects I left VIT in 2017 and continued my studies at St. Thomas College of Engineering and Technology in computer science branch from 2017.)
</pre>
</details>
</li>

<li  class="list-group-item">

              <details>
              <summary>Master in Technology</summary>
              <pre>
Indian Institute of Technology(ISM) Dhanbad

Master of technology (August 2021-December 2021) [Left the course without completion]
</pre>
</details>
</li>
     <p class="text-success"> <strong><pre class="text-danger">Highest Qualification : </pre><pre class="text-success">B.Tech </pre></strong><del class="bg-warning">M.Tech</del></p>

            `;
            socket.emit('chat reply',reply);
        }
        
         if(msg.includes("achieve")) {
            let reply=`
            <strong>My Achievements: [Click to expand]</strong> <br/>

              <ul class="list-group">
            <li  class="list-group-item">

              <details>
              <summary>Certifications</summary>
         
            <pre>
            1. Big data analytics including Hadoop and R-Language [from:
            
            2. IBM (TIFAC CORE VIT) ]
            
            3. Android Development – IBM(TIFAC CORE VIT)
            
            4. Web Development(TCS iON LifeLong Learning)
            
            5. Problem Solving Certificates (HackerRank)
            
            6. Codechef DSA Certification (CodeChef)
            
            7. Udemy Certification - ASP.NET Core and MVC, Blockchain technology, Quantum computing, Machine learning and Deep Learning, GraphQL
            </pre>
            </li>
            
            <li  class="list-group-item">

            <details>
            <summary>Honours and rewards</summary>
            
            <pre>
           1. International challenge on databases - Hackerearth (Mar 2017) - Stood in Top 100 Runners (Rank:65)
            
           2. Indiahacks Programming 2017 - Hackerearth (Jun 2017) - Selected in pre-finals Indiahacks programming 2017.
            
           3. Bengalathon finalist - West Bengal Government
            
           4. Codigo Stcet Techfest (May 2019) - Stood 2nd in Codigo finals.
           5. GATE 2022 ( Scored Percentile 97% )
            
           6. Advanced Trends in algorithm (Jun 2019) - Stood 1st in Coding competition
            
            
           7. Google Code Jam – Google (Apr 2020) - Qualified the Qualification round .
            
           8. College coding contest hackathon (Mar 2020) - Stood 1st in whole 3rd year two times consecutively.
            
           9. ISI Kolkata M.tech.-CS Entrance exam AIR-56
            
           10. Best Paper Award
           
           11. CIPR 2020 Conference [Springer]
            </pre>
            </li>
            <li  class="list-group-item">

            <details>
            <summary>Publications (Conference)</summary>
            
            <pre>
           1. Human Emotion Recognition through audio features using deep learning techniques.
            
           2. Automatic Linguistic Detection through machine learning techniques from audio/speech
            
           3. Support Vector Machine Kernel Function comparison on mathematical point of views and in practical applications through Support vector classifier
            
           4. Introducing U-LSTM as upgraded lstm with added gates and implementing on emotion detection from human audio speech.
            </pre>
            </li>
            
            `;
            socket.emit('chat reply',reply);
        }
        if(msg.toLowerCase().includes("knowledge") ||msg.toLowerCase().includes("skill") ) {
            let reply=`
            <ul class="list-group"><li class="list-group-item">
        <details><summary>Tech Skills in Computer Science</summary>
<pre>
Computational Problem Solving
[Advanced]
Data structure and algorithms [Advanced]
C [Advanced]
C++ 17 [Advanced]
Java [Intermediate] (SpringBoot Web Bckend Web Framework )

Python (with microframeworks [Flask,Quart] and frameworks [DJango]
[Fair confident]
PHP [Built self projects in the beginning]
HTML [Advanced]
Javascript and JQuery and Ajax
[Advanced]
Node js and Express JS [Confident]
Database Management System (DBMS) (SQL,MySQL,Redis,MongoDB,postgresql ) [Advanced],
Machine Learning and Deep learning
[Basics]
Angular [Advanced]
React [Basics]
Golang programming language [Intermediate]
Git commands and configs [Advanced] ,
ASP.NET and C# [Basics-Intermediate]
Docker [Confident]
Jenkins [Confident]
Blockchain Technology [Beginner]
Quantum Computing [Beginner]
</pre>
</details>
</li>
<li class="list-group-item">
<details>
<summary>Extra Ciricular skills</summary>
<pre>Playing Guitar</pre>
<pre>Doing Free Hand Excercise</pre>
</details>
</li>
</ul>
            `;
            socket.emit('chat reply',reply);
        }
        if(msg.toLowerCase().includes("aim") || msg.toLowerCase().includes("goal")) {
            let reply=`
            <div class="sketchfab-embed-wrapper"><iframe width="100%" height="450" src="https://sketchfab.com/models/5c13c218f60d4c8185deb67869637ce2/embed?autostart=1&amp;preload=1" frameborder="0" allow="autoplay; vr"></iframe>
            </div>
            <div class="panel bg-primary" style="background-color:blue;color:white;font-weight:bold;display:none;" id="aim1">
               <pre>Learn a lot in software engineering field</pre>
            </div>
            <div class="panel bg-info" style="background-color:yellow;color:white;font-weight:bold;display:none;"  id="aim2">
               <pre>Become a pro developer</pre>
            </div>
            <div class="panel bg-warning" style="background-color:orange;color:white;font-weight:bold;display:none;"  id="aim3">
               <pre>Become a good problem solver</pre>
            </div>
            <div class="panel bg-success" style="background-color:green;color:white;font-weight:bold;display:none;"  id="aim4">
               <pre>After all become an independent, honest,happy as well as hard working in life.</pre>
            </div>
            `;
            socket.emit('chat reply',reply);
        }
        else if(msg.toLowerCase().includes("interest") || msg.toLowerCase().includes("contact") || msg.toLowerCase().includes("mail")) {
            let reply=`
            <section class="mb-4">

            <!--Section heading-->
            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
            <!--Section description-->
            <p class="text-center w-responsive mx-auto mb-5">Please reach me out if your are interested</p>
        
            <div class="row">
        
                <!--Grid column-->
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form">
        
                        <!--Grid row-->
                        <div class="row">
        
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control">
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>
                            <!--Grid column-->
        
                            <!--Grid column-->
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control">
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>
                            <!--Grid column-->
        
                        </div>
                        <!--Grid row-->
        
                        <!--Grid row-->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control">
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>
                        <!--Grid row-->
        
                        <!--Grid row-->
                        <div class="row">
        
                            <!--Grid column-->
                            <div class="col-md-12">
        
                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>
        
                            </div>
                        </div>
                        <!--Grid row-->
        
                    </form>
        
                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" id="send_mail">Send</a>
                    </div>
                    <div class="status"></div>
                </div>
                <!--Grid column-->
        
                <!--Grid column-->
                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p><strong><pre>Kolkata,West Bengal</pre></strong></p>
                        </li>
        
                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p><strong><pre>+ 91 9123742694</pre></strong></p>
                        </li>
        
                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p><strong><pre>akshay.chatterjee2015vit@gmail.com</pre></strong></p>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->
        
            </div>
        
        </section>
            `;
            socket.emit('chat reply',reply);
        }
        else if(msg.toLowerCase().includes("project") || msg.toLowerCase().includes("repo")) {
            let reply=`
            <details class="list-group-item"><summary>
            Few among the various Projects I worked on : <strong>[Click here]</strong>
            </summary>
            <ul class="list-group">
            <li class="list-group-item">
            1. Road network identification from aerial imagery
            <br/><br/>
            A new optimized and accurate technique to identify roads from satellite.
             <img src='./road.png' class='align-item-center justify-content-center' style="border-radius:50px;" alt='No image'/>
            </li>
            <li class="list-group-item">
           2. An optimized way of designing a new shortest distance algorithm in graph theory
            </li>
            <li class="list-group-item">
            Video Completion based Scoring system
            <br/><br/>
            Built in Node JS and with app write api and used bootstrap 3 and JQuery, Ajax in the same.
            </li>
            <li class="list-group-item">
            Employee banking information system in SpringBootApplication Java
            <br/><br/>
            Learnt about builder and delegate design patterns in the same.
            </li>
            <li class="list-group-item">
            5. Building chatbot through notifying system for new post on a discourse channel in Node JS
            <br/><br/>
            [ Also in several projects learnt about algolia search system and google console api usages, AWS console, CI/CD pipeline (Jenkins / Bitbucket) ]
            </li>
            <li class="list-group-item">
            6. FFT polynomial multiplication calculator
            <br/><br/>
            [ Developed in Angular and implemented FFT polynomial and used Angular service and router ]
            
            </li>
            <li class="list-group-item">
            7. Gaussian elimination based order 3,4 equation solve in mini web service
            <br/><br/>
            [ Built in Golang and built and deployed on Docker ]
            </li>
            <li class="list-group-item">
            8. XMPP and WebSocket based backend chat server and Meeting App in frontend SwiftUI IOS
            <br/><br/>
            [Built backend in Node JS with simple-xmpp and socket-io module and frontend in SwiftUI for iOS.
            </li>
            <li class="list-group-item">
            9. Basic Microservice deployment using ASP.NET and docker-compose
            </li>
            <li class="list-group-item">
            10. Cloning of Spring.io Initializr for local use
            </li>
            <li class="list-group-item">
            11. Using of Redis Cache to optimize API connection performance , using of Redis broker in Elastic Stack based project between Beans and LogStash
            </li>
            <li class="list-group-item">
            12.Developing GraphQL-Node JS based basic applications
            </li>
            </ul>
            </details>
            
            `;
            socket.emit('chat reply',reply);
        }
    })
})
server.listen(PORT, ()=>{
    console.log("Server listening on port "+PORT+"!")
})