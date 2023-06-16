
import {getEvents} from '../controllers/eventController.js';


const eventRoutes = (app) => {
    app.route('/events')
    .get(getEvents);
}


export default eventRoutes;