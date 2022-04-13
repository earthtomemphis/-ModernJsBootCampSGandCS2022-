#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const path = require('path');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
	if (err) {
		console.error(err);
	}

	const statPromises = filenames.map((filename) => {
		return lstat(path.join(targetDir, filename));
	});

	const allStats = await Promise.all(statPromises);

	for (let stats of allStats) {
		const index = allStats.indexOf(stats);

		console.log(filenames[index], stats.isFile());
	}

	/* for (let filename of filenames) {
		try {
			const stats = await lstat(filename);

			console.log(filename, stats.isFile());
		} catch (err) {
			console.error(err);
		}
	} */

	/* for (let filename of filenames) {
		fs.lstat(filename, (err, stats) => {
			if (err) {
				console.error(err);
			}

			console.log(filename, stats.isFile());
		});
    } */

	/* const allStats = Array(filenames.length).fill(null);

	for (let filename of filenames) {
		const index = filenames.indexOf(filename);

		fs.lstat(filename, (err, stats) => {
			if (err) {
				console.error(err);
			}

			allStats[index] = stats;

			const ready = allStats.every((stats) => {
				return stats;
			});

			if (ready) {
				allStats.forEach((stats, index) => {
					console.log(filenames[index], stats.isFile());
				});
			}
		});
	} */
});

// Method #1
/* const lstat = (filename) => {
	return new Promise((resolve, reject) => {
		fs.lstat(filename, (err, stats) => {
			if (err) {
				reject(err);
			}

			resolve(stats);
		});
	});
}; */
