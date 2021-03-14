<template>
	<article class="examples__block">
		<h2 class="examples__block__title">
			Carte de France avec liens des régions
		</h2>
		<div class="examples__block__info">
			<div class="examples__block__info__item">
				Emplacement pointé : {{ pointedLocation }}
			</div>
			<div class="examples__block__info__item">
				Emplacement ciblé : {{ focusedLocation }}
			</div>
			<div class="examples__block__info__item">
				Emplacement sélectionné : {{ clickedLocation }}
			</div>
		</div>
		<div class="examples__block__map">
			<svg-map
				:map="France"
				location-role="link"
				@mouseover="pointLocation"
				@mouseout="unpointLocation"
				@focus="focusLocation"
				@blur="blurLocation"
				@click="clickLocation"
			/>
		</div>
	</article>
</template>

<script>
import France from '@svg-maps/france.regions'
import { getLocationName } from '@/utilities.js'
import SvgMap from '@/components/svg_map.vue'
const URL = {
	ara: 'https://fr.wikipedia.org/wiki/Auvergne-Rh%C3%B4ne-Alpes',
	bfc: 'https://fr.wikipedia.org/wiki/Bourgogne-Franche-Comt%C3%A9',
	bre: 'https://fr.wikipedia.org/wiki/R%C3%A9gion_Bretagne',
	cvl: 'https://fr.wikipedia.org/wiki/Centre-Val_de_Loire',
	cor: 'https://fr.wikipedia.org/wiki/Corse',
	ges: 'https://fr.wikipedia.org/wiki/Grand_Est',
	hdf: 'https://fr.wikipedia.org/wiki/Hauts-de-France',
	idf: 'https://fr.wikipedia.org/wiki/%C3%8Ele-de-France',
	nor: 'https://fr.wikipedia.org/wiki/Normandie_(r%C3%A9gion_administrative)',
	naq: 'https://fr.wikipedia.org/wiki/Nouvelle-Aquitaine',
	occ: 'https://fr.wikipedia.org/wiki/Occitanie_(r%C3%A9gion_administrative)',
	pdl: 'https://fr.wikipedia.org/wiki/Pays_de_la_Loire',
	pac: 'https://fr.wikipedia.org/wiki/Provence-Alpes-C%C3%B4te_d%27Azur',
}
export default {
	name: 'LinkMap',
	components: {
		SvgMap,
	},
	data() {
		return {
			France,
			pointedLocation: null,
			focusedLocation: null,
			clickedLocation: null,
		}
	},
	methods: {
		pointLocation(event) {
			this.pointedLocation = getLocationName(event.target)
		},
		unpointLocation(event) {
			this.pointedLocation = null
		},
		focusLocation(event) {
			this.focusedLocation = getLocationName(event.target)
		},
		blurLocation(event) {
			this.focusedLocation = null
		},
		clickLocation(event) {
			this.clickedLocation = getLocationName(event.target)
			window.open(URL[event.target.id], '_blank')
		},
	},
}
</script>