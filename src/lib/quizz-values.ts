import type { Orientation, QuizzQuestion, QuizzResult } from './models/quizz';

export const QUIZZ: QuizzQuestion[] = [
	{
		question: `Ton meilleur outil de travail ?`,
		answers: [
			{ label: 'Excel', value: 'none' },
			{ label: 'Montessori', value: 'isa' },
			{ label: 'Le téléphone', value: 'fab' }
		]
	},
	{
		question: 'Ta spécialité en cuisine ?',
		answers: [
			{ label: 'Un plat léger, mais de manière copieuse', value: 'none' },
			{ label: 'De la sauce épicée avec un supplément de piments', value: 'fab' },
			{ label: ` QUOI ? J'ENTENDS PAS AVEC LE BRUIT DU MAGIMIX !`, value: 'isa' }
		]
	},
	{
		question: `Quel âge as-tu ?`,
		answers: [
			{ label: 'Le plus jeune', value: 'fab' },
			{ label: 'Allez on compte : un, deux, trois, quatre…', value: 'isa' },
			{ label: "C'est marrant, j'en ai aucune idée", value: 'none' }
		]
	},
	{
		question: `Quel film on se regarde ce soir ?`,
		answers: [
			{ label: 'Une comédie française mais sans Benoît Poelvoorde svp', value: 'fab' },
			{
				label: `Le film avec un l'acteur là, qui joue un chômeur, il est aussi dans un autre film par le réalisateur marié à l'actrice qui fait de très beaux films, notamment celui qui se passe en 1800, mais si, c'est celle qu'on voit souvent, son nom c'est…, `,
				value: 'isa'
			},
			{ label: `Si c'est de David Lynch je suis pas sûr de tenir jusqu'à la fin`, value: 'none' }
		]
	},
	{
		question: `La meilleure destination de vacances ?`,
		answers: [
			{ label: 'Savignac-les-Ormeaux', value: 'isa' },
			{ label: 'Agia Galini', value: 'fab' },
			{ label: 'Le canapé', value: 'none' }
		]
	},
	{
		question: `Team chat ou team chien ?`,
		answers: [
			{ label: 'Team chat', value: 'isa' },
			{ label: 'Chat !', value: 'fab' },
			{ label: 'MIAOU', value: 'none' }
		]
	},
	{
		question: `En allumant la radio dans ta voiture, qu'est-ce qu'on entends ?`,
		answers: [
			{ label: 'Laurent Ruquier qui fait des devinettes', value: 'fab' },
			{ label: `Jérémie Rousseau qui explique pourquoi l'orchestre joue mal`, value: 'isa' },
			{ label: 'Dans 200 mètres, prenez la première sortie', value: 'none' }
		]
	},
	{
		question: `Ton avis sur le PB 120 stars de Niniste ?`,
		answers: [
			{ label: 'OK Google', value: 'isa' },
			{ label: 'Tu inventes des mots là', value: 'none' },
			{ label: '(hoche la tête) Ah oui, bien sûr, mais tout à fait', value: 'fab' }
		]
	},
	{
		question: `En dehors du travail, que fais-tu ?`,
		answers: [
			{ label: 'Je chante', value: 'isa' },
			{ label: 'Je cuisine', value: 'none' },
			{ label: 'Je travaille', value: 'fab' }
		]
	},
	{
		question: `Tu as un train à prendre dans une heure…`,
		answers: [
			{ label: 'Je suis déjà à la gare', value: 'none' },
			{
				label: "Je partirai 5 minutes avant, t'en fais pas, je connais les raccourcis",
				value: 'isa'
			},
			{ label: "J'appelle le CEO de la SNCF pour demander qu'on m'attende", value: 'fab' }
		]
	}
];

export const RESULTS: { [key in Orientation]: QuizzResult } = {
	fab: { header: 'You are fabulous!', description: 'You are a fabulous person!' },
	isa: { header: 'You are isabelline!', description: 'You are an isabelline person!' },
	none: { header: 'You are neutral!', description: 'You are a neutral person!' }
};
