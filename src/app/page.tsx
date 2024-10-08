import MainBox from '../components/Home/MainBox';
import Navbar from '../components/Navbar/Navbar';
import hamburger from '../assets/hamburger.svg';
import bread from '../assets/bread.svg';
import caffee from '../assets/caffee.svg';
import market from '../assets/market.svg';
import watermelon from '../assets/watermelon.svg';
import milk from '../assets/milk_carton.svg';
import CardCategory from '../components/Card/CardCategory';
import SearchBox from '../components/SearchBox/SearchBox';

export default function Home() {
	const categoryList = [
		{
			title: 'فست فود',
			image: hamburger,
		},
		{
			title: 'نانوایی',
			image: bread,
		},
		{
			title: 'تره بار',
			image: watermelon,
		},
		{
			title: 'سوپر مارکت',
			image: market,
		},
		{
			title: 'لبنیات',
			image: milk,
		},
		{
			title: 'نوشیدنی',
			image: caffee,
		},
	];

	return (
		<div className="flex flex-col">
			<Navbar />
			<SearchBox />
			<MainBox />
			<div className="grid grid-cols-4 justify-items-center gap-2 h-[170px] overflow-y-auto p-2">
				{categoryList.map((item) => (
					<CardCategory
						key={item.title}
						title={item.title}
						image={item.image}
					/>
				))}
			</div>
		</div>
	);
}
