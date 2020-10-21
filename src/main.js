const AFRAME = require('aframe');
require('aframe-controller-cursor-component');

function coordToString(coord) {
	return `${coord.x || 0} ${coord.y || 0} ${coord.z || 0}`;
}

function createScene() {
	const scene = document.createElement('a-scene');
	document.body.appendChild(scene);
	return scene;
};

function defineAssets(scene, assets) {
	const assetsContainer = document.createElement('a-assets');
	assets.forEach(asset => {
		const element = document.createElement('img');
		element.setAttribute('id', asset.name);
		element.setAttribute('src', asset.src);
		element.setAttribute('crossorigin', 'anonymous');
		assetsContainer.appendChild(element);
	});
	scene.appendChild(assetsContainer);
};

function drawBackground(scene) {
	const groundElement = document.createElement('a-circle');
	groundElement.setAttribute('src', '#groundTexture');
	groundElement.setAttribute('rotation', '-90, 0, 0');
	groundElement.setAttribute('radius', 32);

	const skyElement = document.createElement('a-sky');
	skyElement.setAttribute('height', 2048);
	skyElement.setAttribute('radius', 30);
	skyElement.setAttribute('src', '#skyTexture');
	skyElement.setAttribute('theta-length', 90);
	skyElement.setAttribute('width', 2048);

	scene.appendChild(groundElement);
	scene.appendChild(skyElement);
}

function drawShapes(scene, shapes) {
	shapes.forEach(shape => {
		const element = document.createElement(`a-${shape.type}`);
		if (shape.position) element.setAttribute('position', coordToString(shape.position));
		if (shape.rotation) element.setAttribute('rotation', coordToString(shape.rotation));
		if (shape.radius) element.setAttribute('radius', shape.radius);
		if (shape.width) element.setAttribute('width', shape.width);
		if (shape.height) element.setAttribute('height', shape.height);
		if (shape.color) element.setAttribute('color', shape.color);
		element.setAttribute('controller-event-handler', '');
		scene.appendChild(element);
	});
}

function trackControls(scene) {
	const leftHandElement = document.createElement('a-entity');
	leftHandElement.setAttribute('oculus-touch-controls', 'hand: left');
	leftHandElement.setAttribute('controller-cursor');

	const rightHandElement = document.createElement('a-entity');
	rightHandElement.setAttribute('oculus-touch-controls', 'hand: right');
	rightHandElement.setAttribute('controller-cursor', '');

	scene.appendChild(leftHandElement);
	scene.appendChild(rightHandElement);
}

const assets = [
	{ name: 'groundTexture', src: 'https://cdn.aframe.io/a-painter/images/floor.jpg' },
	{ name: 'skyTexture', src: 'https://cdn.aframe.io/a-painter/images/sky.jpg' }
]

const shapes = [
	{ type: 'box', position: { x: -1, y: 0.6, z: -3 }, rotation: { x: 0, y: 45, z: 0 }, color: '#4CC3D9' },
	{ type: 'sphere', position: { x: 0, y: 1.35, z: -5 }, radius: 1.25, color: '#EF2D5E' },
	{ type: 'cylinder', position: { x: 1, y: 0.85, z: -3 }, radius: 0.5, height: 1.5, color: '#FFC65D' },
	{ type: 'plane', position: { x: 0, y: 0.1, z: -4 }, rotation: { x: -90, y: 0, z: 0 }, width: 4, height: 4, color: '#7BC8A4' }
];

AFRAME.registerComponent('controller-event-handler', {
	init: function () {
		var el = this.el;
		el.addEventListener('mouseenter', () => {
			el.setAttribute('material', 'color', '#24CAFF');
		});
		el.addEventListener('mouseleave', () => {
			el.setAttribute('material', 'color', '#EF2D5E');
		});
	}
});

const scene = createScene();
defineAssets(scene, assets);
drawBackground(scene);
drawShapes(scene, shapes);
trackControls(scene);