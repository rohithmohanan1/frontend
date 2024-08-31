import { motion } from "framer-motion";
import "./hero.scss"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildern: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

const Hero = () => {

    const handleClick = () => {
        const portfolioElement = document.getElementById('Portfolio');
        if (portfolioElement) {
            portfolioElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleContact = () => {
        const contactElement = document.getElementById('Contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Rave Academy</motion.h2>
                    <motion.h1 variants={textVariants}>Rave... Rise... Redefine...</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        {/* <motion.button variants={textVariants} onClick={handleClick}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants} onClick={handleContact}>Contact Me</motion.button> */}
                    </motion.div>
                    <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
                </motion.div>

                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="intital" animate="animate">
                    SI Mains, SI Prelims, KAS, Degree Mains
                </motion.div>

                <div className="imageContainer">
                    <img src="/hero.png" alt="" /> 
                </div>
            </div>
        </div>
    )
}

export default Hero