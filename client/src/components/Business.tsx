import {features} from '../constants';
import styles, {layout} from '../style';
import Button from './Button';

type Fc = {
	icon:string,
	title:string,
	content:string,
	index:number
};

const FeatureCard = (fc: Fc) => (
	<div className={`flex flex-row p-6 rounded-[20px] ${fc.index !== features.length-1 ? 'mb-6':'mb-0'} feature-card`}>
		<div className={` w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
			<img src={fc.icon} alt="icon" className={`w-[50%] h-[50%] object-contain`}/>
		</div>
		<div className='flex-1 flex flex-col ml-3'>
			<h4 className='font-poppins font-semi-bold text-[18px] text-white leading-[23px] mb-1'>{fc.title}</h4>
			<p className='font-poppins font-normal text-[16px] text-dimWhite leading-[24px] mb-1'>{fc.content}</p>
		</div>
	</div>
)

const Business = () => {
  return (
	<section id="features" className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				You do the blabla, <br className='sm:block hidden'/>we handle the momo.
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				With the right NFT you can build hears and bunnies !
			</p>
			<Button astyle="mt-10 rounded-[10px]"/>
		</div>
		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</div>
	</section>
  )
}

export default Business