import eventData from '../db/events/index.js';

const getEvents = async (req, res, next) => {
    try {
        const events = await eventData.getEvents();
        res.status(200).send(events);


    } catch (error) {
        res.status(400).send(error.message);
    }
    finally {
        sql.close();
    
    }
}

export {getEvents};