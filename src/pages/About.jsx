import Navbar from "../components/Navbar"
import Spline from "@splinetool/react-spline"
import Footer from '../components/Footer'
import Timeline from "../components/Timeline"
import '../index.css'

export default function About(){
  return(
    
    <div className="">
      <div className="">
            <Navbar/>
        <div className="spline-background">
          <Spline scene="/spline/lines.spline" />
        </div>
          <div className="content">
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <h1 className="text-4xl text-center lg:text-8xl font-extrabold text-white [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] ">The Path I Chose..</h1>
              </div>
              <div className="">
                <p className="text-lg lg:text-2xl text-center text-white font-semibold m-2">Why web development became my calling, and how I’m constantly evolving as a creator.</p>
              </div>
            </div>
          <div className="flex flex-col space-y-10 my-10">
            <Timeline 
            ani="true"
            year='2020'
            title='The Year of Great Escape'
            content='Successfully graduated 10th StateBoard without even lifting a pen. 
            Thanks to COVID, my exam papers were socially distanced from me!'
            />

            <Timeline 
            ani="true"
            year='2021'
            title='The Year of Great Escape: Part II'
            content="11th grade, still on the run! Attended more Google Meets than actual classes. 
            Exams? Let’s just say my WiFi ‘accidentally’ disconnected at the right time!
            But amidst the chaos, it was a pivotal year — I hung up my swimming goggles and took a 
            deep dive into new passions, charting a whole new course."
            />
            <div className="slide-left">
              <Timeline 
              year='2022'
              title='The Plot Twist Year'
              content="12th grade came in strong, with actual exams this time — no more WiFi excuses. 
              Life threw a few curveballs my way, but I faced them head-on. Walked out with a solid 75%, 
              proving that sometimes just showing up is the biggest win!
              Then, I leveled up — officially became a B.Tech CSE undergrad at SRM IST, Ramapuram. New campus, 
              new beginnings, and a whole lot of code!"
              />
            </div>

            <div className="slide-left">
              <Timeline 
              year='2023'
              title="The Machine Learning Mirage"
              content="College life kicked in, and so did my first crash course in coding. From Hello World to Why 
              isn’t this working?!, I explored the realms of Java, C, and Python. Tackled DSA head-on to keep up with 
              the chaos of CSE life.Somewhere along the way, I jumped on the Machine Learning hype train — because, well, 
              everyone else was doing it. Turns out, not every algorithm sparks joy. It was a fleeting interest, but hey, 
              at least I can say I gave it a spin!"
              />
            </div>

            <div className="slide-left">
              <Timeline 
              year='2024'
              title="The Spark Ignites"
              content="While I was busy navigating the coding labyrinth, a friend casually introduced me to web development 
              — and just like that, I was hooked. From static pages to dynamic applications, every line of code felt like 
              unlocking a new superpower.Now, I’m diving deep into the world of JavaScript and Express, building servers, 
              crafting APIs, and making the web come alive. The browser is my playground, and every project is a new adventure!"
              />
            </div>

            <div className="slide-left">
              <Timeline 
              year='2025'
              title="The Full-Stack Saga"
              content="From stumbling into web development to fully embracing it — now, I confidently call myself a web developer.
              I’m exploring the power of Next.js for seamless, scalable applications and mastering the art of clean design with 
              Tailwind CSS. But why stop there? I’m diving into the world of Three.js and Blender, turning pixels into immersive 
              3D experiences. From building web apps to crafting interactive visual stories, the journey's only just begun!"
              />
            </div>

            <div className="slide-left">
              <Timeline 
              year='2026'
              title="The Saga Continues"
              content="No shadows to summon, but plenty of code to conquer. Like Sung Jin-Woo, I’m growing stronger with every 
              challenge. And with Luffy’s unwavering determination, I’m setting sail toward my ultimate treasure — mastering my craft.
              Next destination: The Grand Line of Development!!"
              />
            </div>
          </div>
          </div>
        </div>
        <Footer/>
        </div>
    
  )
}