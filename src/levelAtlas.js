import { Level } from './level.js';
import { binaryWidget, binaryConvertWidget } from './widgets.js';

/** @function levelAtlas
 * @summary Holds all level information.
 * @description Levels are made by hand in this function.
 * @author DTT
 * @author BC
 */
function levelAtlas() {
	let levels = [];

	// Example Level
	//levels.push(
	//	new Level(
	//		0,
	//		'Example Title',
	//		'Example Topic',
	//		new exampleWidget(),
	//		[2, 'Cat', true],
	//		['1 + 1 = ?', 'Animal that meows?', 'The sky is blue.']
	//	)
	//);

	levels.push(
		new Level(
			0,
			'Binary',
			'Introduction to binary',
			new binaryWidget(),
			['1', '5', '198'],
			['Write 1 in binary', 'Write 5 in binary', 'Write 198 in binary'],
			'LEVEL INFO GOES HERE, IT CAN BE AN HTML ELEMENT OBJECT TOO'
		)
	);

	levels.push(
		new Level(
			1,
			'Binary conversion',
			'Learn to convert to and from binary',
			new binaryConvertWidget(),
			['a', 'A', 'Hello world!'],
			[
				'What is "a" in binary?',
				'What is "A" in binary?',
				'What is "Hello world!" in binary?',
			],
			'LEVEL INFO GOES HERE, IT CAN BE AN HTML ELEMENT OBJECT TOO'
		)
	);

	// Dev testing widget.
	levels.push(
		new Level(
			levels.length,
			'Testing',
			'Testing',
			new binaryWidget(),
			['1', '3', '7'],
			[
				[
					'This is the first message in the queue.',
					'This is the second.',
					'The third. Anser is 1.',
				],
				[
					'Now onto the second level, which has two messages queued instead of one.',
					'The answer for this one is 3.',
				],
				'The final stage in this test level has one message, no array.',
			],
			'LEVEL INFO GOES HERE, IT CAN BE AN HTML ELEMENT OBJECT TOO'
		)
	);

	return levels;
}

export { levelAtlas };
