import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import Chatbot from './components/chatbot/Chat'

function App() {
   return (
   <>      
      <Navbar />
      <main>
         <Chatbot />
         <Hero />
         <Services />
      </main>
      <Footer />
   </>
   )
}

export default App