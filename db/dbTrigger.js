const pg = require('pg');
require('dotenv').config();

const {
  DATABASE,
  USER_NAME,
  USER_PASSWORD,
  HOST,
  DB_PORT
} = process.env;

const pgClient = new pg.Client({
  database: DATABASE,
  user: USER_NAME,
  password: USER_PASSWORD,
  host: HOST,
  port: DB_PORT,
});

pgClient.connect();


//function
const functionQuery = pgClient.query(`

  --creating trigger function that performs a pg_notify() invocation, uses row_to_json to use JSON as a transport layer
  --row_to_json credit comes from https://dba.stackexchange.com/questions/179820/how-to-safely-populate-pg-notify-payload/179821#179821

  CREATE OR REPLACE FUNCTION new_reservation() RETURNS trigger AS $new_reservation$
      BEGIN
      PERFORM pg_notify('reserve_event', row_to_json(NEW)::text );
        RETURN NEW;
      END;
  $new_reservation$ LANGUAGE plpgsql;
`);

//trigger
const triggerQuery = pgClient.query(`
  --create event trigger for rows getting inserted into Reservations table
  CREATE TRIGGER reservation_trigger AFTER INSERT ON "Reservations"
    FOR EACH ROW EXECUTE FUNCTION new_reservation();
`);

Promise.all([functionQuery, triggerQuery])
  .then(console.log('success at Promise.all invocation'))
  .catch(err => console.error(err));

const listener = () => {
  pgClient.on('notification', data => {
    const payload = JSON.parse(data.payload);
    console.log(payload);
  });
};

module.exports = {
  listener
};