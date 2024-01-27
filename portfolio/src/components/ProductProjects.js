import React from 'react';
import BannerAnimation from './BannerAnimation';
import ProjectCard from './ProjectCard';
import Filler from '../img/blueCanvas.png';

const ProductProjects = () => {
    return (
        <>
        <BannerAnimation text={"Product Design Projects"}/>
        <ProjectCard
            title={"Project Title"}
            img={Filler}
            pitch={"This is where the elevator pitch for each project will go, which will be more highlighted than the other text"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend. Urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget lorem dolor. In fermentum posuere urna nec tincidunt praesent. Duis ut diam quam nulla porttitor. Diam maecenas sed enim ut sem viverra aliquet eget. Justo nec ultrices dui sapien eget. Ut faucibus pulvinar elementum integer enim neque volutpat. Erat velit scelerisque in dictum non consectetur a. Faucibus in ornare quam viverra orci sagittis eu volutpat. Enim tortor at auctor urna. Id leo in vitae turpis massa sed elementum. Non blandit massa enim nec dui nunc mattis enim. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nisl condimentum id venenatis a condimentum vitae. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id."}
            skill1={"Skill 1"}
            skill2={"Skill 2"}
            skill3={"Skill 3"}
        />

        <ProjectCard
            title={"Project Title"}
            img={Filler}
            pitch={"This is where the elevator pitch for each project will go, which will be more highlighted than the other text"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend. Urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget lorem dolor. In fermentum posuere urna nec tincidunt praesent. Duis ut diam quam nulla porttitor. Diam maecenas sed enim ut sem viverra aliquet eget. Justo nec ultrices dui sapien eget. Ut faucibus pulvinar elementum integer enim neque volutpat. Erat velit scelerisque in dictum non consectetur a. Faucibus in ornare quam viverra orci sagittis eu volutpat. Enim tortor at auctor urna. Id leo in vitae turpis massa sed elementum. Non blandit massa enim nec dui nunc mattis enim. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nisl condimentum id venenatis a condimentum vitae. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id."}
            skill1={"Skill 1"}
            skill2={"Skill 2"}
            skill3={"Skill 3"}
        />

        <ProjectCard
            title={"Project Title"}
            img={Filler}
            pitch={"This is where the elevator pitch for each project will go, which will be more highlighted than the other text"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend. Urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget lorem dolor. In fermentum posuere urna nec tincidunt praesent. Duis ut diam quam nulla porttitor. Diam maecenas sed enim ut sem viverra aliquet eget. Justo nec ultrices dui sapien eget. Ut faucibus pulvinar elementum integer enim neque volutpat. Erat velit scelerisque in dictum non consectetur a. Faucibus in ornare quam viverra orci sagittis eu volutpat. Enim tortor at auctor urna. Id leo in vitae turpis massa sed elementum. Non blandit massa enim nec dui nunc mattis enim. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nisl condimentum id venenatis a condimentum vitae. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id."}
            skill1={"Skill 1"}
            skill2={"Skill 2"}
            skill3={"Skill 3"}
        />
        </>
    );
};

export default ProductProjects;