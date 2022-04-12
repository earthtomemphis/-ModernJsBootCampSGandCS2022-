const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
	Matter;

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: true,
		width,
		height,
	},
});
Render.run(render);
Runner.run(Runner.create(), engine);

/* World.add(
	world,
	MouseConstraint.create(engine, {
		mouse: Mouse.create(render.canvas),
	})
); */

// Walls
const walls = [
	Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
	Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
	Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
	Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];
World.add(world, walls);

// Maze generation
const grid = Array(cells)
	.fill(null)
	.map(() => Array(3).fill(false));

const verticals = Array(cells)
	.fill(null)
	.map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
	.fill(null)
	.map(() => Array(cells).fill(false));

console.log(horizontals);

// Random Shapes
/* for (let i = 0; i < 50; i++) {
	if (Math.random() > 0.5) {
		World.add(
			world,
			Bodies.rectangle(
				Math.random() * width,
				Math.random() * height,
				50,
				50
			)
		);
	} else {
		World.add(
			world,
			Bodies.circle(Math.random() * width, Math.random() * height, 35, {
				render: {
					fillStyle: 'green',
				},
			})
		);
	}
} */
