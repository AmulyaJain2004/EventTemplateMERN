import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
    date: { 
        type: String, 
        required: true 
    },

    time: { 
        type: String, 
        required: true 
    },

    event: { 
        type: String, 
        required: true 
    }
});
  
const sponsorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },

    link: { 
        type: String, 
        required: false
    },

    imageURL: { 
        type: String, 
        required: false 
    }
});
  
const partnerSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },

    link: { 
        type: String, 
        required: false 
    },

    imageURL: { 
        type: String, 
        required: false 
    }
});
  
const dbtSchema = new mongoose.Schema({
    question: { 
        type: String, 
        required: true 
    },

    answer: { 
        type: String, 
        required: true 
    }
});
  
const eventSchema = new mongoose.Schema(
    {
        eventName: { 
            type: String, 
            required: true
        },

        aboutEvent: [{ 
            type: String, 
            required: false 
        }],

        challenge: { 
            type: String, 
            required: true 
        },

        perks: { 
            type: String, 
            required: false 
        },

        theme: { 
            type: String, 
            required: true 
        },

        timeline: [timelineSchema],

        sponsors: [sponsorSchema],

        campusPartners: [partnerSchema],

        communityPartners: [partnerSchema],

        faq: [dbtSchema],

        registrationFormLink: { 
            type: String, 
            required: false 
        }
    }
);

const Event = mongoose.model('Event', eventSchema);
export default Event;