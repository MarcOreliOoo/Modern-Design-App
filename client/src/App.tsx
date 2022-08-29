import styles from './style';

const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				NavBar
			</div>
		</div>
		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				Hero
			</div>
		</div>
		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				{/**<Stats></Stats>
				<Business></Business>
				<Billing></Billing>
				<CardDeal></CardDeal>
				<Testimonials></Testimonials>
				<Clients></Clients>
				<CTA></CTA>
				<Footer></Footer>*/}
			</div>
		</div>
	</div>
);

export default App;