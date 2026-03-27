export interface Sponsor {
	name: string;
	logo: string;
	url: string;
	tier: 'diamond' | 'platinum' | 'gold' | 'silver';
}

export const sponsors: Sponsor[] = [
	// Diamond
	{ name: 'Citadel', logo: 'citadel.png', url: 'https://citadel.com', tier: 'diamond' },
	{ name: 'Jane Street', logo: 'janestreet.png', url: 'https://www.janestreet.com/', tier: 'diamond' },
	{ name: 'Jump Trading', logo: 'jump.png', url: 'https://www.jumptrading.com/', tier: 'diamond' },
	{ name: 'SIG', logo: 'sig.png', url: 'https://sig.com/', tier: 'diamond' },
	// Platinum
	{ name: 'Optiver', logo: 'optiver.svg', url: 'https://optiver.com/', tier: 'platinum' },
	{ name: 'Hudson River Trading', logo: 'hrt.png', url: 'https://www.hudsonrivertrading.com/', tier: 'platinum' },
	// Gold
	{ name: 'DRW', logo: 'drw.png', url: 'https://drw.com', tier: 'gold' },
	{ name: 'Five Rings', logo: 'fiverings.png', url: 'https://fiverings.com', tier: 'gold' },
	{ name: 'Old Mission Capital', logo: 'omc.png', url: 'https://www.oldmissioncapital.com/', tier: 'gold' },
	{ name: 'D.E. Shaw', logo: 'deshaw.png', url: 'https://www.deshaw.com/', tier: 'gold' },
	{ name: 'Virtu', logo: 'virtu.png', url: 'https://www.virtu.com/', tier: 'gold' },
	{ name: 'IMC Trading', logo: 'imc_trading.png', url: 'https://www.imc.com/', tier: 'gold' },
	{ name: 'Walleye Capital', logo: 'walleye.png', url: 'https://walleyecapital.com/', tier: 'gold' },
	{ name: 'Seven Research', logo: 'seven_research.svg', url: 'https://www.sevenresearch.com/', tier: 'gold' },
	{ name: 'Tower Research', logo: 'tower.png', url: 'https://tower-research.com/', tier: 'gold' },
	{ name: 'Freestone Grove Partners', logo: 'freestone_grove.svg', url: 'https://www.fgrovep.com/', tier: 'gold' },
	// Silver
	{ name: 'Two Sigma', logo: 'two_sigma.png', url: 'https://www.twosigma.com/', tier: 'silver' }
];

export const tiers = ['diamond', 'platinum', 'gold', 'silver'] as const;

export const tierLabels: Record<(typeof tiers)[number], string> = {
	diamond: 'Diamond',
	platinum: 'Platinum',
	gold: 'Gold',
	silver: 'Silver'
};

export function getSponsorsByTier(tier: Sponsor['tier']): Sponsor[] {
	return sponsors.filter((s) => s.tier === tier);
}
