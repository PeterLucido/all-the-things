import { Routes, Route } from 'react-router-dom'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SillyThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const eugenesThings = [
    {
      name: 'video games',
      image:
        'https://imgs.xkcd.com/comics/coffee.png',
      attributes: [
        'fun',
        'anger inducing',
        'expensive',
        '$70 is too much for a video game',
      ],
    },
    {
      name: 'this is not a taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'you are not looking at a taco',
        'it is not a taco',
        'your eyes are deceiving you',
        'farewell',
      ],
    },
    {
      name: 'idk what this picture is but we will find out',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['what', 'is', 'this', 'Picture?'],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const stephensThings = [
    {
      name: "canadians",
      image: "https://imgs.xkcd.com/comics/canada.png",  
      attributes: ["hockey","metric","loonie","its spelled colour"],
    },
  ]

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={stephensThings} />}
      />
    </Routes>
  )
}

export default App
