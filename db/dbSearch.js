const addSearchVectors = (db => {

  const searchables = {
    '"Items"': ['brand', 'type', 'description'],
    '"Users"': ['name']
  };

  const returnSearchString = (string) => {
    const splitStr = string.split('');
    splitStr.splice(splitStr.length - 1, 0, '_search');
    return splitStr.join('');
  };

  const returnVectorUpdateString = (string) => {
    const splitStr = string.split('');
    splitStr.splice(splitStr.length - 1, 0, '_vector_update');
    return splitStr.join('');
  };

  Promise.all(Object.keys(searchables).map((table) =>
    db.query(`
      ALTER TABLE ${table} ADD COLUMN ${returnSearchString(table)} TSVECTOR;
    `)
      .then(() =>
        db.query(`
          UPDATE ${table} SET ${returnSearchString(table)} = to_tsvector('english', '${searchables[table].join('\' || \' \' || \'')}');
        `)
      ).then(() =>
        db.query(`
          CREATE INDEX ${returnSearchString(table)} ON ${table} USING gin(${returnSearchString(table)});
        `)
      ).then(() =>
        db.query(`
          CREATE TRIGGER ${returnVectorUpdateString(table)}
          BEFORE INSERT OR UPDATE ON ${table}
          FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(${returnSearchString(table)}, 'pg_catalog.english', ${searchables[table].join(', ')});
        `)
      ).catch(err => console.error('Db Search Error'))
  )
  );
}
);

module.exports = {
  addSearchVectors
};

