
import Logo from './Logo'

const Navbar = () => {
   const links = [
   'Home', 'About Us', 'Legal Services',
   'Case Results', 'Our Team', 'Blog', 'Contact Us',
   ]

   return (
   <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
         <a href="#" className="flex items-center gap-3">
         <Logo className="w-10 h-10 text-[#0F172A]" />
         <span className="flex flex-col leading-none">
            <span className="text-[#0F172A] font-black text-xl tracking-tight">JUSTICE </span>
            <span className="text-[#0F172A] text-[10px] font-semibold tracking-[0.35em]">LAW GROUP</span>
         </span>
         </a>

         <ul className="hidden lg:flex gap-8">
         {links.map((link) => (
            <li key={link}>
               <a
               href="#"
                className="relative text-md text-gray-700 transition-colors duration-500 hover:text-navy after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:bg-navy after:transition-all after:duration-700 after:ease-in-out hover:after:w-full"
               >
               {link}
               </a>
            </li>
         ))}
         </ul>

         <a
         href="#"
         className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors"
         >
         Request Consultation
         </a>
      </div>
   </nav>
   )
}

export default Navbar