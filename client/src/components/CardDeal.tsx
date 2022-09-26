import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
	<section id="carddeal" className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>Find a better <br className='sm:block hidden'/>card dead in few clicks</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				blablablabla lorem ipsum blabla
			</p>
			<Button styles="mt-10 rounded-[10px]" />
		</div>
		<div className={layout.sectionImg}>
			<img src={card} alt="card" className='w-[100%] h-[100%]' />
		</div>
	</section>
)

export default CardDeal