import utils from '../utils.js';
import config from '../config.js';
import sql from 'mssql';
import express from 'express';
import loadSqlQuery from '../utils.js';

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.eventsList);
        return list.recordset;
    } catch (error) {
        return error.message;
        console.log(error.message);
    }
    finally {
        sql.close();
    }
};

export default  getEvents ;