const Skills = () =>{
    return(
        <div className="container">
            <h1 className="text-4xl">SKILLS</h1>
            <h3 className="text-tert text-2xl">LIBRARIES, LANGUAGES & FRAMEWORKS</h3>

            <div>
                <ul className="flex flex-wrap space-x-2 text-4xl gap-2">
                    <li><i class="fab fa-html5"></i><h6>HTML5</h6></li>
                    <li><i class="fab fa-css3-alt"></i><h6>CSS</h6></li>
                    <li><i class="fab fa-js-square"></i><h6>JavaScript</h6></li>
                    <li><i class="fab fa-linux"></i><h6>Linux</h6></li>
                    <li><i class="fab fa-react"></i><h6>ReactJs</h6></li>
                    <li><i class="fab fa-node"></i><h6>NodeJS</h6></li>
                    <li><i class="fab fa-python"></i><h6>Python</h6></li>
                    <li><i class="fab fa-java"></i><h6>Java</h6></li>
                    <li><i class="fab fa-laravel"></i><h6>Laravel</h6></li>
                </ul>            
            </div>
            <h3 className="text-tert text-2xl">TOOLS & SERVICES</h3>
            <div>
            <ul className="flex flex-wrap space-x-2 text-4xl gap-2">
                <li><i class="fab fa-slack"></i><h6>Slack</h6></li>
                <li><i class="fab fa-github"></i><h6>github</h6></li>
                <li><i class="fab fa-git"></i><h6>GIT</h6></li>
                <li><i class="fab fa-docker"></i><h6>Docker</h6></li>
                <li><i class="fa-solid fa-database"></i><h6>MongoDB</h6></li>
                <li><i class="fab fa-microsoft"></i><h6>Microsoft Office</h6></li>

            </ul>             
            </div>
            <hr className="mt-2"/>
        </div>
    );
}
export default Skills;