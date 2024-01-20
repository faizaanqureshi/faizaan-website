import './App.css';

function App() {
  return (
    <div className='flex flex-col justify-between lg:flex-row'>
      <div className='lg:sticky lg:top-0 flex flex-col p-6 justify-between lg:max-h-screen lg:justify-center lg:flex-1 lg:ml-10 lg:mr-10'>
        <h1 className='font-sans text-white font-bold text-4xl'>Faizaan Qureshi</h1>
        <h2 className='font-sans text-white font-medium text-2xl pt-6'>Software Engineer at Interac</h2>
        <p className='font-sans text-slate-400 pt-2 pb-8'>I design software solutions to solve complex problems and unleash my creativity</p>
        <img class="hidden lg:inline lg:w-28 lg:h-28 lg:rounded-full" src="profile.png" alt="Faizaan Qureshi"></img>
        <div className='flex flex-row lg:pt-24'>
          <a href='https://linkedin.com/in/faizaan-qureshi'>
            <img className='w-8 h-8' src='linkedin.svg' />
          </a>
          <a href='https://github.com/faizaanqureshi'>
            <img className='w-8 h-8 ml-6' src='github.svg' />
          </a>
          <a href='https://faizaanqureshi.medium.com'>
            <img className='w-8 h-8 ml-6' src='medium.svg' />
          </a>
          <a href='https://instagram.com/faizaanqureshi_/'>
            <img className='w-8 h-8 ml-6' src='instagram.svg' />
          </a>
        </div>
      </div>
      <hr class="h-px mt-10 mb-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
      <div className='flex flex-col justify-between p-8 lg:flex-1 lg:mr-10 lg:overflow-auto'>
        <div className='flex flex-col'>
          <h2 className='font-sans text-white font-medium text-2xl pb-2'>Education</h2>
          <p className='font-sans text-slate-400 pt-2 pb-8'>I'm a student enrolled in a double degree program, allowing me to study both Computer Science and Business Administration. This combination enables me to internalize and communicate the needs of stakeholders and develop solutions that are tailored for their needs</p>
          <div className='flex flex-row justify-left pb-6'>
            <img className='w-20 h-20' src='waterloo.png' />
            <div className='flex flex-col pl-6 pr-6'>
              <h2 className='font-sans text-white font-medium text-xl'>University of Waterloo</h2>
              <p className='font-sans text-slate-300'>Honours Bachelor of Computer Science</p>
              <p className='font-sans text-slate-400 text-sm pt-2'>Related Coursework: Data Structures & Algorithms, Object Oriented Programming, Computer Design, Enumeration and Graph Theory, Optimization, Logic & Computation, Statistics</p>
            </div>
          </div>
          <div className='flex flex-row justify-left'>
            <img className='w-20 h-20' src='laurier.png' />
            <div className='flex flex-col pl-6 pr-6'>
              <h2 className='font-sans text-white font-medium text-xl'>Wilfrid Laurier University</h2>
              <p className='font-sans text-slate-300'>Honours Bachelor of Business Administration</p>
              <p className='font-sans text-slate-400 text-sm pt-2'>Related Coursework: Financial Accounting, Managerial Accounting, Finance I and II, Marketing Management, Human Resources Management, Business Law, Organizational Behaviour</p>
            </div>
          </div>
        </div>
        <hr class="h-px mt-10 mb-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
        <div class='lg:pl-2'>
          <h2 className='font-sans text-white font-medium text-2xl pb-6'>Experience</h2>
          <ol class="relative border-s border-white">
            <li class="mb-10 ms-6 flex flex-row justify-left">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <img className='w-12 h-12' src='interac.png' />
              <div className='flex flex-col pl-6 pr-6'>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">January 2024 - Present</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Software Developer Intern</h3>
                <p className='font-sans text-slate-300'>Interac Corp.</p>
                <p className='font-sans text-slate-400 text-sm pt-2'>Tools Used: Java (Spring/Spring Boot), JUnit, Mockito, SonarQube, JIRA, Agile Project Management</p>
              </div>
            </li>
            <li class="ms-6 flex flex-row justify-left">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <img className='w-12 h-12' src='omers.png' />
              <div className='flex flex-col pl-6 pr-6'>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">January 2023 - April 2023</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern</h3>
                <p className='font-sans text-slate-300'>OMERS</p>
                <p className='font-sans text-slate-400 text-sm pt-2'>Tools Used: Java (Spring/Spring Boot), React.js, JUnit, Mockito, Postman, Swagger, SonarQube, JIRA, Agile Project Management</p>
              </div>
            </li>
          </ol>
        </div>
        <hr class="h-px mt-10 mb-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <h2 className='font-sans text-white font-medium text-2xl pb-6'>Projects</h2>
            <div className='flex flex-row justify-left pb-6'>
              <div className='flex flex-col'>
                <h2 className='font-sans text-white font-medium text-xl'>Laurier Flow</h2>
                <p className='font-sans text-slate-300'>Deployment in Q1 2024</p>
                <ul class="space-y-1 text-slate-400 pl-5 list-disc list-outside pt-2">
                  <li>
                    Developed a course discovery platform by designing a web scraper using Node.js and Puppeteer to gather course
                    registration numbers efficiently, ensuring up-to-date information for students
                  </li>
                  <li>
                    Created splash screens and user interfaces for courses and account management using React.js and Next.js, along
                    with Tailwind CSS as a styling framework
                  </li>
                  <li>
                    Established a robust backend infrastructure with Supabase (PostgreSQL), facilitating data storage for courses,
                    professors, users, sections, and reviews
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-row justify-left pb-6'>
              <div className='flex flex-col'>
                <h2 className='font-sans text-white font-medium text-xl'>The Blessed Path</h2>
                <a href='https://theblessedpath.faith'>
                  <p className='font-sans text-slate-300'>theblessedpath.faith</p>
                </a>
                <ul class="space-y-1 text-slate-400 pl-5 list-disc list-outside pt-2">
                  <li>
                    Used Material UI and React.js to create a platform that allows users to explore Islamic scriptures in over 40 languages
                  </li>
                  <li>
                    Integrated OpenAI’s APIs and LLMs to power an interactive chatbot directly within the platform, allowing users to get
                    accurate information by providing dynamic citations from scriptures
                  </li>
                  <li>
                    Hosted the frontend on Vercel and implemented a Flask backend hosted using AWS Lambda, ensuring reduced costs
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-row justify-left pb-6'>
              <div className='flex flex-col'>
                <h2 className='font-sans text-white font-medium text-xl'>Chess++</h2>
                <a href='http://bit.ly/3TXyw0D'>
                  <p className='font-sans text-slate-300'>bit.ly/3TXyw0D</p>
                </a>
                <ul class="space-y-1 text-slate-400 pl-5 list-disc list-outside pt-2">
                  <li>
                    Engineered a C++ application from the ground up, designing the structure with UML diagrams
                  </li>
                  <li>
                    Utilized Object-Oriented principles, polymorphism, and design patterns including Observer, Factory,
                    MVC, and other engineering principles to increase cohesion and reduce coupling between classes and libraries
                  </li>
                  <li>
                    Developed GUI using X11, mapping user screen clicks to the window allowing for user I/O using mouse clicks.
                  </li>
                  <li>
                    Displayed valid and invalid moves for players by highlighting squares
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-row justify-left pb-6'>
              <div className='flex flex-col'>
                <h2 className='font-sans text-white font-medium text-xl'>Astroworld</h2>
                <a href='https://bit.ly/3Q5RfBN'>
                  <p className='font-sans text-slate-300'>bit.ly/3Q5RfBN</p>
                </a>
                <ul class="space-y-1 text-slate-400 pl-5 list-disc list-outside pt-2">
                  <li>
                    Developed a desktop game/jukebox application based around a popular musician using Java (Processing IDE)
                  </li>
                  <li>
                    Implemented multiple sorting algorithms including selection sort and insertion sort using recursive elements and implemented file sav‑
                    ing/storage to store persistent user information. Developed a plethora of objects and instances of graphical components to animate the user
                    experience
                  </li>
                  <li>
                    Mapped .wav sounds files using their frequencies and wavelengths and displayed them to the user as an aesthetic media player. Implemented
                    a modified version of the ”chrome dinosaur game” to be paired with the music playing functionality
                  </li>
                </ul>
                <p className='font-sans text-slate-300 pt-2 underline'>This project is near and dear to my ❤ I developed this in high school and poured my soul into it. While it may not have the best tech stack, I assure you it deserves your attention</p>
              </div>
            </div>
            <div className='flex flex-row justify-left pb-6'>
              <div className='flex flex-col'>
                <h2 className='font-sans text-white font-medium text-xl'>COVID-19 Statistics</h2>
                <a href='https://bit.ly/3oDpbtW'>
                  <p className='font-sans text-slate-300'>bit.ly/3oDpbtW</p>
                </a>
                <ul class="space-y-1 text-slate-400 pl-5 list-disc list-outside pt-2">
                  <li>
                    Developed an application that scraped the web for the latest COVID‑19 statistics including total cases, recoveries, and more from across the
                    globe using the JSoup Java library
                  </li>
                  <li>
                    Displayed the information scraped using an algorithm that separated information by continent. Created a window on the desktop and gave
                    users several options and drop down menus where they could search for worldwide data, individual continents, or country specific information.
                  </li>
                  <li>
                    Demonstrated proficiency in JavaFX and the JavaFX Scene Builder which was used to design layouts, menus, and scenes for the user to
                    interact with
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-row justify-left pb-6'>
              <div className='flex flex-col'>
                <h2 className='font-sans text-white font-medium text-xl'>Bright Mark</h2>
                <a href='https://bit.ly/3PYDmWN'>
                  <p className='font-sans text-slate-300'>bit.ly/3PYDmWN</p>
                </a>
                <ul class="space-y-1 text-slate-400 pl-5 list-disc list-outside pt-2">
                  <li>
                    Collaborated to develop an application that records classes and grades for students, automatically calculating student averages
                  </li>
                  <li>
                    Saved the information to the OS file system for persistent memory
                  </li>
                  <li>
                    Used EasyGUI to develop a graphical interface for ease in recording new data
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-row justify-left'>
              <div className='flex flex-col'>
                <h2 className='font-sans text-white font-medium text-xl'>FM Radio</h2>
                <a href='https://bit.ly/3zmvJSW'>
                  <p className='font-sans text-slate-300'>bit.ly/3zmvJSW</p>
                </a>
                <ul class="space-y-1 text-slate-400 pl-5 list-disc list-outside pt-2">
                  <li>
                    Created a circuit for an FM Radio using an Arduino, breadboard, speakers, radio modules, LEDs, LCD Displays, and other electronic components
                  </li>
                  <li>
                    Designed schematic diagrams for the circuit using Tinkercad
                  </li>
                  <li>
                    Coded the Arduino in C to adjust the frequency of the radio based on the circuits state and dials/remote control IR sensors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;