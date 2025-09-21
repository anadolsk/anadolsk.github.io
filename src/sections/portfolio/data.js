import Image1 from '../../assets/CI_photo.png'
import Image2 from '../../assets/sunhose.png'
import Image3 from '../../assets/powerlifting.png'
import Image4 from '../../assets/shiny4.png'
import Image5 from '../../assets/rps2.png'
import Image6 from '../../assets/memory_flippers.png'

const data = [
    {
        id: 1,
        category: 'Statistics',
        image: Image1,
        title: "Measuring First Impressions",
        desc: "Does knowledge of someone’s history of criminal drug use affect your first impression of them? I explored this idea using matching and effect moderation using R in rStudio. Individual project completed for Causal Inference in Fall 2024.",
        demo: "Nadolski_Causal_Final_Paper.pdf",
        github: "Causal_Inference_Final_Project.zip"
    },
    {
        id: 2,
        category: 'Computer Science',
        image: Image2,
        title: "SUNHOSE Plant Picker",
        desc: "The Plant Picker is designed to help you choose a good houseplant in respnose to your needs. I served as Project Manager, and we built this using Javascript, CSS, and HTML with the React framework. Semester long group project completed for Software Development in Fall 2024.",
        demo: 'https://sunhose-plant-picker.web.app',
        github: 'https://github.com/Dinodigger3000/sunhose-plant-picker'
    },
   
    {
        id: 3,
        category: 'Computer Science',
        image: Image5,
        title: "Rock Paper Scissors Simulation",
        desc: "Emulating simulations that were popular on social media, this runs through a crowd of objects playing Rock, Paper, Scissors. Made using Java in VSCode, this was a group project from my Data Structures class in Spring 2024.",
        demo: null,
        github: "https://github.com/mac-comp128-s24/128-project-alana-courtney-liv"
    },
    {
        id: 4,
        category: 'Statistics',
        image: Image4,
        title: "Numerical Methods Shiny App",
        desc: "Created for my Differential Equations course, this app allows users to generate and visualize data using three different numerical methods in order to compare them. It provides a good example of my proficiency in R. This was a group project completed in Fall 2023.",
        demo: "differential_equations_paper.pdf", 
        github: 'https://github.com/anadolsk/Math312Project'
    },
    {
        id: 5,
        category: 'Computer Science',
        image: Image6,
        title: "Matching Game",
        desc: "Our game is a recreation of the card-flipping matching games that children play, utilizing the methods emphasized in Object Oriented Programming. This was a group project from Fall 2023.",
        demo: null,
        github: "https://github.com/Mac-COMP-127-Fall-2023/course-project-memory-flippers"
    },
    {
        id: 6,
        category: 'Statistics',
        image: Image3,
        title: "Exploring Powerlifting",
        desc: "In this project, I practiced basic statistical modeling techniques in rStudio on a public powerlifting dataset. This includes making linear models and exploratory data visualizations. Group project completed for Introduction to Statistical Modeling in Fall 2022.",
        demo: 'Statistical_Modeling_Final_Paper.pdf',
        github: 'Statistical_Modeling_Final_Project.zip'
    }
]


export default data