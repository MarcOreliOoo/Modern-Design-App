import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
	<section id="clients" className={`${styles.flexCenter} my-4`}>
		<div className={`${styles.flexCenter} flex-wrap w-full`}>
			{clients.map((client) => (
				<div key={client.id} className={`${styles.flexCenter} flex-1 min-h-[100px] rounded-[20px] m-5 client-card`}>
					<img src={client.logo} alt="logo" className='sm:w-[192px] w-[100px] object-contain' />
				</div>
			))}
		</div>
	</section>
)

export default Clients