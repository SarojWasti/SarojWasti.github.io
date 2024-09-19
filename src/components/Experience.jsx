const Experience = () =>{
    return(
        <div className="container text-justify">
            <h1 className="text-4xl">EXPERIENCE</h1>
            <div>
                <h2 className=" headerStyle">FULL-STACK SOFTWARE DEVELOPER INTERN</h2>
                <h3 className="text-tert text-2xl">QUALITY IT SOLUTIONS NEPAL <span className="dateStyle">Aug 2020 - Dec 2020</span></h3>
                <div className="pt-4 text-justify">
                    <p>Developed and maintained a full-stack web application utilizing Laravel, MySQL, JavaScript, and PHP.</p> 
                    <p>Collaborated with other developers with Slack for communication and GitHub for version control.</p>  
                    <p>Integrated database design and management in MySQL ensuring efficient backend operations. </p>   
                    <p>Actively participated in code reviews and contributed to improving the overall quality and performance of the application.</p>   
                </div> 
            </div>
            <hr />
            <div className="group text-3xl">
                <a className="flex items-center gap-1" href="sarojwasti.pdf" target="_blank">FULL <span className="text-primary">RESUME</span> <img src="arrow.png" className="h-7 w-6 text-primary transition-transform duration-200 ease-in group-hover:translate-x-1 group-hover:scale-125" alt="" srcset="" /></a>
            </div>
        </div>
    );
}
export default Experience;