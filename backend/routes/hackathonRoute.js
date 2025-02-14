import express from "express";
import { HACKATHONMODEL } from "../models/hackathonModel.js";

const hackathonRouter = express.Router();

// PUT
// Create a new hackathon
hackathonRouter.post('/', async (request, response) => {
    try {
        const newHackathon = new HACKATHONMODEL(request.body);
        await newHackathon.save();
        response.status(201).json({ message: "Hackathon created successfully!", hackathon: newHackathon });
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: "Error registering the team", error: error });
    }
});

// GET
// Get all hackathon registrations
hackathonRouter.get("/registrations", async (request, response) => {
    try {
        const registrations = await HACKATHONMODEL.find();
        response.status(200).json(registrations);
    } catch (error) {
        response.status(500).json({ message: "Error fetching registrations", error: error.message });
    }
});

// GET
// Get a single hackathon registration/specific team by ID
hackathonRouter.get("/registrations/:id", async (request, response) => {
    try {
        const registration = await HACKATHONMODEL.findById(request.params.id);
        if (!registration) {
            return response.status(404).json({ message: "Registration not found" });
        }
        response.status(200).json(registration);
    } catch (error) {
        response.status(500).json({ message: "Error fetching registration", error: error.message });
    }
});

// PATCH
// Update a hackathon registration entry
hackathonRouter.put("/registrations/:id", async (request, response) => {
    try {
        const Entry = await HACKATHONMODEL.findByIdAndUpdate(request.params.id, req.body, { new: true });
        if (!Entry) {
            return response.status(404).json({ message: "Registration not found" });
        }
        response.status(200).json({ message: "Update successful", data: updatedEntry });
    } catch (error) {
        res.status(400).json({ message: "Error updating registration", error: error.message });
    }
});

// DELETE
// Delete a hackathon registration entry
hackathonRouter.delete("/registrations/:id", async (request, response) => {
    try {
        const Entry = await HACKATHONMODEL.findByIdAndDelete(request.params.id);
        if (!Entry) {
            return response.status(404).json({ message: "Registration not found" });
        }
        response.status(200).json({ message: "Registration deleted successfully" });
    } catch (error) {
        response.status(500).json({ message: "Error deleting registration", error: error.message });
    }
});
  
export default hackathonRouter;