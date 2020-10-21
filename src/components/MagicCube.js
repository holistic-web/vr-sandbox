export default function(AFRAME) {
	AFRAME.registerComponent('magic-cube', {
		init: () => {
			console.log('magic cube initialiased');
		},
		schema: {
			clicks: { type: Number, required: true }
		}
	})
}