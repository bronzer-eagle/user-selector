const fs = require('fs');

class CSVParser {

    load(path) {

        return new Promise((resolve, reject)=> {

            fs.readFile(path, 'utf8', (err, data) => {

                if (err !== null) {

                    reject(err);

                }

                try {

                    const parsed = this.parse(data);

                    resolve(parsed);

                } catch (e) {

                    reject(e);

                }

            });

        });

    }

    parse(data) {

        const [keysRaw, ...rows] = data.split('\n');
        const keys = keysRaw.split(',');

        return rows.map((row) => {

            const result = {};
            const values = row.split(',');

            keys.forEach((key, keyIndex) => {

                result[key] = values[keyIndex];

            });

            return result;

        });

    }

}

module.exports = CSVParser;
