export interface Member {
	name: string;
	role: 'president' | 'board';
	image: string;
}

export const members: Member[] = [
	{ name: 'Michelle Kang', role: 'president', image: 'Michelle Kang.jpg' },
	{ name: 'William Gvozdjak', role: 'president', image: 'William Gvozdjak.jpg' },
	{ name: 'Aiden Wen', role: 'board', image: 'Aiden Wen.jpg' },
	{ name: 'Alina Yang', role: 'board', image: 'Alina Yang.jpg' },
	{ name: 'Alvin Tsai', role: 'board', image: 'Alvin Tsai.jpg' },
	{ name: 'Ben Fan', role: 'board', image: 'Ben Fan.jpg' },
	{ name: 'Catherine Li', role: 'board', image: 'Catherine Li.jpg' },
	{ name: 'Claire Zheng', role: 'board', image: 'Claire Zheng.jpg' },
	{ name: 'Daniel Xia', role: 'board', image: 'Daniel Xia.jpg' },
	{ name: 'Derek Chen', role: 'board', image: 'Derek Chen.jpg' },
	{ name: 'Deven Pietrzak', role: 'board', image: 'Deven Pietrzak.jpg' },
	{ name: 'Ekam Kaur', role: 'board', image: 'Ekam Kaur.jpg' },
	{ name: 'Emily Yu', role: 'board', image: 'EmilyYu.jpg' },
	{ name: 'Frank Liang', role: 'board', image: 'Frank Liang.jpg' },
	{ name: 'Iliyas Noman', role: 'board', image: 'Iliyas Noman.jpg' },
	{ name: 'Jason Youm', role: 'board', image: 'Jason Youm.jpg' },
	{ name: 'Jessica Wan', role: 'board', image: 'Jessica Wan.jpg' },
	{ name: 'Jonathan He', role: 'board', image: 'Jonathan He.jpg' },
	{ name: 'Justin Zhang', role: 'board', image: 'Justin Zhang.jpg' },
	{ name: 'Katie He', role: 'board', image: 'Katie He.jpg' },
	{ name: 'Liam Reddy', role: 'board', image: 'Liam Reddy.jpg' },
	{ name: 'Marin Hristov', role: 'board', image: 'Marin Hristov.jpg' },
	{ name: 'Mia Lu', role: 'board', image: 'Mia Lu.jpg' },
	{ name: 'Owen Zhang', role: 'board', image: 'Owen Zhang.jpg' },
	{ name: 'Sharvaa Selvan', role: 'board', image: 'Sharvaa Selvan.jpg' },
	{ name: 'Sneha Kundu', role: 'board', image: 'Sneha Kundu.jpg' },
	{ name: 'Victoria Fang', role: 'board', image: 'Victoria Fang.jpg' },
	{ name: 'Vinicius Portella', role: 'board', image: 'Vinicius Portella.jpg' },
	{ name: 'Vishnu Mangipudi', role: 'board', image: 'Vishnu Mangipudi.jpg' }
];

export const presidents = members.filter((m) => m.role === 'president');
export const boardMembers = members.filter((m) => m.role === 'board');
