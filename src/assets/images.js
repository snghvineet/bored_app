import constructingImg from '../assets/constructing.png';
import cookingImg from '../assets/cooking.png';
import familyTimeImg from '../assets/family-time.png';
import playingGuitarImg from '../assets/playing-guitar.png';
import romanticWalkImg from '../assets/romantic-walk.png';
import workingOnComputerImg from '../assets/working-on-computer.png';
import workingOutImg from '../assets/working-out.png';

export default {
	busywork: { src: constructingImg, alt: 'Person working on some furniture.' },
	cooking: { src: cookingImg, alt: 'Person cooking a meal.' },
	relaxation: { src: playingGuitarImg, alt: 'Family spending time together.' },
	music: { src: playingGuitarImg, alt: 'Person playing the guitar.' },
	social: {
		src: familyTimeImg,
		alt: 'Couple walking together in the moonshine.',
	},
	education: {
		src: workingOnComputerImg,
		alt: 'Person doing work on a computer.',
	},
	exercise: { src: workingOutImg, alt: 'Person working out.' },
};
