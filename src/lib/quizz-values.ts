import type { Orientation, QuizzQuestion, QuizzResult } from './models/quizz';

export const QUIZZ: QuizzQuestion[] = [
	{
		question: `Ton meilleur outil de travail ?`,
		answers: [
			{ label: 'Excel', value: 'none' },
			{ label: 'Le téléphone', value: 'fab' },
			{ label: 'Montessori', value: 'isa' }
		]
	},
	{
		question: 'Ta spécialité en cuisine ?',
		answers: [
			{ label: 'Un plat léger de manière copieuse', value: 'none' },
			{ label: 'De la sauce épicée avec un supplément de piments', value: 'fab' },
			{ label: `QUOI ? J'ENTENDS PAS AVEC LE BRUIT DU MAGIMIX !`, value: 'isa' }
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
				label: `Le film avec un l'acteur là, qui joue un type, il est aussi dans un autre film par le réalisateur marié à l'actrice qui fait de très beaux films, notamment celui qui se passe en 1800, mais si, c'est celle qu'on voit souvent, son nom c'est…, `,
				value: 'isa'
			},
			{ label: `Si c'est de David Lynch je suis pas sûr de tenir jusqu'à la fin`, value: 'none' }
		]
	},
	{
		question: 'Lorsque tu danses :',
		answers: [
			{ label: "Tu danses tellement bien qu'on t'offre un panier de saucissons", value: 'none' },
			{ label: 'Non seulement tu danses, mais tu chante aussi', value: 'isa' },
			{
				label: 'Tu danse tellement fort que tu casses la jambe de ton ou ta partenaire',
				value: 'fab'
			}
		]
	},
	{
		question: `La meilleure destination de vacances ?`,
		answers: [
			{ label: 'Ax-les-Thermes', value: 'isa' },
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
		question: 'Comment recois-tu tes invités ?',
		answers: [
			{
				label: "Je leur fais un délicieux repas et annonce que c'est moi qui l'ai fait",
				value: 'fab'
			},
			{ label: 'On va sortir beacoup de bouteilles', value: 'none' },
			{ label: "Encore des invités ? C'est la 5ème fois cette semaine !", value: 'isa' }
		]
	},
	{
		question: `En allumant la radio dans ta voiture, qu'est-ce qu'on entend ?`,
		answers: [
			{ label: 'Laurent Ruquier qui fait des blagues nulles', value: 'fab' },
			{ label: `Jérémie Rousseau qui explique pourquoi l'orchestre joue mal`, value: 'isa' },
			{ label: 'Dans 200 mètres, prenez la première sortie', value: 'none' }
		]
	},
	{
		question: 'Et la télé ?',
		answers: [
			{ label: 'Pékin Express ou Le Meilleur Pâtissier', value: 'isa' },
			{ label: 'Je sais pas, elle est alumée en fond mais je ne la regarde pas', value: 'none' },
			{
				label: "Je n'ai pas envie de regarder, mais je suis trop bien installé pour me lever",
				value: 'fab'
			}
		]
	},
	{
		question: 'Comment préfères-tu naviguer ?',
		answers: [
			{ label: 'En kayak', value: 'none' },
			{ label: 'En bateau de croisière', value: 'isa' },
			{ label: 'À la nage', value: 'fab' }
		]
	},
	{
		question: `Ton avis sur le PB 120 stars de Niniste ?`,
		answers: [
			{ label: "Chat GPT, à l'aide !", value: 'isa' },
			{ label: 'Tu inventes des mots là ?', value: 'none' },
			{ label: '(hoche la tête) Ah oui, bien sûr, mais tout à fait', value: 'fab' }
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
	fab: {
		header: 'Tu es un Fakir',
		description:
			'Entrepreneur toujours actif sur Linkedin, tu ne refuses jamais un kir et as toujours de la harissa en réserve. Tu sais très bien recevoir (et être reçu !), tu es notamment connu pour une mousse au chocolat légendaire.'
	},
	isa: {
		header: 'Tu es une Babouche',
		description:
			"Excellente pédagogue, tu es admirée par tes élèves aussi bien pour ton charisme que tes talents sur scène. Tu connais aussi tous les bons plans pour les séjours de vacances, et la Normandie n'a aucun secret pour toi."
	},
	none: {
		header: 'Tu as pile 120 ans',
		description:
			"Tu réunis les qualités des deux mondes ! Tu aimes la bonne cuisine et les bons moments entre amis. Ton animal totem : l'adorable Zépline."
	}
};
