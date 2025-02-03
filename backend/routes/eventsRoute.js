import express from 'express';
import Event from '../models/eventsModel.js';

const eventsRouter = express.Router();

// Create a new event
eventsRouter.post('/', async (request, response) => {
    try {
        const { eventName, theme, challenge, perks, timeline, sponsors, campusPartners, communityPartners, faq, registrationFormLink } = request.body;

        if (!eventName || !theme || !challenge || !perks || !registrationFormLink) {
            return response.status(400).send({
                message: 'Missing required fields: eventName, theme, challenge, perks, registrationFormLink'
            });
        }

        const newEvent = new Event(request.body);
        await newEvent.save();

        return response.status(201).json({ message: "Event created successfully!", event: newEvent });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "Internal Server Error", error });
    }
});

// Get all events
eventsRouter.get('/', async (request, response) => {
    try {
        const events = await Event.find({});
        return response.status(200).json({
            count: events.length,
            data: events
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "Internal Server Error", error });
    }
});

// Get a single event by ID
eventsRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const event = await Event.findById(id);

        if (!event) 
            return response.status(404).json({ message: "Event not found" });

        return response.status(200).json(event);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "Internal Server Error", error });
    }
});

// Update an event by ID
eventsRouter.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, request.body, { new: true });
        
        if (!updatedEvent) 
            return response.status(404).json({ message: "Event not found" });

        return response.status(200).json({ message: "Event updated successfully!", event: updatedEvent });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "Internal Server Error", error });
    }
});

// Delete an event by ID
eventsRouter.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) 
            return response.status(404).json({ message: "Event not found" });

        return response.status(200).json({ message: "Event deleted successfully!" });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: "Internal Server Error", error });
    }
});

export default eventsRouter;
