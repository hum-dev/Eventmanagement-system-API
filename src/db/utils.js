import fs from 'fs-extra';
import {join} from 'path';


const loadSqlQuery = async (folderName, file) => {
    const filePath = join(process.cwd(), 'src', 'db', folderName, file);
    const files = await fs.readdir(filePath);
    const sqlFiles = await files.filter(f => f.endsWith('.sql'));
    const queries = {};
    for (const sqlFile of sqlFiles) {
        const query = await fs.readFileSync(join(filePath, sqlFile), {encoding: 'utf-8'});
        queries[sqlFile.replace('.sql', "" )] = query;
    }
    return queries;
}

export default loadSqlQuery;    