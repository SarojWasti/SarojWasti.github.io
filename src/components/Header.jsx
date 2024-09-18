const Header = () =>{
    return(
        <div className="container text-justify">
            <h1 className="text-6xl"><span className="text-custom-black">SAROJ</span> <span className="text-custom-primary">WASTI</span></h1>
            <h2 className="text-2xl"><span className="text-custom-black">SOFTWARE</span> <span className="text-custom-primary">DEVELOPER</span></h2>
            <div className="">
                <ul className="flex pt-2 space-x-4 text-custom-grey text-2xl">
                    <a target="_blank" href="https://www.linkedin.com/in/saroj-wasti"><i class="fab fa-linkedin-in"></i></a>
                    <a target="_blank" href="https://www.instagram.com/sarojwasti"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com/Sarozwosti"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" href="https://github.com/SarojWasti"><i class="fab fa-github"></i></a>
                </ul> 
            </div>
            <p>I am a Software Developer fond of researching, problem solving, programming and always eager and motivated to learn new skills and be efficient. <br /> 
            In my leisure time, I spend and enjoy most of my time gaming and watching European, Asian and South American football.</p>
            <hr className="mt-2"/>
        </div>
        
    );
}
export default Header;