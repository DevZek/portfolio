import Container from "../ui/Container";

export default function Navbar(){
    return(
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6 border-b border-transparent transition-all duration-300">
        <Container className="flex items-center justify-between py-6"> 
        <div className="font-bold text-xl text-green-400 tracking-tight">EZ.</div>
        <div className="flex gap-10">
            <a href="#about" className="text-gray-500 text-xs uppercase tracking-widest hover:text-green-400 transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-500 text-xs uppercase tracking-widest hover:text-green-400 transition-colors duration-200">Skills</a>
            <a href="#projects" className="text-gray-500 text-xs uppercase tracking-widest hover:text-green-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-500 text-xs uppercase tracking-widest hover:text-green-400 transition-colors duration-200">Contact</a>
        </div>
        </Container>
    </nav>
    );
}