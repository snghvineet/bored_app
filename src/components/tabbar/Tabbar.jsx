import TabItem from './TabItem';

export default function Tabbar({ tabs, activeTab, handler }) {
	return (
		<div className='flex h-12'>
			<ul className='flex items-center'>
				{tabs.map((tab, index) => (
					<TabItem
						key={tab.status}
						text={tab.text}
						onClick={handler.bind(null, index)}
						active={index === activeTab}
					/>
				))}
			</ul>
		</div>
	);
}
