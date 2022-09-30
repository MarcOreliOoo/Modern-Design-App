import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
	<section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex-1 flex flex-col justify-start mr-10">
				<img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain"/>
				<p className={`${styles.paragraph} mt-4 m-w-[310px]`}>A new way blabla secure and reliable!</p>
			</div>
			<div className="flex-col">
				{footerLinks.map((footerlink) => (
					<div key={footerlink.key} className="flex flex-col">
						<h4>{footerlink.title}</h4>
						<ul>
							{footerlink.links.map((link, index)=>(
								<li key={link.name} className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary">
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	</section>
);
export default Footer;