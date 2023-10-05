import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide a firstName'],
        unique: true,
    },
    lastName: {
        type: String,
        required: [true, 'Please provide a lastName'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
    location: {
        type: {
            country: String,
            city: String,
            continent: String,
        },
    },
    dynamicPricing: {
        type: {
            isActive: Boolean,
            minPrice: Number,
            dynamicPrice: Number,
        },
        default: {
            isActive: false,
            minPrice: 0,
            dynamicPrice: 0,
        },
    },
    imageUrl: {
        type: String,
        default:
            'https://api.writco.in/assets/images/user/102211221095713877.webp',
    },
    staticPrice: {
        type: Number,
        default: 0,
    },
    freeMinutes: {
        type: Number,
        default: 0,
    },
    serviceCategory: {
        type: String,
        default: '',
    },
    rating: {
        type: Number,
        default: 0,
    },
    languages: {
        type: [String],
        default: [],
    },
    _id: String,
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
